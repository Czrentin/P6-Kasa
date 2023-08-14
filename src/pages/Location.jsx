import React from "react"
import { useParams } from "react-router-dom"
import data from "../data/logements.json"
import Error from "./Error"
import Slider from "../components/Slider"
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"
import Rating from "../components/Rating"

function LocationCard() {
  const { id } = useParams()
  // Recherchez les données correspondant à l'ID dans le fichier JSON
  const location = data.find((location) => location.id === id)

  if (!location) {
    return <Error />
  } else {
    return (
      <div className="location-container">
        <Slider />
        <div className="information-container">
          <div className="location-information-container">
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
        <div className="dropdown-container">
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
      </div>
    )
  }
}

export default LocationCard
