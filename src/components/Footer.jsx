import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} Payal. All rights reserved.</p>
        <div style={styles.links}>
          <a href="#profile" style={styles.link}>Profile</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center'
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 20px'
  },
  text: {
    marginBottom: '10px'
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none'
  }
};

export default Footer;
