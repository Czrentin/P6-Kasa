import { useParams } from "react-router-dom"
import data from "../data/logements.json"

function Tag() {
  const { id } = useParams()

  const location = data.find((location) => location.id === id)

  return (
    <div className="location-tag">
      <ul>
        {location.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
