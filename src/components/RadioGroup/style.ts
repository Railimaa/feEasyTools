import styled from 'styled-components';

export const Container = styled.div`
  .radioItem {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  button {
    all: unset;
  }

  .RadioGroupRoot {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .RadioGroupItem {
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    box-shadow: 0 2px 10px #000;
    transition: all ease-in-out 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }

    &:focus {
      box-shadow: 0 0 0 2px #5f3dc4;
    }
  }

  .RadioGroupIndicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .RadioGroupIndicator::after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #5f3dc4;
  }

  .Label {
    color: white;
    font-size: 15px;
    line-height: 1;
    padding-left: 8px;
  }
`;
