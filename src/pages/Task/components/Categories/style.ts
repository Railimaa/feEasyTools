import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
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
    width: 100%;
    height: 100%;
  }

  .notCategories {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    span {
      color: #fff;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    flex: 1;
    width: 100%;
    height: 100%;
    max-height: 30vh;
    overflow-x: auto;
  }
`;
