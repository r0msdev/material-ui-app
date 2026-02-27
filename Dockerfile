# syntax=docker/dockerfile:1

# Production Dockerfile for Next.js application
# Following Docker best practices from https://docs.docker.com/build/building/best-practices/

# Base stage: shared foundation
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Stage 1: Builder - Build the application
FROM base AS builder

# Install dependencies using bind mounts — more efficient than COPY for
# files that are only needed during the build and not in the final image
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci

# Copy source code
COPY . .

# Set environment variable for production build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the Next.js application
RUN npm run build

# Stage 2: Production - Create minimal runtime image
FROM base AS production

LABEL org.opencontainers.image.title="material-ui-app" \
      org.opencontainers.image.description="Next.js Material-UI application" \
      org.opencontainers.image.version="1.0.0"

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 -G nodejs nodejs

# Copy package files with ownership
COPY --chown=nodejs:nodejs package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

# Copy built files from builder stage with ownership
COPY --chown=nodejs:nodejs --from=builder /app/public ./public
COPY --chown=nodejs:nodejs --from=builder /app/.next/standalone ./
COPY --chown=nodejs:nodejs --from=builder /app/.next/static ./.next/static

# Switch to non-root user
USER nodejs

# Expose the port the app runs on
EXPOSE 3002

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3002/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Set hostname and port
ENV HOSTNAME="0.0.0.0"
ENV PORT=3002

# Start the application
CMD ["node", "server.js"]
