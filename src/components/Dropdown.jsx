import { useState } from "react"

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="dropdown-div-open">
      <h2>{title}</h2>
      <button
        className="dropdown-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <div>{content}</div>
    </div>
  ) : (
    <div className="dropdown-div-closed">
      <h2>{title}</h2>
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
