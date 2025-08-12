import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
// import About from './pages/about';
import Maintance from './pages/maintance';
import About from './pages/about';
import Project from './pages/projects';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
