import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 80px;
  padding-bottom: 32px;
  background: #111113;

  @media (min-width: 768px) {
    padding: 40px;
    padding-top: 90px;
  }

  .categories {
    padding-bottom: 300px;
  }
`;
