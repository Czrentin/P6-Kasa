import ImageHome from "../assets/background-image-1.png"
import ImageAbout from "../assets/background-image-2.png"

function BackgroundImage({ page, content }) {
  const imageSrc = page === "home" ? ImageHome : ImageAbout

  return (
    <div className="bg-container">
      <div className="bg-content">
        <p>{content}</p>
      </div>
      <img src={imageSrc} alt={"Paysage"} />
    </div>
  )
}

export default BackgroundImage
