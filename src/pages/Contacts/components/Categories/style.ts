import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    padding: 40px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
    margin-bottom: 20px;

    h3 {
      color: #fff;
      font-weight: bold;
    }
  }

  .isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .content {
    flex: 1;
    height: 100%;
    max-height: 60vh;
    overflow-y: auto;
  }
`;
