import { useState } from "react"

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`dropdown-item ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header">
        <h2>{title}</h2>
        <button
          className="dropdown-toggle-button dropdown-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid fa-chevron-up ${isOpen ? "open" : ""}`}></i>
        </button>
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <p className={`${isOpen ? "open" : ""}`}>{content}</p>
      </div>
    </div>
  )
}

export default Dropdown
