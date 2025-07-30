import styles from './ProjectsStyles.module.css';
import me from '../../assets/cowboy_me.png';
import java from '../../assets/Java-Logo.png';
import adam from '../../assets/adamlogo.png';
import risk from '../../assets/risk.png';
import amzncp from '../../assets/amzncp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={amzncp} 
                link="https://www.linkedin.com/in/keshaun-berry/" 
                h3="Amazon X CodePath Design Challenge"
                p="Scroll to Projects on my Linked-In"
            />
            <ProjectCard 
                src={risk} 
                link="https://cybriant-attack-surface-management-t1.github.io/website/#/" 
                h3="Risk Analysis Software"
                p="Cloud-native platform for scalable attack surface analysis"
            />
            <ProjectCard 
                src={adam} 
                link="https://github.com/Ykphill/Spring-Hackathon-KSU" 
                h3="Hackathon 2024"
                p="Contribution to the ADAM program"
            />
            <ProjectCard 
                src={java} 
                link="https://github.com/kjberry33/Algorithm-Collection" 
                h3="Algorithm Collection"
                p="Algorithm Reference Library"
            />
            <ProjectCard 
                src={me} 
                link="https://github.com/kjberry33" 
                h3="Portfolio Website"
                p="See the source code for the site!"
            />
        </div>
    </section>
  );
}

export default Projects;