import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
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

    .actions {
      display: flex;
      flex-direction: column;
      gap: 60px;
      width: 100%;
      max-width: 400px;
    }
  }

  .isInitialLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 100%;
    height: 100%;
  }

  .content {
    position: relative;
    margin-top: 40px;

    .isLoading {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-top: 60px;
    }
  }
`;
