import styled from 'styled-components';

export const Container = styled.div`
  .button1 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 48px;
    height: 48px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;
  }

  .button2 {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 10;
    height: 48px;
    width: 48px;
    display: flex;
    border: none;
    background: transparent;
    outline: none;

    &.active {
      background: #fff;
    }
  }
`;
