import { SideBarItem } from '../SideBarItem';

import { Container } from './style';

interface ISideBarProps {
  open: boolean;
}

export function SideBar({ open }: ISideBarProps) {
  return (
    <Container open={open}>
      <SideBarItem />
    </Container>
  );
}
