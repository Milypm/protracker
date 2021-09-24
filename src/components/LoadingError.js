// import FadeLoader from 'react-spinners/FadeLoader';
// import { css } from '@emotion/react';
// import '../styles/home.css';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
export const Loading = () => (
  <div className="loading-div">
    <h1>Loading...</h1>
  </div>
);
// export const Loading = () => {
//   const loading = true;
//   return (
//     <div className="loading-div">
//       <h3>Loading</h3>
//       <FadeLoader color="rgb(219, 135, 96)" loading={loading} css={override} size={850} />
//     </div>
//   );
// };
export const Error = (error) => (
  <div className="error-div">
    <h3>{error}</h3>
  </div>
);
