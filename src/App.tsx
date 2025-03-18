import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import { Link } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="min-h-screen bg-night-blue"
    >
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
      
      <footer className="text-center py-6 text-slate">
        <p>© 2024 Al Ousseynou DIALLO. Tous droits réservés</p>
      </footer>
    </motion.div>  
  );
}

export default App;