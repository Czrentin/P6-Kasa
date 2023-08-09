import React from "react"
import data from "../data/logements.json"
import { useParams } from "react-router-dom"

function Rating() {
  const { id } = useParams()

  // Recherchez les données correspondant à l'ID dans le fichier JSON
  const location = data.find((location) => location.id === id)

  const rating = location.rating

  const maxRating = 5
  const filledStars = Math.round(rating)

  return (
    <div className="host-rating">
      {Array.from({ length: maxRating }, (_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${
            index < filledStars ? "filled" : "empty"
          }`}
        ></i>
      ))}
    </div>
  )
}

export default Rating
