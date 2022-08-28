// import React from 'react';
import { H1 } from './NotFoundView.styled';
// import { Link } from 'react-router-dom';

// const NotFoundView = () => {
//   return <H1>404 Sorry, but we can't found this page. Please, try again</H1>
//     <Link to="/">To Main Page</Link>;
// };

// export default NotFoundView;

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <H1>Sorry, but we can't found this page. Please, try again</H1>
      <Link to="/">To Main Page</Link>
    </>
  );
};

export default NotFoundPage;
