// Import React
import React from 'react';



const AboutMe = ({aboutData}) => {
  return (


    <>
    <div className="About">
   
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="about-me-container">
          <div className="about-me-title">
            About <br /> {aboutData ? aboutData.name: " "}
          </div>

          <div className="about-me-flex-container">
            <div className="about-me-image">
              <div className="back-div"></div>
              <div className="black-image"><img src= {aboutData ? aboutData.avatar.url: " "} alt="black" /></div>
              <div className="main-image"><img src={aboutData ? aboutData.avatar.url: " "} alt="smit" /></div>
            </div>
            <div className="about-me-content">

            <div className="logo"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg" alt="logo" /></div>

              <div className="text">
              {aboutData ? aboutData.title: " "}  

                <br /><br />

                {aboutData ? aboutData.subTitle: " "}  

                <br /><br />

                {aboutData ? aboutData.description: " "} 
                


              </div>
            </div>
          </div>

          <div className="mail-button mail-button2">
            <a href="portfolio3@gmail.com"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg" alt="mail" /></a>
          </div>
        </div>
      </div>
    </section>
    <br /><br />
    </div>
    
    </>
  );
};

export default AboutMe;
