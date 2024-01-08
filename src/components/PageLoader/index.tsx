import { GearIcon } from '@radix-ui/react-icons';

import { Spinner } from '../Spinner';

import { Container } from './style';

interface IPageLoaderProps {
  isFetching: boolean;
}

export function PageLoader({ isFetching }: IPageLoaderProps) {
  if (!isFetching) {
    return null;
  }

  return (
    <Container>
      <div className="content">
        <div className="logo">
          <span>easytools</span>
          <GearIcon width={20} height={20} color="#fff" />
        </div>

        <Spinner color="#fff" />
      </div>
    </Container>
  );
}
