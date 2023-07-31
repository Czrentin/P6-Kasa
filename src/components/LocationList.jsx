import { Link } from "react-router-dom"
import data from "../data/logements.json"

function ListLocations() {
  const locations = data

  return (
    <div>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <Link to="/">{location.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListLocations
