import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Offer from "./pages/Offer";
import Header from "./assets/components/Header";


function App() {
  
  return (
    <>
     <Router> 
       <Header/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/offers/:id" element={<Offer/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
