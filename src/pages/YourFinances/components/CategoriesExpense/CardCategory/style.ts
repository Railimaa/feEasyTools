import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background: ${({ theme }) => (theme === 'dark' ? '#272727' : '#FFFFFF')};
  margin-top: 8px;

  .iconAndName {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      font-weight: 700;
      font-size: 16px;
      letter-spacing: -0.5px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    button {
      border: none;
      outline: none;
      background: none;
    }
  }
`;
