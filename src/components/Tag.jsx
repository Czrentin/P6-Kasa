import { useParams } from "react-router-dom"
import data from "../data/logements.json"

function Tag() {
  const { id } = useParams()

  const location = data.find((location) => location.id === id)

  return (
    <div className="location-tag-container">
      <ul className="tag-container">
        {location.tags.map((tag, index) => (
          <li key={index} className="tag-item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
