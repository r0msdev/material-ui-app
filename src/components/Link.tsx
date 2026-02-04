'use client';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

const Link = forwardRef<HTMLAnchorElement, NextLinkProps>(function Link(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

export default Link;
