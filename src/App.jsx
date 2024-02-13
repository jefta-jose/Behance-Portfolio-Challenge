import './App.scss'
import Navbar from './Navbar/Navbar'
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='about' element = {<About/>} />
        {/* 
        <Route <Services/> />
        <Route <Blog/> />
        <Route <Contact/> /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
