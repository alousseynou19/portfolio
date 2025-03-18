import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const roleVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue/50 to-night-blue"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.1)_0%,transparent_100%)]"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.span
            variants={titleVariants}
            className="inline-block text-cyan font-mono text-base sm:text-lg mb-4"
          >
            Bonjour, je suis
          </motion.span>

          <motion.h1
            variants={titleVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan to-cyan/80"
          >
            Al Ousseynou DIALLO
          </motion.h1>

          <motion.div
            variants={roleVariants}
            className="overflow-hidden px-4 sm:px-0"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl text-slate mb-8 typing-effect">
              Data Analyst, Business Analyst, Developpeur
            </h2>
          </motion.div>

          <motion.p
            variants={titleVariants}
            className="text-base sm:text-lg text-slate max-w-2xl mx-auto mb-12 px-4 sm:px-0"
          >
            Je transforme les données en insights stratégiques et crée des applications 
            innovantes qui résolvent des problèmes complexes.
          </motion.p>

          <motion.div
            variants={titleVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto inline-block px-8 py-4 bg-transparent border-2 border-cyan text-cyan rounded-lg hover:bg-cyan/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Découvrir mes projets
            </Link>

            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block px-8 py-4 bg-cyan text-night-blue font-semibold rounded-lg hover:bg-cyan/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Voir mon CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-cyan cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Header;