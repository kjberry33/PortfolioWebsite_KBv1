import styles from './ProjectsStyles.module.css';
import me from '../../assets/cowboy_me.png';
import java from '../../assets/Java-Logo.png';
import adam from '../../assets/adamlogo.png';
import risk from '../../assets/risk.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={adam} 
                link="https://github.com/Ykphill/Spring-Hackathon-KSU" 
                h3="Hackathon 2024"
                p="Contribution to the 
                ADAM program"
            />
            <ProjectCard 
                src={java} 
                link="https://github.com/kjberry33/Algorithm-Collection" 
                h3="Algorithm Collection"
                p="Self Made Algorithm Reference"
            />
            <ProjectCard 
                src={me} 
                link="https://github.com/kjberry33" 
                h3="Portfolio Website"
                p="See the source code for the site!"
            />
            <ProjectCard 
                src={risk} 
                link="https://github.com/kjberry33" 
                h3="Risk Analysis Software"
                p="Coming Soon..."
            />
        </div>
    </section>
  );
}

export default Projects;