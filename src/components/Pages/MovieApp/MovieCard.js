import React from 'react';

const CardComponent = ({ movie })=> {
  return (
    <div className="card" key={movie.id}>
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
        style={{width:"50px", height:"50px" }}
      />
      <div className="card-content">
        <h6 className="card-title">{movie.title}</h6>
         <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
