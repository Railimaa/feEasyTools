import styled from 'styled-components';

export const Container = styled.div`
  button {
    display: flex;
    flex-direction: column;
    height: 52px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: 2px solid ${({ color }) => (color ? '#C92A2A' : '#9775fa')};
    border-radius: 8px;
  }

  .formatDate {
    padding-top: 10px;
  }

  #Data {
    color: #495057;
    font-size: 12px;
  }
`;
