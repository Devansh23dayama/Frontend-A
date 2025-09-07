import React from 'react';
import styles from './Body.module.css';

const Body = ({ personalInfo, skills, projects }) => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hello, I'm <span className={styles.highlight}>{personalInfo.name}</span>
          </h1>
          <h2 className={styles.heroSubtitle}>{personalInfo.title}</h2>
          <p className={styles.heroBio}>{personalInfo.bio}</p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.ctaButton}>View My Projects</a>
            <a href="#contact" className={styles.secondaryButton}>Get In Touch</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.githubUrl} className={styles.projectLink}>GitHub</a>
                  <a href={project.liveUrl} className={styles.projectLink}>Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Body;