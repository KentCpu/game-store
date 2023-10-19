import { Global, css } from '@emotion/react';

export const GeneralStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Open+Sans:wght@400;500&display=swap');

        body {
          background-color: #121212;
          font-family: 'Inter', 'Open Sans', sans-serif;
          font-size: 16px;
        }
      `}
    />
  );
};
