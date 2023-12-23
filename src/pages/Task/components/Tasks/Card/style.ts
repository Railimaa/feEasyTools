import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  .infos {
    .titleAndDescription {
      span {
        display: block;
        color: #fff;
      }

      small {
        color: #fff;
      }
    }

    .dateAndCategory {
      margin-top: 20px;

      span {
        display: block;
        color: #fff;
      }

      small {
        color: #fff;
      }
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;
