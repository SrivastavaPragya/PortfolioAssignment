import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Me</h3>
                        <p>Feel Free to contact me any time. I will get back to you as soon as I can!.</p>
                        <input type="text" className="form-control form-group" placeholder="Name" />
                        <input type="text" className="form-control form-group" placeholder="Email" />
                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                        <button className="contact_form_submit">Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_contact_social_icon d-flex align-items-end">
                    
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-headset"></i>
                    <span>+91-9212321321</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>portfolio3@gmail.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Los Angeles , America</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  );
};

export default Contact;
