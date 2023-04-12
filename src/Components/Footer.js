import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(90deg, rgba(74, 88, 222, 1) 25%, rgba(129, 80, 237, 1) 83%)',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%'
  };

  return (
    <footer style={footerStyle} >
      Copyright ©2023 All rights reserved This Site is built with <FontAwesomeIcon icon={faHeart} /> by <a href='/' style={{color:"white"}}>Saad Hisham</a>
    </footer>
  );
}

export default Footer;