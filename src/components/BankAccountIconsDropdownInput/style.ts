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
    border: 2px solid ${({ color }) => (color ? '#C92A2A' : '#9775fa')};
    border-radius: 8px;
    color: #272727;
    font-weight: bold;
    outline: none;
  }

  .default {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    color: #272727;
    font-weight: bold;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    color: #272727;
    font-weight: bold;
  }
`;
