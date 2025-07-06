import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import About from './pages/about';
function App() {
  return (
    <>
      <Router>
      <div>
        <img src="" alt="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
