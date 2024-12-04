import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Aside from "./components/aside";
import Skills from "./pages/skills";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Aside/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
