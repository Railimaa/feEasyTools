import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;

    h1 {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
    }

    p {
      span {
        color: #fff;
      }

      a {
        text-decoration: none;
        outline: none;
        color: #5f3dc4;
        margin-left: 8px;

        &:hover {
          color: #b197fc;
          transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
        }
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;
