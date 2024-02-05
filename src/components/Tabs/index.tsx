/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */

import * as TabsRdx from '@radix-ui/react-tabs';
import React, { CSSProperties } from 'react';
import './style.css';

function TabsRoot({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: string;
}) {
  return (
    <TabsRdx.Root defaultValue={defaultValue} className="TabsRoot">
      {children}
    </TabsRdx.Root>
  );
}

function TabsList({ children }: { children: React.ReactNode }) {
  return <TabsRdx.List className="TabsList">{children}</TabsRdx.List>;
}

function TabsTrigger({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <TabsRdx.Trigger value={value} className="TabsTrigger">
      {children}
    </TabsRdx.Trigger>
  );
}

function TabsContent({
  children,
  value,
  style,
}: {
  children: React.ReactNode;
  value: string;
  style?: CSSProperties;
}) {
  return (
    <TabsRdx.Content value={value} className="TabsContent" style={style}>
      {children}
    </TabsRdx.Content>
  );
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
