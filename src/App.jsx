import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Cookies from "js-cookie"
import Home from './pages/Home'
import Offer from "./pages/Offer";
import Header from "./assets/components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";


function App() {

  const [userToken, setUserToken] = useState(Cookies.get("UserToken") || null)

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 30 })
      setUserToken(token)
    } else {
      Cookies.remove("token")
      setUserToken(null)
    }
  }
  return (
    <>
      <Router>
        <Header handleToken={handleToken} userToken={userToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/signup/" element={<Signup handleToken={handleToken} />} />
          <Route path="/login/" element={<Login handleToken={handleToken} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
