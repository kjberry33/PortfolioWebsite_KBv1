import styles from './KeShaunStyles.module.css';
import keshaunImg from '../../assets/KeshaunPerfect.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/Keshaun_Berry_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';


function KeShaun() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon= theme === 'light' ? sun : moon;
  const githubIcon= theme === 'light' ? githubLight : githubDark;
  const linkedinIcon= theme === 'light' ? linkedinLight : linkedinDark;

    return (
    <section id="keshaun" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.keshaun}
          src={keshaunImg}
          alt="Profile picture of KeShaun Berry"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light or Dark Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>KeShaun Berry</h1>
        <h2>Software Engineer</h2>
        <span>Currently a Software Developer @ OSC, Steamboat Group</span>
        <span>
          <a href="https://linkedin.com/in/keshaun-berry/" target="_blank">
            <img src={linkedinIcon} alt="Linked-In Account" />
          </a>
          <a href="https://github.com/kjberry33" target="_blank">
            <img src={githubIcon} alt="Github Account" />
          </a>
        </span>
        <p className={styles.description}>
          Software engineer with a strong foundation in full-stack development.
        </p>
        <a href={Resume} target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default KeShaun;
