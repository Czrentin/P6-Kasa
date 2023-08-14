import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.svg"

function Header() {
  return (
    <header>
      <div className="header-div">
        <img src={Logo} alt="Logo Kasa" />
        <nav>
          <NavLink to="/" activeclassname="active">
            Accueil
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
