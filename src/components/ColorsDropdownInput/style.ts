import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 100%;
    height: 52px;
    text-align: left;
    padding-left: 12px;
    padding-right: 12px;
    position: relative;
    background: #f3f0ff;
    border: 2px solid #9775fa;
    border-radius: 8px;
    margin-top: 20px;
    color: #272727;
    font-weight: bold;
    outline: none;
  }

  .iconChevronDown {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    color: #272727;
    font-weight: bold;
  }

  .iconColor {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    color: #272727;
    font-weight: bold;
  }
`;
