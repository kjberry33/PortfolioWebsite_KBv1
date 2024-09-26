import styles from './KeShaunStyles.module.css';
import keshaunImg from '../../assets/KeShaunPerfect.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/Keshaun_Berry_Resume_9_12_2024.pdf';
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
        <h1>KeShaun
          <br />
        Berry  
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://linkedin.com/in/keshaun-berry/" target="_blank">
            <img src={linkedinIcon} alt="Linked-In Account" />
          </a>
          <a href="https://github.com/kjberry33" target="_blank">
            <img src={githubIcon} alt="Github Account" />
          </a>
        </span>
        <p className={styles.description}>
          Versatile software engineer with wide practical experience,
           developing software and apps to protect and aid millions.
        </p>
        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default KeShaun;
