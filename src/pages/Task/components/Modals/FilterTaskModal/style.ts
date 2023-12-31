import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  #filter {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    text-align: left;
    outline: none;
    background: none;
    border-radius: 12px;
    border: none;
    color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #383838;
    }
  }

  span {
    letter-spacing: -0.5px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 4px;
  }

  button {
    width: 100%;
  }

  .btn-active {
    background: #525252 !important;
  }
`;
