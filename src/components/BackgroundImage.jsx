import ImageHome from "../assets/background-image-1.png"
import ImageAbout from "../assets/background-image-2.png"

function BackgroundImage({ page }) {
  let imageSrc = null

  // Utilisez une condition pour déterminer quelle image afficher en fonction de la page
  if (page === "home") {
    imageSrc = ImageHome
  } else if (page === "about") {
    imageSrc = ImageAbout
  }

  return (
    <div className="bg-div-img">
      <img src={imageSrc} alt={"Paysage"} className="bg-img" />
    </div>
  )
}

export default BackgroundImage
