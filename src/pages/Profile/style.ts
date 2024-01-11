import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => (theme === 'dark' ? '#111113' : '#FFFFFF')};
`;

export const Form = styled.form`
  padding: 16px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  button {
    width: 100%;
    margin-top: 30px;
  }
`;

export const FieldSet = styled.fieldset<{ theme: 'dark' | 'light' }>`
  margin-top: 24px;
  border: 1px solid #9775fa;
  border-radius: 16px;
  padding: 16px;

  legend {
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.5px;
    padding: 8px;
  }
`;
