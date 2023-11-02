import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  margin-left: 20px;
  margin-top: 40px;

  a {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    outline: none;

    &:hover {
      color: #fff;
      transition: all 0.2s ease-in-out;
      background: transparent;
      border-radius: 8px;
      box-shadow: 0px 22px 70px 4px #5f3dc4;
    }
  }
`;
