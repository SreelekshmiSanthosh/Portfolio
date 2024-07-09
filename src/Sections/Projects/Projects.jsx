import styles from "./ProjectsStyles.module.css";
import staticpage from "../../assets/staticpage.png";
import tb from "../../assets/Tb.png";
import ProjectCards from "../../Common/ProjectCards";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCards
          src={staticpage}
          p="Static Website"
          link="https://sreelekshmisanthosh.github.io/webpage/"
        />
        <ProjectCards
          src={tb}
          p="Computer Aided Detection of Tuberculosis"
          link="https://kiranjithhardeepp.github.io/Todoapp-ReactJS/"
        />
        
      </div>
    </section>
  );
}

export default Projects;
