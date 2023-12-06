import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 16px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #4e4e4e;
    padding-bottom: 10px;
    margin-bottom: 20px;

    h3 {
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Card = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 24px;
`;
