import React from 'react';

const Project = ({projectData}) => {

  if (!projectData || projectData.length === 0) {
    return <div>No Projects Available</div>; // Or render any other placeholder you prefer
  }
  return (
   <>
   <div className="project">
      <div className="dd_heading" style={{marginTop:"4rem"}}>
        <h2 className="text-center" style={{color:"white",textAlign:"center"}}>MY PROJECTS</h2>
      
      </div>
      <main className="page-content">

      {projectData.map((project, index) => (
        <div className="d_card">
  <img src={project.image.url} alt="Snow View" className="card-image" />
  <div className="content">
    <h2 className="heading" >{project.title}</h2>
    <p className="data-content"  style={{fontSize:"1.5rem",color:"rgb(255,128,0)"}}>{project.techStack}</p>
  </div>
</div>
      ))}

































        



        
        {/* Repeat for other cards */}
      </main>
      </div>
      </>
    
  );
}

export default Project;
