import styled from 'styled-components';

export const Container = styled.div`
  .caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.408px;
    color: #fff;
  }

  .nav {
    display: flex;
    gap: 12px;
  }

  .nav_button_previous {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    background: transparent !important;
  }

  .nav_button_next {
    color: #fff !important;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent !important;
  }

  .head_cell {
    font-size: 12px;
    color: #adb5bd;
    font-weight: 500;
    padding-top: 4px;
    padding-bottom: 8px;
    text-transform: uppercase;
  }

  .button {
    color: #fff;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: none;
    background: transparent;

    &:hover {
      background: #5f3dc4;
      transition: all 0.2s ease-in-out;
    }
  }

  .day_today {
    background: #f1f3f5;
    font-weight: bold;
    color: #5f3dc4;
    border-radius: 999px;

    &:hover {
      color: #fff;
    }
  }

  .day_selected {
    background: #5f3dc4 !important;
    color: #fff;
    font-weight: 500;
    border-radius: 999px;
  }
`;
