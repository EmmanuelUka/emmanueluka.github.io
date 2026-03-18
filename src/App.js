import NavBar from './components/NavBar.js'
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import About from "./about";
import './App.css'
import Contact from './contact';
import Blog from './blog-photography';

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog-photography" element={<Blog/>} />
        </Routes>
    </>
  );
}

export default App