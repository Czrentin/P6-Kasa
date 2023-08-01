import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles/style.css"
import Home from "./pages/home"
import About from "./pages/about"
import Error from "./components/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
)
