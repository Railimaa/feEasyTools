import styled from 'styled-components';

export const Container = styled.div`
  #btnLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    z-index: 90;
    border: none;
    outline: none;
    background: transparent;

    &:disabled {
      opacity: 0.4;
    }
  }

  #btnRight {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 1px;
    z-index: 90;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    background: transparent;

    &:disabled {
      opacity: 0.4;
    }
  }
`;
