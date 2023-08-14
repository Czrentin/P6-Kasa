import LocationsList from "../components/LocationsList"
import BackgroundImage from "../components/BackgroundImage"

function Home() {
  return (
    <main>
      <BackgroundImage page="home" content="Chez vous, partout et ailleurs" />
      <LocationsList />
    </main>
  )
}

export default Home
