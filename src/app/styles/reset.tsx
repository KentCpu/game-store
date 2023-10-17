import { Global, css } from '@emotion/react';

export const ResetStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }

        html {
          box-sizing: border-box;
        }

        body {
          background-color: #fff;
          line-height: 1;
          text-rendering: optimizeLegibility;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
        }

        blockquote,
        q {
          quotes: none;
        }

        ul,
        ol {
          list-style-type: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        th {
          font-weight: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }

        audio,
        video {
          display: block;
        }

        img {
          display: block;
          border: none;
        }

        iframe {
          border: none;
        }

        pre,
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: inherit;
        }

        a {
          background-color: transparent;
          text-decoration: none;
          color: inherit;
        }

        abbr {
          border: none;
          text-decoration: none;
        }

        b,
        strong {
          font-weight: inherit;
        }

        i,
        em {
          font-style: inherit;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          border: none;
          border-radius: 0;
          box-shadow: none;
          background-color: transparent;
          font: inherit;
          color: inherit;
          letter-spacing: inherit;
        }

        fieldset {
          padding: 0;
          margin: 0;
          border: none;
        }

        legend {
          display: block;
          padding: 0;
          white-space: normal;
        }
      `}
    />
  );
};
