import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonC = styled.button<{ danger?: string; ghost?: string }>`
  border: none;
  padding-left: 24px;
  padding-right: 24px;
  height: 48px;
  margin-top: 12px;
  font-weight: bold;
  color: #fff;
  border-radius: 16px;
  transition: all ease-in-out 0.3s;
  background: ${({ color }) => {
    switch (color) {
      case 'danger':
        return '#C92A2A';
      case 'ghost':
        return '#495057';
      default:
        return '#5f3dc4';
    }
  }};

  &:hover {
    background: ${({ color }) => {
      switch (color) {
        case 'danger':
          return '#E03131';
        case 'ghost':
          return '#868E96';
        default:
          return '#7048e8';
      }
    }};
  }

  &:disabled {
    background: #d0bfff;
    font-weight: 400;
    cursor: not-allowed;
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
