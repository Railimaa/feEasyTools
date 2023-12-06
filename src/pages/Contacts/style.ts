import styled, { keyframes } from 'styled-components';

const animationTitle = keyframes`
  to {
    scale: 100%;
    opacity: 100;
  } from {
    scale: 0%;
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100vh;
  padding: 16px;
  padding-top: 100px;
  background: #000000;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 100px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 80px;
    animation: ${animationTitle} 2s alternate-reverse infinite;

    h1 {
      color: #fff;
      box-shadow: 0px 2px 70px 4px #6741d9;
      border-radius: 8px;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 24px;

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
`;
