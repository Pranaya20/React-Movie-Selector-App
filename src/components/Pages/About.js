import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from './MovieApp/SearchMovie';
 import { useHistory } from 'react-router-dom';
// import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
 import "./style.css";

export const About = () => {
  return (
    <div className="container">

        <h3 className="title">Search The Popular Movie</h3>
         <SearchMovie />
       </div>
  );
};
