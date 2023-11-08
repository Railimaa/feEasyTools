import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  padding-top: 32px;
  background: #343a40;
  border-radius: 16px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;
