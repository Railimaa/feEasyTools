import { Header } from '../../components/Header';

import { Categories } from './components/Categories';
import { Contact } from './components/Contact';
import { Container } from './style';

export function Contacts() {
  return (
    <>
      <Header />
      <Container>
        <div className="main">
          <div className="left">
            <Contact />
          </div>

          <div className="right">
            <Categories />
          </div>
        </div>
      </Container>
    </>
  );
}
