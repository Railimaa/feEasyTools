/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import * as RdxDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';

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
  const [shouldRender, setShouldRender] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    }

    let timeoutId: NodeJS.Timeout;
    if (!open) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [open]);

  return (
    <RdxDialog.Root open={shouldRender} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <Container $isLeaving={!open}>
          <RdxDialog.Overlay className="overlay" />

          <RdxDialog.Content className="content">
            <header>
              <button type="button" onClick={onClose}>
                <Cross2Icon width={24} height={24} color="#fff" />
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
