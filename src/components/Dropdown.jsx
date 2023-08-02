import { useState } from "react"
import data from "../data/logements.json"

function Dropdown({ dropdownKey }) {
  const [isOpen, setIsOpen] = useState(false)
  let titleDropdown = null
  let key = dropdownKey

  switch (key) {
    case "Fiability":
      titleDropdown = "Fiabilité"
      break

    case "Respect":
      titleDropdown = "Respect"
      break

    case "Service":
      titleDropdown = "Service"
      break

    case "Security":
      titleDropdown = "Sécurité"
      break

    case "Equipement":
      titleDropdown = "Équipement"
      break

    case "Description":
      titleDropdown = "Description"
      break

    default:
      titleDropdown = "Erreur"
      break
  }

  return isOpen ? (
    <div className="dropdown-div-open">
      <h2>{titleDropdown}</h2>
      <button
        className="dropdown-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <ul>
        {data.map((location, index) => (
          <li key={index}>{location.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="dropdown-div-closed">
      <h2>{titleDropdown}</h2>
      <button
        className="dropdown-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir
      </button>
    </div>
  )
}

export default Dropdown
