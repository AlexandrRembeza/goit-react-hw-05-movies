import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { API } from 'services';
import {
  BackLink,
  MovieImage,
  AdditionalInfo,
  StyledNavLink,
} from './MoviePage.styled';
import { MovieDescription } from './MovieDescription';
import { Box } from 'components/Box';
import { toastError } from 'utils/toastError';

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from || '/';

  useEffect(() => {
    API.fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(error =>
        toastError('Что-то пошло не так, перезагрузите страницу')
      );
  }, [movieId]);

  return (
    <Box as="main">
      <BackLink to={backLinkHref}>
        <BiArrowBack size={18} />
        Go back
      </BackLink>
      <Box display="flex" py="15px" pl="20px" borderBottom="3px solid #d22f2f">
        {movie && (
          <>
            <MovieImage
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieDescription movie={movie} />
          </>
        )}
      </Box>
      <Box py="20px" borderBottom="3px solid #d22f2f">
        <AdditionalInfo>Additional Information</AdditionalInfo>
        <StyledNavLink to="cast" state={{ from: location.state.from }}>
          Cast
        </StyledNavLink>
        <StyledNavLink to="reviews" state={{ from: location.state.from }}>
          Reviews
        </StyledNavLink>
      </Box>

      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

MovieImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MovieDescription.propTypes = {
  movie: PropTypes.object.isRequired,
};

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};
