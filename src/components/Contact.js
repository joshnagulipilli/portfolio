import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="heading" id="contact">
    <center><h4>Contact Me</h4><p></p>
    <p>Feel free to get in touch , cheers!</p>
    </center>
    </div>
    <div className='contact-bg row'>
    <div className="col-md-4 ">
    <i className="fa-solid fa-location-dot mb-3" ></i>
  <center><p>6-215 , Kakinada
  East Godavari , Andhra Pradesh
  
  India</p></center>
    </div>
    <div className="col-md-4 border">
    <i className="fa-solid fa-phone mb-3"></i>
    <center><p>(+91) 8309277626
    </p>
    </center>
    </div>
    <div className="col-md-4 border">
    <i className="fa-solid fa-envelope mb-3"></i>
    <center><p>joshnagulipilli@gmail.com
    joshnagulipilli0830@gmail.com</p></center>
    
    </div>
    </div>
    <div className="peek">
       <center>
      <a href=" https://www.instagram.com/joshnagulipilli/" target='_blank' ><i className="fa-brands fa-instagram"></i></a>
      <a href="  https://github.com/joshnagulipilli  " target='_blank' > <i className="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/joshna-gulipilli-7a686120a/   " target='_blank' > <i class="fa-brands fa-linkedin"></i></a>
       </center>
    
    </div>
    </>
  )
}

export default Contact