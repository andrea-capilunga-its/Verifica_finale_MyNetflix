import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, searchMovies } from '../api/tmdb';

const Home = ({ searchQuery }) => {
  return (
    <div className="main-content">
      {searchQuery ? (
        <MovieRow
          title={`Risultati per: "${searchQuery}"`}
          fetchMovies={() => searchMovies(searchQuery)}
          key={searchQuery}
        />
      ) : (
        <>
          <HeroBanner />
          <MovieRow title="Film Popolari" fetchMovies={getPopularMovies} />
          <MovieRow title="I Più Votati" fetchMovies={getTopRatedMovies} />
          <MovieRow title="In Tendenza" fetchMovies={getTrendingMovies} />
        </>
      )}
    </div>
  );
};

export default Home;
