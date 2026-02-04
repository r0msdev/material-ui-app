import { NextResponse } from 'next/server';

// Configure route runtime (optional, but good practice)
export const runtime = 'edge'; // or 'nodejs'
export const dynamic = 'force-dynamic'; // Prevent static optimization for API routes

export async function GET() {
  try {
    // Proxy to external API (JSONPlaceholder for demo)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
      // Add timeout and next options
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    
    if (!response.ok) {
      throw new Error(`External API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Return data with proper headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
