import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const API_KEY = 'd38aa8716411ef7d8e9054b34a6678ac';
const GENRES_ENDPOINT = 'https://api.themoviedb.org/3/genre/movie/list';
const MOVIES_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie';

export default function Home() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);

  // Ref za komponentu za fokusiranje tastature
  const moviesListRef = useRef(null);

  useEffect(() => {
    // Ucitavanje zanrova iz themoviedb API-ja
    axios.get(`${GENRES_ENDPOINT}?api_key=${API_KEY}`)
      .then(response => {
        setGenres(response.data.genres);
        // Postavlja pocetni zanr na prvi zanr iz liste
        setSelectedGenre(response.data.genres[0]);
      })
      .catch(error => {
        console.error('Greska prilikom dohvatanja zanrova:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      // Ucitava filmove za odabrani zanr iz themoviedb API-ja
      axios.get(`${MOVIES_ENDPOINT}?with_genres=${selectedGenre.id}&api_key=${API_KEY}`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Greška prilikom dohvatanja filmova:', error);
        });
    }
  }, [selectedGenre]);

  // Dodaje event listener za upravljanje tastaturom
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && selectedMovieIndex < movies.length - 1) {
        setSelectedMovieIndex(selectedMovieIndex + 1);
      } else if (e.key === 'ArrowLeft' && selectedMovieIndex > 0) {
        setSelectedMovieIndex(selectedMovieIndex - 1);
      } else if (e.key === 'ArrowDown' && selectedMovieIndex + 6 < movies.length) {
        setSelectedMovieIndex(selectedMovieIndex + 6);
      } else if (e.key === 'ArrowUp' && selectedMovieIndex - 6 >= 0) {
        setSelectedMovieIndex(selectedMovieIndex - 6);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cisti event listener kada komponenta se demontira
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMovieIndex, movies]);

  // Postavlja fokus na komponentu za listu filmova kako bi tastatura reagovala samo unutar ovog dela komponente
  useEffect(() => {
    if (moviesListRef.current) {
      moviesListRef.current.focus();
    }
  }, [moviesListRef]);

  return (
    <div className='container-home'>
      <div className="home">
        {genres.map(genre => (
          <div key={genre.id} className="genre-section">
            <h2 className='genre-name'>{genre.name}</h2>
            <div
              className="movies-list"
              ref={moviesListRef}
              tabIndex="0" // Ova liniju se dodaje kako bismo omogućili fokusiranje tastature
            >
              {movies
                .filter(movie => movie.genre_ids.includes(genre.id))
                .map((movie, index) => (
                  <div
                    key={movie.id}
                    className={`movie ${index === selectedMovieIndex ? 'selected' : ''}`}
                  >
                    <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
