import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  body {
    background: #000000;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

    /* Estilos para a barra de rolagem */
    ::-webkit-scrollbar {
    width: 1px; /* Largura da barra de rolagem */
  }

  /* Estilos para o polegar da barra de rolagem (a parte que o usuário arrasta) */
  ::-webkit-scrollbar-thumb {
    background: #868E96; /* Cor do polegar da barra de rolagem */
  }

  /* Estilos para a trilha da barra de rolagem (a parte em que o polegar se move) */
  ::-webkit-scrollbar-track {
    background: #000000; /* Cor da trilha da barra de rolagem */
  }

  /* Estilos para a borda da barra de rolagem */
  ::-webkit-scrollbar-track-piece {
    background: #000000; /* Cor da borda da barra de rolagem */
  }
`;
