import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillsList from '../../common/SkillsList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;  

  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillsList}>
            <h2 className="subTitle">Frontend Skills</h2>
            <br />
            <SkillsList src={checkMarkIcon} skill="HTML" />
            <SkillsList src={checkMarkIcon} skill="CSS" />
            <SkillsList src={checkMarkIcon} skill="Javascript" />
            <SkillsList src={checkMarkIcon} skill="Node JS" />
            <SkillsList src={checkMarkIcon} skill="React" />
            <SkillsList src={checkMarkIcon} skill="Vite" />
        </div>
        <hr />
        <div className={styles.skillsList}>
            <h2 className="subTitle">Backend Skills</h2>
            <br />
            <SkillsList src={checkMarkIcon} skill="Java" />
            <SkillsList src={checkMarkIcon} skill="Python" />
            <SkillsList src={checkMarkIcon} skill="C #" />
            <SkillsList src={checkMarkIcon} skill="C (Language)" />
            <SkillsList src={checkMarkIcon} skill="SQL" />
        </div>
        <hr />
        <div className={styles.skillsList}>
            <h2 className="subTitle">Tools and Tech</h2>
            <br />
            <SkillsList src={checkMarkIcon} skill="Git" />
            <SkillsList src={checkMarkIcon} skill="Microsoft Office" />
            <SkillsList src={checkMarkIcon} skill="Visual Studio Code" />
            <SkillsList src={checkMarkIcon} skill="IntelliJ" />
            <SkillsList src={checkMarkIcon} skill="CloudSim" />
            <SkillsList src={checkMarkIcon} skill="Kubernetes" />
        </div>
    </section>
  );
}

export default Skills;