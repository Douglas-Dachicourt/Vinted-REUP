import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Cookies from "js-cookie"
import Home from './pages/Home'
import Offer from "./pages/Offer";
import Header from "./assets/components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faListAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass, faListAlt);



function App() {


  const [search, setSearch] = useState("")
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
        <Header handleToken={handleToken}
          userToken={userToken}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/signup/" element={<Signup handleToken={handleToken} />} />
          <Route path="/login/" element={<Login handleToken={handleToken} />} />
          <Route path="/publish/" element={<Publish userToken={userToken} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
