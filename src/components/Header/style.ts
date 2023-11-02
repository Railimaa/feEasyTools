import styled from 'styled-components';

export const HeaderC = styled.header`
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-left: 20px;
  box-shadow: 0px 22px 70px 4px #5f3dc4;

  @media (min-width: 576px) {
    padding-left: 80px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;

    .nameLogo {
      display: flex;
      align-items: center;
      flex-direction: column;

      h2 {
        color: #5f3dc4;
        text-transform: uppercase;
      }

      span {
        color: #5f3dc4;
        font-weight: bold;
      }
    }
  }

  .toogle {
    display: flex;
    padding-right: 20px;

    button {
      border: none;
      background: transparent;
    }

    @media (min-width: 1000px) {
      display: none;
    }
  }

  .content {
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    gap: 80px;

    @media (min-width: 676px) {
      display: flex;
    }

    .hide {
      display: none;
      align-items: center;
      justify-content: center;
      gap: 80px;

      @media (min-width: 1000px) {
        display: flex;
      }
    }
  }

  #headerLink {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    outline: none;

    &:hover {
      color: #fff;
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
      background: transparent;
      border-radius: 8px;
      padding: 2px;
      box-shadow: 0px 22px 70px 4px #6741d9;
    }
  }
`;
