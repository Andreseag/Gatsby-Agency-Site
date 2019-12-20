import React from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo } from "../styles/IndexStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';

library.add( faHeart, faCode, faGem, fas );

export default () => (
  <>
  <section style={{position: "relative"}}>
    <Banner></Banner> 
    <TextWrapper>
      <div>
        <h2>GeekyHacker</h2>
        <p>
          One stop for<br/>
          All you development<br/>
          And design needs
        </p>
        <Link to="/works">Our Works</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn More</MoreText>
  </section>
  <SectionTwo>
    <div>
      <h2>Our Passion</h2>
      <p>
        Most good programers do programing not because they expect to get paid,
        but because it's fun to programer.
      </p>
      <h5>- Linus Torvalds</h5>
    </div>
    <span> 
      <FontAwesomeIcon
        icon="gem"
        color="#04F5C6"
        size="6x"
        style={{marginRight: '3rem'}}
        fixedWidth
        border
      />
      <FontAwesomeIcon
        icon="heart"
        color="#00F0FF"
        size="6x"
        style={{marginRight: '3rem'}}
        fixedWidth
        border
      />
      <FontAwesomeIcon
        icon="code"
        color="#73DBFD"
        size="6x"
        fixedWidth
        border
      />
    </span>
  </SectionTwo>
  </>
)
