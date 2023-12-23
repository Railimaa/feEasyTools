import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  button {
    width: 100%;
    height: 52px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 20px;
    text-align: left;
    border-radius: 8px;
    border: 2px solid #9775fa;
    margin-top: 20px;
    font-size: 12px;
    color: #272727;
    font-weight: bold;
    background: #f3f0ff;
  }

  .label {
    position: absolute;
    left: 10px;
    top: 22px;
    font-size: 12px;
    color: #495057;
  }
`;

export const TextAreaC = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  outline: none;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 12px;
  color: #495057;
  resize: horizontal;
`;
