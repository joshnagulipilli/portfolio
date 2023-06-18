import React from 'react'



const About = () => {
  return (
    <section className="about" id="about">
      <div className=" row m-0" >
        <div className="inner-container1-about col-md-6">

       

        </div>
        <div className="inner-container2-about col-md-6">

          <center>
            <b className='text-uppercase size-md'>About Me</b>
            <h2 className='margin-y-md mt-4'>Let me Introduce Myself</h2>

          </center>

          <p className='margin-y-2xl size-lg mt-4'>I am a positive , tech enthusiastic and competent web developer , has built up a diverse range of skills, qualities and attributes  .  Currently I am pursuing B.tech in CS at Vignan college ,
            I  love to solve challenges and coding problems in various platforms . I believe in  indulging to learn new technologies is a key to  success. My all time goal is learning new technologies and want to spend my life around technical things solving problems </p>


        </div>
        <div className="bottom-container col-md-12 ">
          <div className="row">
            <div className='bottom-first col-md-6' style={{ height: "40vh" }}>
              
            <center>
            <div className='box-round' >
                 <i class="fa-solid fa-user mb-4">  &nbsp; programming </i>
                  <p>
                    Participated in Number of contests and solved 1000+ problems in programming
                  </p>
                  </div>
                  </center>
             
            </div>
            <div className='bottom-second col-md-6' style={{ border: "none", height: "40vh" }}>
              <div className="box-round" >
                <center> <i class="fa-solid fa-code mb-4">  &nbsp; development</i>
                  <p>
                  Participated in  Hackathons  and  Developed Projects using major Frameworks  

                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About