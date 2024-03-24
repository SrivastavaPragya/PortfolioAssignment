import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = ({ skillsData }) => {
    return (
      <div className="skills-section">
        <div className="skills-header">
          <h1 style={{ fontSize: "3rem", color: "white" }}>Skills</h1>
        </div>
        <div className="skills-container">
          {(skillsData || []).map((skill) => (
            skill.enabled && (
              <div key={skill._id} className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src={skill.image.url} alt={skill.name} className="skills-icons" />
                  </div>
                  <h3 style={{ color: "white" ,marginTop:"1rem",fontSize:"1.4rem"}}>{skill.name}</h3>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    );
  };
  

export default Skills;
