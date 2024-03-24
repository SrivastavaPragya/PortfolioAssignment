// import React from 'react';
// // Import FontAwesome CSS
// import '@fortawesome/fontawesome-free/css/all.min.css'; 

// const Services = ({servicesData}) => {
//   return (
//     <section className="container " style={{marginTop:"4rem",}}>
//         <h1 style={{color:"white",fontSize:"3rem",textAlign:"center",marginTop:"2rem",color:"rgb(135,164,182)"}}>My Services</h1>
//       <section className="card__container">
//         <div className="card__bx" style={{'--clr': '#89ec5b'}}>
//           <div className="card__data">
//             <div className="card__icon">
//               <i className="fa-solid fa-paintbrush"></i>
//             </div>
//             <div className="card__content">
//               <h3>Designing</h3>
//               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         
//             </div>
//           </div>
//         </div>







        






        
//       </section>
//     </section>
//   );
// };

// export default Services;




import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = ({ servicesData }) => {
  // Function to generate a random color
  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  // Check if servicesData exists and has length before mapping
  if (!servicesData || servicesData.length === 0) {
    return <div>No Services Available</div>; // Or return null to render nothing
  }

  return (
    <section className="container" style={{ marginTop: "5rem" }}>
      <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center", marginTop: "2rem" }}>My Services</h1>
      <section className="card__container">
        {servicesData.map((service) => (
          service.enabled && (
            <div key={service._id} className="card__bx" style={{ '--clr': getRandomColor() }}>
              <div className="card__data">
                <div className="card__icon">
                  <img src={service.image.url} alt={service.name} style={{ width: 50, height: 50 }} />
                </div>
                <div className="card__content">
                  <h3>{service.name}</h3>
                  <p style={{fontSize:"1.3rem"}}>{service.desc}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </section>
    </section>
  );
};

export default Services;
