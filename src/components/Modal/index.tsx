/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import * as RdxDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';

import { Container } from './style';

interface IModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  rightAction?: React.ReactNode;
}

export function Modal({
  open,
  title,
  children,
  onClose,
  rightAction,
}: IModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <Container>
          <RdxDialog.Overlay className="overlay" />

          <RdxDialog.Content className="content">
            <header>
              <button type="button" onClick={onClose}>
                <Cross2Icon width={24} height={24} />
              </button>

              <strong>{title}</strong>

              <div className="rightAction">{rightAction}</div>
            </header>

            <div className="main">{children}</div>
          </RdxDialog.Content>
        </Container>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
