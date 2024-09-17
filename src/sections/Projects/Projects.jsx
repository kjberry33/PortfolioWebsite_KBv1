import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={viberr} 
                link="https://github.com/Ykphill/Spring-Hackathon-KSU" 
                h3="Project Title"
                p="Project Description Text"
            />
            <ProjectCard 
                src={freshBurger} 
                link="https://github.com/Ykphill/Spring-Hackathon-KSU" 
                h3="Project Title"
                p="Project Description Text"
            />
            <ProjectCard 
                src={viberr} 
                link="https://github.com/Ykphill/Spring-Hackathon-KSU" 
                h3="Project Title"
                p="Project Description Text"
            />
            <ProjectCard 
                src={freshBurger} 
                link="https://github.com/Ykphill/Spring-Hackathon-KSU" 
                h3="Project Title"
                p="Project Description Text"
            />
        </div>
    </section>
  );
}

export default Projects;