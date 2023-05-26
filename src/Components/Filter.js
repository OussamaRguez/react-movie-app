import React , {useState} from 'react'
import MovieCard from './MovieCard'
// import MovieList from './MovieList'



function Filter({ movies }) {
     const [filteredMovies, setFilteredMovies] = useState (movies)
    //  const [searchByRating, setSearchByRating] = useState (movies)

    //  const [filteredMovies, setFilteredMovies] = useState(movies);


    const SearchingByTitle = (e) => {
        e.preventDefault()
        const filtered = movies.filter((el) => el.title.includes(filteredMovies));
        setFilteredMovies(filtered);
    }
    

    const SearchingByRating = (e) => {
        e.preventDefault()
        const filtered = movies.filter((el) => el.rating.includes(filteredMovies));
        setFilteredMovies(filtered);
    }

  return (
    <div>
        <form onSubmit={SearchingByTitle}>
        <input type='text' placeholder='search by title' onChange={(e)=> setFilteredMovies(e.target.value)}/>
        <button type='submit'>search</button>
        </form>

        <form onSubmit={SearchingByRating}>
        <input type='text' placeholder='search by rating' onChange={(e)=> setFilteredMovies(e.target.value)}/>
        <button type='submit'>search</button>
        </form>

        {filteredMovies.map((movie, index) => (<MovieCard key={index} movie={movie} />))}

    </div>
  )
}

export default Filter