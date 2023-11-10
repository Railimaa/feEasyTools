import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  padding-top: 32px;
  background: #343a40;
  border-radius: 16px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  .sliderMonth {
    position: relative;
    margin-top: 24px;
  }

  .activeSlide {
    background: #868e96;
    border-radius: 36px;
  }

  .content {
    margin-top: 16px;
    flex: 1;
    overflow-y: auto;
    max-height: 70vh;

    .isLoading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .isEmpty {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;

      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 22.4px;
        text-align: center;
        color: #fff;
      }
    }
  }

  .initialLoading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 48px;
    height: 48px;
    border: none;
    background: transparent;
    outline: none;
  }
`;
