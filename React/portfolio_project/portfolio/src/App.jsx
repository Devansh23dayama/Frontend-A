import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import styles from './App.module.css';

function App() {
  // Data structure designed for easy API integration
  const personalInfo = {
    name: 'Devansh Dayama',
    title: 'Full-Stack Java Developer',
    bio: 'Passionate about building scalable backend systems with Java/Spring Boot and modern frontends with React. Experienced in microservices architecture and cloud deployment.',
    email: 'devanshanu2000@gmail.com'
  };

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  const skills = [
    'Java', 'Spring Boot', 'Hibernate/JPA', 'Spring Security',
    'PostgreSQL', 'MySQL', 'React', 'JavaScript', 'TypeScript',
    'Docker', 'AWS', 'RESTful APIs', 'Microservices', 'Maven', 'Gradle'
  ];

  const projects = [
    {
      id: 1,
      title: 'Under Construction',
      description: 'Full-stack e-commerce platform with Spring Boot and React',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Under Construction',
      description: 'RESTful API for task management with JWT authentication',
      technologies: ['Java', 'Spring Security', 'JWT', 'MySQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Under Construction',
      description: 'Distributed banking system with event-driven architecture',
      technologies: ['Java', 'Spring Cloud', 'Kafka', 'Docker'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/feed/', icon: '👔' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Email', url: 'mailto:devanshanu2000@gmail.com', icon: '✉️' }
  ];

  return (
    <div className={styles.app}>
      <Header personalInfo={personalInfo} navLinks={navLinks} />
      <Body 
        personalInfo={personalInfo}
        skills={skills}
        projects={projects}
      />
      <Footer socialLinks={socialLinks} personalInfo={personalInfo} />
    </div>
  );
}

export default App;