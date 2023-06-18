import React from 'react'
import img from '../home-bg.png'
function Home() {

  return (
    <div className="bg d-flex" style={{ backgroundImage: `url(${img})`, border: "none" ,width: "100%" }} >
      <div className="bg-content  container " >
        <div className="main-anim d-flex-column justify-content-center" >

          <center> <h2 >Hello World!</h2>
            <h5 className="mb-3"> I am <span> Joshna Gulipilli</span></h5></center>
        </div>



        <div className="container-inner " >
       <center> <h5>   Full Stack Developer | Competitive Programmer
        </h5>
       <p> An undergraduate Computer science student with knowledge in
        competitive programming
        and web development  </p> </center>
        </div>

        <div className="btn-main my-3">

          <a type="button" class="btn-include1 mx-3 my-3" href="mailto:joshnagulipilli@gmail.com" target="_blank">    Hire Me <i class="fa-brands fa-hire-a-helper mx-2"></i></a>




            <a type="button" class="btn-include2 mx-3 my-3"  href="https://drive.google.com/file/d/1X0RvxMAWSVjt458GJk78yljWDaztliyH/view?usp=sharing" target="_blank"> Resume <i class="fa-solid fa-download mx-2"></i></a>

        </div>
      </div>
    </div>
  )
}

export default Home



//