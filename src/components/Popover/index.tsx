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
      <ContainerContent>
        <RdxPopover.Content>{children}</RdxPopover.Content>
      </ContainerContent>
    </RdxPopover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
