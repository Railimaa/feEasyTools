import styled from 'styled-components';

export const Container = styled.div<{
  color: string;
  theme: 'dark' | 'light';
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  padding: 16px;
  border-radius: 16px;
  height: 200px;
  background: ${({ color }) => color};

  &:hover {
    cursor: pointer;
  }

  #name {
    color: ${({ color }) => (color === '#fff' ? '#343a40' : '#fff')};
    margin-top: 16px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }

  .saldo {
    span {
      display: block;
      color: ${({ color }) => (color === '#fff' ? '#343a40' : '#fff')};
      font-weight: 500;
      letter-spacing: -0.5px;
    }

    small {
      color: ${({ color }) => (color === '#fff' ? '#868e96' : '#fff')};
      font-size: 14px;
    }
  }

  .img {
    position: absolute;
    right: 10px;
    top: 40px;
    transform: translateY(-50%);
  }
`;
