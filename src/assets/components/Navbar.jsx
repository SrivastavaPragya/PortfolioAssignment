import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          
        <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/services')}>Services</li>
          <li onClick={() => navigate('/skill')}>Skills</li>
          <li onClick={() => navigate('/project')}>Project</li>
          <li onClick={() => navigate('/testimonial')}>Testimonial</li>
          <li onClick={() => navigate('/work')}>Work Experience</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
