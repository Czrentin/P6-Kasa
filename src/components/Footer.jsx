import Logo from "../assets/logo.svg"

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <img src={Logo} alt="Logo Kasa" className="footer-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
