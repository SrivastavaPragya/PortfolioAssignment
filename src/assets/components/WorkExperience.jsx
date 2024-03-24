import React from 'react';


  
  


const WorkExperience = ({workData}) => {

  if (!workData || workData.length === 0) {
    return <div>No Work Experience Available</div>; // Or return null to render nothing
  }
  return (
    <div className="work">
    <div id="workexperience" className="sectionClass">
      <div className="row">
        <div className="sectiontitle">
          <h2 style={{ color: "white", fontFamily: "Roboto" }}>
            Work experience
          </h2>
          <span className="headerLine"></span>
        </div>
        <ul className="cbp_tmtimeline">
          {workData.map((experience, index) => (
            <li key={index}>
 <div className="cbp_tmicon cbp_tmicon-phone" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem' ,
    color:"white"
}}>
  <i className="fas fa-briefcase"></i>
</div>


              <div className="cbp_tmlabel">
                <h3>{experience.jobTitle}</h3>
                <div className="date">
                  <i className="fa fa-calendar"></i> {experience.startDate}
                </div>
                <h4><i className="fa fa-flag"></i> {experience.company_name}</h4>
                <p className="projectParagraph" style={{fontSize:"1.2rem"}}>{experience.bulletPoints}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default WorkExperience;
