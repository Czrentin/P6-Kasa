import BackgroundImage from "../components/BackgroundImage"
import Dropdown from "../components/Dropdown"

function Home() {
  return (
    <main>
      <BackgroundImage page="about" />
      <Dropdown dropdownKey="Fiability" />
      <Dropdown dropdownKey="Respect" />
      <Dropdown dropdownKey="Service" />
      <Dropdown dropdownKey="Security" />
    </main>
  )
}

export default Home
