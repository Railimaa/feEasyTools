import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      font-weight: bold;
      letter-spacing: -0.5px;
    }
  }
`;
