import React, { useState, useEffect } from 'react';

const Testimonial = ({ testimonialsData }) => {
  const [index, setIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (!testimonialsData || testimonialsData.length === 0) {
      return; // Return early if there are no testimonials
    }

    const intervalTime = 10000; 
    const updateInterval = 10; 
    let progress = 0; 
    
    const progressInterval = setInterval(() => {
      progress += (updateInterval / intervalTime) * 100; 
      setProgressWidth(progress);
      if (progress >= 100) {
        progress = 0; 
        setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      }
    }, updateInterval);

    return () => clearInterval(progressInterval);
  }, [index, testimonialsData]); 

  if (!testimonialsData || testimonialsData.length === 0) {
    return <p>No testimonials available.</p>; // or some other placeholder content
  }

  const { name, position, image, review } = testimonialsData[index];

  return (
    <div className="testimonial">
      <div className="testimonial-container" style={{marginTop:"4rem"}} >
        <h1 style={{fontSize:"2rem"}}>Testimonials</h1>
        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <p className="testimonial" style={{fontSize:"1.3rem"}}>{review}</p>
        <div className="user">
          <img src={image.url} alt={name} className="user-image" />
          <div className="user-details">
            <h4 className="username">{name}</h4>
            <p className="role">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
