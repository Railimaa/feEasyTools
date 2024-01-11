import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 136px;
    height: 48px;
    cursor: pointer;
    outline: none;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 19.6px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  }
`;
