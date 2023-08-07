import { Link } from "react-router-dom"
import data from "../data/logements.json"

function LocationsList() {
  return (
    <div className="container-location-card">
      <ul>
        {data.map((location, index) => (
          <li key={index}>
            <Link to={"/logements/" + location.id}>{location.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LocationsList
