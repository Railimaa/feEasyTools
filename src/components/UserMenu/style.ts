import styled from 'styled-components';

export const Container = styled.div`
  background: #5f3dc4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;

  span {
    color: #fff;
  }
`;

export const ContainerItem = styled.div`
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 1px solid #4e4e4e;
  small {
    display: block;
    font-size: 14px;
  }
`;
