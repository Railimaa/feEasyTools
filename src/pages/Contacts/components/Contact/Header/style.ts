import styled from 'styled-components';

export const Container = styled.header<{ $orderBy?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-bottom: 10px;

  strong {
    font-size: 24px;
    color: #fff;
  }

  .orderName {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: none;
      outline: none;
      background: none;

      span {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  #arrow {
    transform: ${({ $orderBy }) =>
      $orderBy === 'asc' ? `rotate(-180deg)` : 'rotate(0deg)'};
    transition: transform 0.2s ease-in;
  }
`;
