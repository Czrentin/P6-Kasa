import { useState } from "react"

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="dropdown-div-open dropdown-item">
      <div className="dropdown-header">
        <h2>{title}</h2>
        <button
          className="dropdown-toggle-button dropdown-button"
          onClick={() => setIsOpen(false)}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className="dropdown-content">{content}</div>
    </div>
  ) : (
    <div className="dropdown-div-closed dropdown-item">
      <div className="dropdown-header">
        <h2>{title}</h2>
        <button
          className="dropdown-toggle-button dropdown-button"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </div>
  )
}

export default Dropdown
