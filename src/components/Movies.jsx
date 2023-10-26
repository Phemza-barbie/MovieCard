import "./Movies.css"
import React from 'react'

const Movies = ({name, rating, maker, description, image }) => {
  return (
    < div className="card">
            <img src={image} alt="" />
            <h2 className="title">{name}</h2>
            <h4>{description}</h4>
            <h4>{maker}</h4>
            <h4>{rating}</h4>
    </div>
  )
}

export default Movies