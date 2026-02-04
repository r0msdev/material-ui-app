'use client';

import * as React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';

export interface MenuItem {
  text: string;
  icon: React.ReactNode;
  href: string;
}

interface DrawerContentProps {
  items: MenuItem[];
  currentPath: string;
  onItemClick?: () => void;
}

export default function DrawerContent({ items, currentPath, onItemClick }: DrawerContentProps) {
  return (
    <Box>
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={currentPath === item.href}
              onClick={onItemClick}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
