import React from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, FlexBoxIndex, GenericPara } from "../styles/IndexStyles";
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
        <GenericPara>
          One stop for<br/>
          All you development<br/>
          And design needs
        </GenericPara>
        <Link to="/works">Our Works</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn More</MoreText>
  </section>
  <SectionTwo>
    <div>
      <h2>Our Passion</h2>
      <GenericPara>
        Most good programers do programing not because they expect to get paid,
        but because it's fun to programer.
      </GenericPara>
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
  <SectionThree>
    <FlexBoxIndex>
      <div className="image">
        <img src="pic01.jpg" alt="pic01" />
      </div>
      <div className="text__section3">
        <h2>Website Development</h2>
        <GenericPara>We hand code beautiful websites using HTML, CSS3, JS because they are fully coustomizab</GenericPara>
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex inverse>
      <div className="text__section3">
        <h2>Website Design</h2>
        <GenericPara>We have talented and experienced Web Designer, who can design beautiful and usable web</GenericPara>
      </div>
      <div className="image">
        <img src="pic02.jpg" alt="pic02" />
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex>
      <div className="image">
        <img src="pic03.jpg" alt="pic03" />
      </div>
      <div className="text__section3">
        <h2>Mobile App Development</h2>
        <GenericPara>We develop Mobile apps in Reactive Native, which can be used in both ios and Android</GenericPara>
      </div>
    </FlexBoxIndex>
  </SectionThree>
  </>
)
