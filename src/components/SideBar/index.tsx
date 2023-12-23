import { Cross2Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import { SideBarItem } from '../SideBarItem';

import { Container } from './style';

interface ISideBarProps {
  open: boolean;
  handleCloseSideBar: () => void;
}

export function SideBar({ open, handleCloseSideBar }: ISideBarProps) {
  const [shoulderRender, setShouldRender] = useState<boolean>(open);

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

  if (!shoulderRender) {
    return null;
  }

  return (
    <Container open={shoulderRender} $isLeaving={!open}>
      <SideBarItem />
      <div className="closeIcon">
        <button type="button" onClick={handleCloseSideBar}>
          <Cross2Icon width={28} height={28} color="#5F3DC4" />
        </button>
      </div>
    </Container>
  );
}
