import { Cross2Icon } from '@radix-ui/react-icons';

import { SideBarItem } from '../SideBarItem';

import { Container, Overlay } from './style';
import { useSideBar } from './useSideBar';

interface ISideBarProps {
  open: boolean;
  handleCloseSideBar: () => void;
}

export function SideBar({ open, handleCloseSideBar }: ISideBarProps) {
  const { shoulderRender, theme } = useSideBar(open, handleCloseSideBar);

  if (!shoulderRender) {
    return null;
  }

  return (
    <Overlay $isLeaving={!open}>
      <Container $isLeaving={!open} theme={theme}>
        <div className="closeIcon">
          <button type="button" onClick={handleCloseSideBar}>
            <Cross2Icon width={33} height={33} color="#5F3DC4" />
          </button>
        </div>
        <SideBarItem />
      </Container>
    </Overlay>
  );
}
