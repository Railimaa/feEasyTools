/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => (theme === 'dark' ? '#111113' : '#FFFFFF')};

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 24px;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
      min-height: 600px;
    }

    .left {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    .right {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    h2 {
      color: #fff;
      box-shadow: 0px 2px 70px 4px #6741d9;
      border-radius: 8px;
    }
  }

  .categories {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 40px;
    padding-bottom: 200px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .income {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    .expense {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }
`;
