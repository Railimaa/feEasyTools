import styled from 'styled-components';

export const Container = styled.div<{
  theme: 'dark' | 'light';
  $valuesVisible: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
  background: ${({ theme }) => (theme === 'dark' ? '#272727' : '#FFFFFF')};
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;

  .nameAndDate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .block {
      strong {
        display: block;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : '#000')};
      }

      small {
        color: #868e96;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
    }
  }

  #INCOME {
    font-size: 16px;
    font-weight: 500;
    text-align: right;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #2f9e44;
    filter: ${({ $valuesVisible }) => ($valuesVisible ? 'blur(8px)' : 'none')};
  }

  #EXPENSE {
    font-size: 16px;
    font-weight: 500;
    text-align: right;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #e03131;
    filter: ${({ $valuesVisible }) => ($valuesVisible ? 'blur(8px)' : 'none')};
  }
`;
