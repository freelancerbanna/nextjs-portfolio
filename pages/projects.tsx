import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { project as projecData } from "../data";
import { fadeInUp, routeAnimation, stagger } from "../framer";
import { Category } from "../type";
import { motion } from "framer-motion";
const Projects = () => {
  const [project, setProjectDetails] = useState(projecData);
  const [active, setActive] = useState("All");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleProjectCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjectDetails(projecData);
      setActive(category);
      return;
    }
    const newArray = projecData.filter((projects) =>
      projects.category.includes(category)
    );
    setProjectDetails(newArray);
    setActive(category);
  };
  return (
    <div className="px-6 mt-4 overflow-y-scroll" style={{ height: "60vh" }}>
      <ProjectsNavbar
        handleProjectCategory={handleProjectCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {project.map((projects) => (
          <motion.div
            className="col-span-12 p-4 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={projects.name}
            variants={fadeInUp}
          >
            <ProjectCard
              project={projects}
              showDetail={showDetails}
              setShowDetail={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
