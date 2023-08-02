import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"

function Header() {
  return (
    <header>
      <div className="header-div">
        <img src={Logo} alt="Logo Kasa" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
