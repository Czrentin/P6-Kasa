import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles/style.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Location from "./pages/Location"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
