import React , {useState} from "react";
import MovieCard from "./MovieCard";



const Add = () => {

    const [list, setList] = useState ([])
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [posterURL, setPosterURL] = useState ('')
    const [rating, setRating] = useState ('')


    const handleSubmit=(e)=>{
        e.preventDefault();
        setList([...list , {title, description, posterURL, rating}])
      };

  return (

    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='The title' onChange={(e)=> setTitle(e.target.value)}/>
        <input type='text' placeholder='The description' onChange={(e)=>setDescription(e.target.value)}/>
        <input type='text' placeholder='The posture URL' onChange={(e)=> setPosterURL(e.target.value)}/>
        <input type='text' placeholder='The rating' onChange={(e)=> setRating(e.target.value)}/>
        <button type='submit'>Add Movie</button>
        </form>

        {list.map((el, index) => (<MovieCard key = {index} movie = {el}/>))}
        
        
    </div>
  )
};

export default Add