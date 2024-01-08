import styled from 'styled-components';

export const Container = styled.div`
  /* background-color:#ffb399;
background-image:
radial-gradient(at 63% 3%, hsla(289,67%,75%,1) 0px, transparent 50%),
radial-gradient(at 89% 34%, hsla(286,69%,79%,1) 0px, transparent 50%),
radial-gradient(at 53% 27%, hsla(247,85%,76%,1) 0px, transparent 50%),
radial-gradient(at 81% 42%, hsla(182,68%,62%,1) 0px, transparent 50%),
radial-gradient(at 15% 90%, hsla(227,62%,69%,1) 0px, transparent 50%),
radial-gradient(at 82% 79%, hsla(234,78%,62%,1) 0px, transparent 50%),
radial-gradient(at 2% 44%, hsla(194,95%,61%,1) 0px, transparent 50%),
radial-gradient(at 10% 41%, hsla(159,96%,67%,1) 0px, transparent 50%),
radial-gradient(at 46% 74%, hsla(43,76%,66%,1) 0px, transparent 50%),
radial-gradient(at 16% 61%, hsla(276,60%,65%,1) 0px, transparent 50%),
radial-gradient(at 87% 26%, hsla(284,83%,65%,1) 0px, transparent 50%),
radial-gradient(at 86% 82%, hsla(288,67%,78%,1) 0px, transparent 50%); */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #272727;
  width: 100vw;
  height: 100vh;
  padding: 16px;
  overflow-y: hidden;

  .content {
    width: 100%;
    max-width: 508px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 40px;
    padding: 40px;
    border-radius: 20px;
    background: #000;
    box-shadow:
      rgba(103, 65, 217, 0.09) 0px 2px 1px,
      rgba(103, 65, 217, 0.09) 0px 4px 2px,
      rgba(103, 65, 217, 0.09) 0px 8px 4px,
      rgba(103, 65, 217, 0.09) 0px 16px 8px,
      rgba(103, 65, 217, 0.09) 0px 32px 16px;

    @media (min-width: 418px) {
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 80px;
      padding-right: 80px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 40px;

      h3 {
        color: #fff;
      }

      @media (min-height: 634px) {
        margin-top: 0;
      }
    }

    .form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
  }
`;
