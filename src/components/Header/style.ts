import styled from 'styled-components';

export const HeaderC = styled.header`
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-left: 20px;
  box-shadow: 0px 22px 70px 4px #5f3dc4;

  @media (min-width: 676px) {
    padding-left: 40px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;

    h2 {
      font-size: 20px;
      color: #5f3dc4;
    }
  }

  .toogle {
    display: flex;
    align-items: center;
    gap: 60px;
    padding-right: 20px;

    button {
      border: none;
      background: transparent;
    }

    @media (min-width: 1000px) {
      padding-right: 40px;
    }

    .userMenu {
      display: none;

      @media (min-width: 1000px) {
        display: flex;
      }
    }
  }

  .content {
    display: none;
    align-items: center;
    gap: 80px;

    @media (min-width: 723px) {
      display: flex;
    }
  }

  .navLink {
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

    &.active {
      border-bottom: 2px solid #5f3dc4;
      padding-bottom: 2px;
    }
  }
`;
