import { Route, Routes } from 'react-router-dom';
import { Layout } from './SharedLayout';
// import { lazy } from 'react';

// const createAsyncComponent = path => {
//   const componentName = path.match(/[a-zA-Z]+$/)[0];
//   return lazy(() =>
//     import(path).then(module => ({ ...module, default: module[componentName] }))
//   );
// };

// const Home = createAsyncComponent('pages/Home');
// const MovieDetails = createAsyncComponent('pages/MovieDetails');
// const Cast = createAsyncComponent('./MovieCast');
// const Reviews = createAsyncComponent('./MovieReviews');
// const Movies = createAsyncComponent('pages/Movies');

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './MovieCast/Cast';
import { Reviews } from './MovieReviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
