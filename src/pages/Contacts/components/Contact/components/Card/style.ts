import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 16px;
  margin-top: 10px;
  box-shadow: 0px 4px 10px 0px #6741d9;
  border-radius: 8px;

  .info {
    .nameAndCategory {
      display: flex;
      align-items: center;
      gap: 4px;

      strong {
        font-size: 16px;
        color: #222222;
      }

      small {
        padding: 4px;
        background: #e0e3ff;
        font-size: 14px;
        text-transform: uppercase;
        color: #5061fc;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      color: #bcbcbc;
      font-size: 14px;
      font-weight: 900;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
