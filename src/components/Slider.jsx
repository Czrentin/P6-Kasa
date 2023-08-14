import { useState } from "react"
import data from "../data/logements.json"
import { useParams } from "react-router-dom"

function Slider() {
  const { id } = useParams()
  const location = data.find((location) => location.id === id)

  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === location.pictures.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? location.pictures.length - 1 : slide - 1)
  }

  return (
    <div className="slider-container">
      <i
        className="fa-solid fa-chevron-left arrow arrow-left"
        onClick={prevSlide}
      ></i>
      {location.pictures.map((picture, index) => (
        <img
          src={picture}
          alt={location.title}
          key={index}
          className={slide === index ? "slide" : "slide-hidden"}
        />
      ))}
      <div className="slide-indicator">
        {slide + 1}/{location.pictures.length}
      </div>
      <i
        className="fa-solid fa-chevron-right arrow arrow-right"
        onClick={nextSlide}
      ></i>
    </div>
  )
}

export default Slider
