import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    padding: 40px;
  }

  .isInitialLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .content {
    flex: 1;
    height: 100%;
    max-height: 50vh;
    overflow-y: auto;

    .isLoading {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;
