import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px;
  background: ${({ color }) => color};
  border-radius: 16px;
  height: 200px;

  &:hover {
    cursor: pointer;
  }

  .content {
    span {
      display: block;
      color: ${({ color }) => (color === '#fff' ? '#343a40' : '#fff')};
      margin-top: 16px;
      font-weight: 500;
      letter-spacing: -0.5px;
    }
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
`;
