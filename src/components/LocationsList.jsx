import React from "react"
import { Link } from "react-router-dom"
import data from "../data/logements.json"

function LocationsList() {
  return (
    <section className="container-location-card">
      <ul className="location-list">
        {data.map((location) => (
          <li key={location.id} className="location-item">
            <Link to={"/logements/" + location.id} className="location-card">
              <img
                src={location.cover}
                alt={location.title}
                className="location-cover"
              />
              <h2 className="location-title">{location.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LocationsList
