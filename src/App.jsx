import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './common/Navbar/Navbar';
import Footer from './common/Footer/Footer';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';

const pageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: [0.4, 0, 0.2, 1],
      duration: 0.5,
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: [0.4, 0, 0.2, 1],
      duration: 0.5,
    },
  }),
};

const routes = [
  { path: '/', element: Home, index: 0 },
  { path: '/about', element: About, index: 1 },
  { path: '/project', element: Project, index: 2 },
];

function AnimatedRoutes() {
  const location = useLocation();
  const currentRoute = routes.find(r => r.path === location.pathname);
  const currentIndex = currentRoute?.index ?? 0;

  return (
    <>
      <Navbar />
      
      <div className="relative" style={{ minHeight: 'calc(100vh - 140px)', paddingTop: '80px', paddingBottom: '60px' }}>
        <AnimatePresence mode="wait" custom={currentIndex}>
          <Routes location={location} key={location.pathname}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <motion.div
                    custom={currentIndex - route.index}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      top: 0,
                      left: 0,
                    }}
                  >
                    <route.element />
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
      </div>
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
