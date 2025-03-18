import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: "Analyse de données & BI",
    items: ["Power BI", "Tableau", "SQL", "Excel avancé", "ElasticSearch", "NoSql","postgreSQL","Google analytics", "Knime", "Looker Studio","Qlick"],
    icon: "📊"
  },
  {
    category: "Développement Web",
    items: ["React JS", "Node.js", "Django", "Python", "Streamlit","R"],
    icon: "💻"
  },
  {
    category: "Développement Mobile",
    items: ["Flutter", "React Native"],
    icon: "📱"
  }
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.05)_0%,transparent_100%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </motion.h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl leading-relaxed">
              Passionné par la data et le développement, je combine expertise technique 
              et vision business pour créer des solutions innovantes. Mon approche 
              polyvalente me permet d'avoir une vision à 360° des projets.
            </p>
            <p className="text-slate text-lg">
              Je m'efforce constamment d'apprendre et d'adopter les meilleures pratiques 
              pour délivrer des solutions robustes et évolutives.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-card group"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-4xl mb-4 block">{skillGroup.icon}</span>
                <h3 className="text-2xl font-semibold mb-4 text-cyan group-hover:text-cyan/80 transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 glass-effect text-cyan rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;