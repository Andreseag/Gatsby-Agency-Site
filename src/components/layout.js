import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Footer } from '../styles/IndexStyles';
export default ({ childern }) => (
  <div>
    {childern}
    <Footer>
      <div class="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
      </div>
      <div className="copyright">
        <span>&copy; 2019, GeekyHacker | </span>
        <span>Made with ❤️ and ☕ in Colombia</span>
      </div>
    </Footer>
  </div>
)