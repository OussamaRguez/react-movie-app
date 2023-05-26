import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';
// import MovieCard from './Components/MovieCard';
import Add from './Components/Add';
import Filter from './Components/Filter';


function App() {
  const movies = [
    {
      title: 'Titanic',
      description: 'an epic romance and disaster film set aboard the ill-fated RMS Titanic. It follows the forbidden love story between Jack and Rose as they navigate social barriers and face the devastating sinking of the ship', 
      posterURL:'https://m.media-amazon.com/images/I/91WlTjCgu4L.jpg',
      rating:7
    },

    {
      title: 'Harry Poter',
      description: 'Harry Potter" is a beloved fantasy film series following the magical adventures of a young wizard named Harry Potter and his friends as they attend Hogwarts School of Witchcraft and Wizardry and face the ultimate battle against the dark wizard Lord Voldemort.', 
      posterURL:'https://img.posterstore.com/zoom/wb0003-8harrypotter-half-bloodprince50x70.jpg',
      rating:6
    },
    {
      title: 'Star Wars',
      description: 'A galaxy-spanning adventure filled with epic battles, iconic characters, and the eternal struggle between the light side and the dark side of the Force', 
      posterURL:'https://media.wired.com/photos/5955b77cad90646d424bb475/master/w_2560%2Cc_limit/IMG_39111.jpeg',
      rating:8
    }

  ]

  return (
    <div className="App">
      <div>
      <MovieList movies={movies}/>
      <Add />
      <Filter movies={movies}/>
      </div>

    </div>
  );
}

export default App;