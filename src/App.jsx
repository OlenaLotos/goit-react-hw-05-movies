import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
// import HomePage from 'views/HomePage/HomePage';
// import Movies from 'views/MoviesPage/MoviesPage';
import NotFoundView from 'views/NotFoundView/NotFoundView';

const App = () => {
  return (
    <>
      <Navigation />
      {/* <Route path="/" exact>
        <HomePage />
      </Route> */}
      <Route path="/" exact>
        <NotFoundView />
      </Route>
    </>
  );
};

export default App;
