import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ socialLinks, personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
              >
                <span className={styles.socialIcon}>{social.icon}</span>
                <span className={styles.socialName}>{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className={styles.copyright}>
            <p>&copy; {currentYear} {personalInfo.name}. Built with React and passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;