import { Cross2Icon } from '@radix-ui/react-icons';

import { SideBarItem } from '../SideBarItem';

import { Container } from './style';

interface ISideBarProps {
  open: boolean;
  handleCloseSideBar: () => void;
}

export function SideBar({ open, handleCloseSideBar }: ISideBarProps) {
  return (
    <Container open={open}>
      <SideBarItem />
      <div className="closeIcon">
        <button type="button" onClick={handleCloseSideBar}>
          <Cross2Icon width={28} height={28} color="#5F3DC4" />
        </button>
      </div>
    </Container>
  );
}
