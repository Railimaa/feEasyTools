import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 100%;
    height: 52px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    background: #f3f0ff;
    border-radius: 8px;
    border: 2px solid #9775fa;
    margin-top: 20px;
    text-align: left;
    color: #272727;
    font-weight: bold;
    position: relative;
  }

  .chevronIcon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;
