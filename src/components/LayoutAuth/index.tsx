import { GearIcon } from '@radix-ui/react-icons';
import { Outlet } from 'react-router-dom';

import { Container } from './style';

export function LayouthAuth() {
  return (
    <Container>
      <div className="content">
        <div className="logo">
          <h3>easytools</h3>
          <GearIcon width={24} height={24} color="#5F3DC4" />
        </div>

        <div className="form">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
