import React from "react"
import { useParams } from "react-router-dom"
import data from "../data/logements.json"
import Slider from "../components/Slider"
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"
import Rating from "../components/Rating"

function LocationCard() {
  const { id } = useParams()
  // Recherchez les données correspondant à l'ID dans le fichier JSON
  const location = data.find((location) => location.id === id)

  return (
    <div className="location-card">
      <Slider />
      <div>
        <div>
          <div>
            <h2>{location.title}</h2>
            <p>{location.location}</p>
          </div>
          <Tag />
        </div>
        <div className="host-container">
          <div className="host-id">
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt="Portrait du propriétaire" />
          </div>
          <Rating />
        </div>
      </div>
      <Dropdown title="Description" content={location.description} />
      <Dropdown
        title="Équipement"
        content={
          <ul>
            {location.equipments.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
        }
      />
    </div>
  )
}

export default LocationCard
