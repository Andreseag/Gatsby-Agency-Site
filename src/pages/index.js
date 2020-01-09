import React from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, SectionFour, FormFive, FlexBoxIndex, GenericPara, GenericH2 } from "../styles/IndexStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faHtml5, faJs, faReact, faCss3, faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';

library.add( faHeart, faCode, faGem, fab, fas );

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
      <GenericH2>Our Passion</GenericH2>
      <GenericPara lessSize grey>
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
        <img src="pic02.jpg" alt="pic01" />
      </div>
      <div className="text__section3">
        <GenericH2>Website Development</GenericH2>
        <GenericPara lessSize lessSpacing>We hand code beautiful websites using HTML, CSS3, JS because they are fully coustomizab</GenericPara>
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex inverse>
      <div className="text__section3">
        <GenericH2>Website Design</GenericH2>
        <GenericPara lessSize lessSpacing>We have talented and experienced Web Designer, who can design beautiful and usable web</GenericPara>
      </div>
      <div className="image">
        <img src="pic02.jpg" alt="pic02" />
      </div>
    </FlexBoxIndex>
    <FlexBoxIndex>
      <div className="image">
        <img src="pic02.jpg" alt="pic03" />
      </div>
      <div className="text__section3">
        <GenericH2 none>Mobile App Development</GenericH2>
        <GenericPara lessSize lessSpacing>We develop Mobile apps in Reactive Native, which can be used in both ios and Android</GenericPara>
      </div>
    </FlexBoxIndex>
  </SectionThree>
  <SectionFour>
    <div className="header__section4">
      <div className="titile__section4">
        <GenericPara>
          We use modern and latest technologies which helps our clients <br/>
          as they are highly scalable and maintanable.
        </GenericPara>
      </div>
    </div>
    <div className="grid__section4">
      <div className="item1" style={{backgroundColor: '#4D508E'}}>
        <div className="flex__section4">
          <FontAwesomeIcon icon={faReact} color="#00FFCC" size="3x" fixedWidth />
          <GenericH2 none>React</GenericH2>
        </div>
        <GenericPara lessSize lessSpacing grey>
          Modern JavaScrip framework witch will make your web 
          at the same time, handy for every user.
        </GenericPara>
      </div>
      <div className="item2" style={{backgroundColor: '#  4A4D89'}}>
        <div className="flex__section4">
          <FontAwesomeIcon icon="code" color='#00FFCC' size='3x' fixedWidth />
          <GenericH2 none>React Native</GenericH2>
        </div>
        <GenericPara lessSize lessSpacing grey>
          Cross-platform for mobile app development based on
          whose resulting code is compiled to Android and IOS.
        </GenericPara>
      </div>
      <div className="item3" style={{ backgroundColor: '#484A83' }}>
        <div className="flex__section4">
          <FontAwesomeIcon icon={faJs} color="00FFCC" size="3x" fixedWidth />
          <GenericH2 none>
            JavaScript
          </GenericH2>
        </div>
        <GenericPara lessSize lessSpacing grey>
          Javascript is the lenguage of the web.
          It is used for Web Development, mobile development and app development and everyth
        </GenericPara>
      </div>
      {/* <div className="item4" style={{ backgroundColor: '#45477E' }}></div> */}
    </div>
  </SectionFour>
  <section style={{ position: 'relative' }}>
    <Banner parallax></Banner>
    <FormFive>
      <form name="contact_us" method="POST" data-netlify="true">
        <div className="fields">
          <GenericH2 none>Contact Us</GenericH2>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea name="message" id="message" placeholder="Message" rows="7" />
          <div className="actions">
            <input type="submit" value="Send Message" className="button__primary" />
          </div>
        </div>
      </form>
    </FormFive>
  </section>
  </>
)
