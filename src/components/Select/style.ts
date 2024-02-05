import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from { transform: translateY(-100%);  opacity: 0; }
  to { transform: translateY(0);  opacity: 1; }
`;

export const Container = styled.div`
  .label {
    position: relative;

    span {
      font-size: 11px;
      position: absolute;
      top: 30px;
      left: 13px;
      z-index: 10;
      color: #272727;
      pointer-events: none;
    }
  }
`;

export const ContainerTrigger = styled.div`
  .trigger {
    position: relative;
    text-align: left;
    width: 100%;
    background: #f3f0ff;
    border-radius: 8px;
    border: 2px solid ${({ color }) => (color ? '#C92A2A' : '#9775fa')};
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    height: 52px;
    color: #272727;
    font-weight: bold;
    outline: none;

    span {
      color: #272727;
      font-size: 14px;
      font-weight: bold;
    }

    .icon {
      position: absolute;
      right: 13px;
      top: 30px;
      transform: translateY(-50%);
    }
  }
`;

export const ContainerContent = styled.div`
  .content {
    z-index: 999;
    overflow: hidden;
    background: #fff;
    border-radius: 16px;
    border: 1px solid #f1f3f5;
    box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.1);
    animation: ${animation} 0.3s;
  }

  .scroll-up-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background: #fff;
    color: #343a40;
  }

  .scroll-down-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background: #fff;
    color: #343a40;
  }

  .view-port {
    padding: 8px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #343a40;
    padding: 8px;
    padding-left: 20px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #f8f9fa;
      border-radius: 8px;
      transition: all 0.1s;
    }

    .itemIndicator {
      position: absolute;
      display: inline-flex;
      left: 10px;
    }
  }
`;
