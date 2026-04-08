import { useState, useRef, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { skills, skillTabs } from '../data/portfolioData';
import styles from './Skills.module.css';

// Icons - Font Awesome
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaFigma, FaCogs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiAxios, SiPostgresql, SiRedis, SiRabbitmq, SiFirebase, SiSocketdotio, SiPython, SiRadixui, SiPostman, SiJest, SiVercel } from "react-icons/si";
import { VscPackage, VscCode } from "react-icons/vsc";
import { MdDevices, MdRocketLaunch, MdOutlineDesignServices } from "react-icons/md";


const iconMap = {
  react: <FaReact />,
  typescript: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  vite: <VscPackage />,
  redux: <SiRedux />,
  html: <FaHtml5 />,
  radix: <SiRadixui />,  
  css: <FaCss3Alt />,
  api: <SiAxios />,
  responsive: <MdDevices />,

  node: <FaNodeJs />,
  python: <SiPython />,
  postgres: <SiPostgresql />,
  redis: <SiRedis />,
  rabbitmq: <SiRabbitmq />,
  firebase: <SiFirebase />,
  socket: <SiSocketdotio />,
  auth: <SiAxios />,  

  docker: <FaDocker />,
  aws: <FaAws />,
  cicd: <MdRocketLaunch />,
  deploy: <SiVercel />,
  git: <FaGitAlt />,
  postman: <SiPostman />,
  jest: <SiJest />,
  ide: <VscCode />,
 
  figma: <FaFigma />,
  ux: <MdOutlineDesignServices />,
  component: <FaCogs />,

};

function SkillCard({ skill }) {
  const fillRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!fillRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          fillRef.current.style.width = skill.level + '%';
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(fillRef.current);
    return () => observer.disconnect();
  }, [skill.level, animated]);

  return (
    <div className={`skill-card ${styles.card}`}>
      <div className={`${styles.cardIcon} text-2xl text-blue-500`}>
        {iconMap[skill.icon] || "❓"}
      </div>
      <div className={styles.cardName}>{skill.name}</div>
      <div className={styles.levelBar}>
        <div ref={fillRef} className={styles.levelFill} style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const handleTab = (key) => setActiveTab(key);

  return (
    <section id="skills">
      <Reveal><div className="section-label">Expertise</div></Reveal>
      <Reveal><h2 className="section-title">Skills &amp; <em>Stack</em></h2></Reveal>
      <Reveal><div className="divider" /></Reveal>

      <div className={styles.layout}>
        <Reveal className={styles.nav}>
          {skillTabs.map(tab => (
            <button
              key={tab.key}
              className={`${styles.navBtn} ${activeTab === tab.key ? styles.navBtnActive : ''}`}
              onClick={() => handleTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <div className={styles.content}>
          {skillTabs.map(tab => (
            <div
              key={tab.key}
              className={`${styles.category} ${activeTab === tab.key ? styles.categoryActive : ''}`}
            >
              <div className={styles.categoryTitle}>{tab.title}</div>
              <div className={styles.grid}>
                {skills[tab.key].map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
