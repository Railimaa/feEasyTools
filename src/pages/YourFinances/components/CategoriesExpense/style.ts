import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 50vh;
  overflow-y: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;
  background: ${({ theme }) => (theme === 'dark' ? '#0a0a0a' : '#f2f2f2')};

  @media (min-width: 768px) {
    padding: 40px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      font-size: 16px;
      letter-spacing: -0.5px;
      font-weight: bold;
    }
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .notCategories {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;

    span {
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      letter-spacing: -0.5px;
      font-weight: bold;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;
