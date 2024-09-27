import React from 'react';
import styles from './HomeStyles.module.css';
import heroImg from '../../assets/profilepic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Sreelekshmi_S_Resume.pdf';
import { useTheme } from '../../Common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Sreelekshmi S"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme} // Updated onClick to use toggleTheme
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sreelekshmi S
          
        </h1>
        <div className={styles.typing_effect}>
          <h2>Frontend DEVELOPER</h2>
        </div>
        <span>
         
          <a href="https://github.com/SreelekshmiSanthosh" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sreelekshmis/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
