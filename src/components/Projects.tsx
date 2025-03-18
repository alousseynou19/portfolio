import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectBase {
  title: string;
  description: string;
  tech: string[];
}

interface ProjectWithImage extends ProjectBase {
  image: string;
  link?: string;
}

interface ProjectWithVideo extends ProjectBase {
  video: string;
}

type Project = ProjectWithImage | ProjectWithVideo;

const projects: { category: string; items: Project[] }[] = [
  {
    category: "Data Analysis & BI",
    items: [
      {
        title: "Analyse de données avec Lokki",
        description:
          "La mission de ce projet consistait, après réception et nettoyage des données, à concevoir une solution permettant à l’entreprise d’optimiser la rentabilité de son équipement. Cette solution, développée pour faciliter la prise de décision, offre à l’entreprise une meilleure maîtrise de la rentabilité de ses matériels grâce à une simple saisie des données.",
        tech: ["Python", "Scikit-learn", "Power BI", "Excel"],
        image: "./growth.png",
        link: "https://ubiquitous-palmier-ac93bd.netlify.app/",
      },
      {
        title: "Projet d'analyse data immo",
        description:
          "Ce projet pédagogique consistait à récupérer, via l’API de l’INSEE, l’ensemble des ventes immobilières en France sur les dernières décennies. Les données ont ensuite été nettoyées et filtrées à l’aide d’Excel et Power BI afin de conserver les informations essentielles. Enfin, une application web a été développée avec Python et Streamlit pour permettre des analyses prédictives avancées, offrant ainsi un outil professionnel aux entreprises.",
        tech: ["Power BI", "Excel", "DAX", "SQL", "Python", "Scikit-learn", "Streamlit"],
        image: "./dataImmo.png",
        link: "https://dataimmo.streamlit.app/",
      },
      
    ],
  },
  {
    category: "Développement Web",
    items: [
      {
        title: "Réalisation Collective Aidasol",
        description:
          "La Réalisation Collective est un projet de l’Université de Toulon (UFR Ingémédia) qui réunit une dizaine d’étudiants aux profils variés, chargés de travailler sur un thème proposé par les partenaires de l’université.Pour notre sujet, nous avons travaillé sur la santé mentale. J’ai ainsi développé un site internet offrant aux utilisateurs un accès à un forum où ils peuvent échanger, se donner des conseils et organiser des événements.",
        tech: ["React.js", "Firebase"],
        image: "./aidasol.png",
        link: "https://shadowble.github.io/aidasol/",
      },
    ],
  },
  {
    category: "Applications Mobiles",
    items: [
      {
        title: "Réalisation Collective Accesport",
        description:
          "Cette Réalisation Collective reposait sur un concept de création de startup visant à encourager la pratique du sport dans les city stades en mettant à disposition des casiers connectés équipés de matériel sportif.L’application, en synergie avec ces lockers, permet aux utilisateurs d’accéder facilement aux équipements. Cette vidéo illustre un parcours utilisateur, depuis la connexion à l’application jusqu’à la réception du matériel sportif.",
        tech: ["React Native Expo", "MongoDB", "Hygraph"],
        video: "./app.mp4",
      },
    ],
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="section-heading text-center mb-16" initial="hidden" animate="visible">
          Mes Réalisations
        </motion.h2>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-20">
          {projects.map((category, index) => (
            <motion.div key={index} className="space-y-8">
              <motion.h3 className="text-2xl sm:text-3xl font-semibold text-cyan px-4">
                {category.category}
              </motion.h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {category.items.map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    className="project-card group cursor-pointer relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => "link" in project && project.link && window.open(project.link, "_blank")}
                  >
                    <div className="relative">
                      {"video" in project ? (
                        <video className="w-full max-h-[500px] object-contain" controls>
                          <source src={project.video} type="video/mp4" />
                          Votre navigateur ne supporte pas la lecture des vidéos.
                        </video>
                      ) : (
                        "image" in project && (
                          <>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 sm:h-64 object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                              <span className="text-white text-lg font-semibold">Voir plus ➜</span>
                            </div>
                          </>
                        )
                      )}
                    </div>
                    <div className="p-6 sm:p-8">
                      <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan">{project.title}</h4>
                      <p className="text-slate mb-6 text-sm sm:text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 sm:px-3 py-1 glass-effect text-cyan rounded-full text-xs sm:text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
