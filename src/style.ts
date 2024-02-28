import { css } from '@emotion/react';
import '~/assets/fonts/min-sans/MinSans.css';

export default () => {
  const globalStyles = css`
    html,
    body {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    #root {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `;

  return globalStyles;
};
