import { StyleLink } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <StyleLink
      exact
      to="/"
      activeStyle={{ fontWeight: 'bold', color: 'orange' }}
    >
      Home
    </StyleLink>

    <StyleLink
      exact
      to="/movies"
      activeStyle={{ fontWeight: 'bold', color: 'orange' }}
    >
      Movies
    </StyleLink>
  </nav>
);

export default Navigation;
