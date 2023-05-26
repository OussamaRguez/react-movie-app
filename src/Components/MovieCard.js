import React from 'react'

export default function MovieCard({movie}) {
const { title, description, posterURL, rating} = movie ;
  return (
    <div>
     <img src={posterURL} alt={title} style={{width:150, height:220}}/>
     <h1>{title}</h1>
     <p>{description}</p>
     <h2>{rating}</h2>

    </div>
  )
}