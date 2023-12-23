import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    padding: 40px;
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .notTasks {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    span {
      color: #fff;
      font-weight: 500;
      letter-spacing: -0.2px;
    }
  }

  .content {
    flex: 1;
    height: 100%;
    max-height: 50vh;
    overflow-x: auto;
  }
`;
