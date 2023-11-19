/* eslint-disable import/no-extraneous-dependencies */
import * as RdxPopover from '@radix-ui/react-popover';
import React from 'react';

import { ContainerContent } from './style';

function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Root>{children}</RdxPopover.Root>;
}

function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Trigger>{children}</RdxPopover.Trigger>;
}

function PopoverContent({ children }: { children: React.ReactNode }) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content style={{ zIndex: 403 }} side="top">
        <ContainerContent>{children}</ContainerContent>
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
