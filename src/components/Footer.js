import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LockPersonIcon from '@mui/icons-material/LockPerson';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <a href="#" align="center"><LockPersonIcon/></a>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#"><FacebookIcon/></a>
          <a href="#"><TwitterIcon/></a>
          <a href="#"><LinkedInIcon/></a>
          <a href="#"><InstagramIcon/></a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;