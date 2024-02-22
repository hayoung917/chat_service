import { css } from "@emotion/react";
import "~/assets/fonts/min-sans/MinSans.css";

export default () => {
  const globalStyles = css`
    html {
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 16px;
      overflow: none;
    }

    * {
      box-sizing: border-box;
      font-family: "MinSans";
    }

    *,
    *::before,
    *::after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
    }

    body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      user-select: none;
      border-radius: 8px;
    }

    #root {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #f3f6f9;
      border-radius: 8px;
    }

    #app {
      width: 100%;
      height: 100%;
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      border: 1px solid #dee3e9;
    }

    ::-webkit-scrollbar-corner {
    }

    ::-webkit-scrollbar-thumb {
      z-index: 40;

      border-color: transparent;

      background-color: rgba(151, 151, 151, 0.4);

      transition: 0.3s ease all;
    }

    .detecting {
      filter: blur(0.1em);
      animation-name: blink;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    @keyframes blink {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }

    .animated-gradient {
      background: repeating-linear-gradient(
        to right,
        #066799 0%,
        #008ed1 45%,
        #00a5f3 65%,
        #066799 100%
      );
      width: 100%;
      background-size: 200% auto;
      background-position: 0 100%;
      animation: gradient 1.5s infinite;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }

    @keyframes gradient {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: -200% 0;
      }
    }

    .drop {
      position: absolute;
      bottom: 100%;
      width: 10px;
      height: 120px;
      pointer-events: none;
      animation: drop 0.5s linear infinite;
    }

    @keyframes drop {
      0% {
        transform: translateY(0vh);
      }
      75% {
        transform: translateY(90vh);
      }
      100% {
        transform: translateY(90vh);
      }
    }

    .stem {
      width: 2px;
      height: 60%;
      margin-left: 7px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.25)
      );
      animation: stem 0.5s linear infinite;
    }

    @keyframes stem {
      0% {
        opacity: 1;
      }
      65% {
        opacity: 1;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    .splat {
      width: 15px;
      height: 10px;
      border-top: 2px dotted rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      opacity: 1;
      transform: scale(0);
      animation: splat 0.5s linear infinite;
      display: none;
    }

    .splat {
      display: block;
    }

    @keyframes splat {
      0% {
        opacity: 1;
        transform: scale(0);
      }
      80% {
        opacity: 1;
        transform: scale(0);
      }
      90% {
        opacity: 0.5;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(1.5);
      }
    }
  `;

  return globalStyles;
};
