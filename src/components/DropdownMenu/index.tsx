/* eslint-disable react/require-default-props */
import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { CSSProperties } from 'react';

import { useTheme } from '../../contexts/useTheme';

import { ContainerContent, ContainerItem } from './style';

function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

interface IDropdownMenuTrigger {
  children: React.ReactNode;
  style?: CSSProperties;
}

function DropdownMenuTrigger({ children, style }: IDropdownMenuTrigger) {
  return (
    <RdxDropdownMenu.Trigger style={style}>{children}</RdxDropdownMenu.Trigger>
  );
}

interface IDropdownMenuContent {
  children: React.ReactNode;
  style?: CSSProperties;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

function DropdownMenuContent({ children, style, side }: IDropdownMenuContent) {
  const { theme } = useTheme();

  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content side={side} style={{ zIndex: 1000 }}>
        <ContainerContent style={style} theme={theme}>
          {children}
        </ContainerContent>
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface IDropdownMenuItem {
  children: React.ReactNode;
  style?: CSSProperties;
  colorHover?: string;
  onSelect?: () => void;
}

function DropdownMenuItem({
  children,
  style,
  colorHover,
  onSelect,
}: IDropdownMenuItem) {
  const { theme } = useTheme();

  return (
    <RdxDropdownMenu.Item
      style={{ border: 'none', outline: 'none' }}
      onSelect={onSelect}
    >
      <ContainerItem style={style} color={colorHover} theme={theme}>
        {children}
      </ContainerItem>
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
