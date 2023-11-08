/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { CSSProperties } from 'react';

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
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content side={side} style={{ zIndex: 201 }}>
        <ContainerContent style={style}>{children}</ContainerContent>
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface IDropdownMenuItem {
  children: React.ReactNode;
  style?: CSSProperties;
  colorFont?: string;
  colorHover?: string;
  colorFontHover?: string;
  onSelect?: () => void;
}

function DropdownMenuItem({
  children,
  style,
  colorHover,
  colorFontHover,
  colorFont,
  onSelect,
}: IDropdownMenuItem) {
  return (
    <RdxDropdownMenu.Item
      style={{ border: 'none', outline: 'none' }}
      onSelect={onSelect}
    >
      <ContainerItem
        style={style}
        color={colorHover}
        colorFontHover={colorFontHover}
        colorFont={colorFont}
      >
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
