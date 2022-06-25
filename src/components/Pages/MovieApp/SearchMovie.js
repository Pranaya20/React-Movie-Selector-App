import React, { useState } from 'react';
import MovieCard from './MovieCard';
// import Toast, { serverToast } from '../../components/Toast';

import LabelComponents from '../../LabelComponents/LabelComponents';
import InputComponent from '../../Inputcomponent/InputComponent';
import { Button } from '../../Button/Button';



export default function SearchMovie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  

  const SearchMovies = async (e) => {
    e.preventDefault();
    console.log('submitting');
    if(query == ''){
      alert("Hello! I am an alert box!!");
    }
      console.log("True");
      const url = `https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
}   
  };

  

  
  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <LabelComponents labelname='Movie Name :' marginBottom="5px" fontSize="16px" color="black"/>
         <InputComponent onChange={(e) => setQuery(e.target.value)} width='60%' marginBottom="10px" marginTop="10px" name='name'/>
         
         <Button width='30%' text='Search' type="submit" disabled={!query}/>
      </form>
      
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
