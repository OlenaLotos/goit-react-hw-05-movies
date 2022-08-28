import React from 'react';
import { StyleLink, MenuUl } from './Navigation.styled';

const Navigation = () => {
  return (
    <MenuUl>
      <li>
        <StyleLink to="/" activestyle={{ fontWeight: 'bold', color: 'orange' }}>
          Home
        </StyleLink>
      </li>
      <li>
        <StyleLink
          to="/movies"
          activestyle={{ fontWeight: 'bold', color: 'orange' }}
        >
          Movies
        </StyleLink>
      </li>
    </MenuUl>
  );
};

export default Navigation;
