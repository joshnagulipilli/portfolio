import React from 'react'


function Projects() {
  return (

    <div className="project-bg" id="projects">
      <div className="project-nav">
        <p>  Check out some of my projects </p>
      </div>
      <div className="project-down container mt-3">
        <div className="card project-card one" data-bs-toggle="modal" data-bs-target="#agri">
          <div className='slide-right' >
            <center><h5>Agri-Tech</h5></center></div>
        </div>
        <div className="card project-card two" data-bs-toggle="modal" data-bs-target="#blood">
          <div className='slide-right'>
            <center><h5 >Blood Bank Management System</h5></center></div>
        </div>
        <div className="card project-card three" data-bs-toggle="modal" data-bs-target="#tour">
          <div className='slide-right'>
            <center><h5>Travel-tourism</h5></center></div>
        </div>
        <div className="card project-card four" data-bs-toggle="modal" data-bs-target="#news">
          <div className='slide-right'>
            <center><h5>News-API</h5></center></div>
        </div>



          { /*  agri */}

          <div class="modal fade" id="agri" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{border:"0"}}>
                <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:"purple"}}>Agri-Tech</h1>
                <button type="button" class="btn btn-close position-relative position-absolute  p-2 start-100 translate-middle badge rounded-pill " data-bs-dismiss="modal" aria-label="Close" style={{marginTop:"-30px" , backgroundColor:"#4b1853"}}>       
                  <span class="" >      
                  </span>
                </button>
              </div>
              <div class="modal-body" >
              Created an Online Interacted platform connecting farmer with customers. The platform allows Investors to invest in the crops cultivated by farmers and receive the production, as mutual agreement. Farmers are able to accept the request for their crop based on their requirements and can make mutual agreement with the investor. The Platform also provides Weather report of their location, Crop- Soil Information. Farmers are able rent their Farm Tools. Tech Stack: Nodejs, Expressjs, Mongodb, Html
              </div>
              <div class="modal-footer" style={{border:"0"}}>          
                <a href="https://agritech-fm29.onrender.com"      target="_blank"       type="button" class="btn " style={{backgroundColor:"#c7c2d7",Color:"purple", border:"1px dashed purple"}}>Source Code</a>
              </div>
            </div>
          </div>
        </div>


        { /*  agri */}



        { /*  blood */}

        <div class="modal fade" id="blood" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{border:"0"}}>
                <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:"purple"}}>Blood Bank Management System</h1>
                <button type="button" class="btn btn-close position-relative position-absolute  p-2 start-100 translate-middle badge rounded-pill " data-bs-dismiss="modal" aria-label="Close" style={{marginTop:"-30px" , backgroundColor:"#4b1853"}}>       
                  <span class="" >      
                  </span>
                </button>
              </div>
              <div class="modal-body" >
              Created a web application connecting the Blood Donars and Patients. Donor and Patient upload all their medical proofs .   The Admin will check for the requirements and availability then connects both the donor and patient . Donor and Patients can move further based on their personal mutual agreement. Tech Stack: Html, Css, Php , Xampp Server, MYSql
              </div>
              <div class="modal-footer" style={{border:"0"}} >          
                <a href="/" type="button "  class="btn disabled"  style={{backgroundColor:"#c7c2d7",Color:"purple", border:"1px dashed purple"}}>Source Code</a>
              </div>
            </div>
          </div>
        </div>


        { /*  blood */}


          { /*  tour */}

          <div class="modal fade" id="tour" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{border:"0"}}>
                <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:"purple"}}>Tour And Travelism</h1>
                <button type="button" class="btn btn-close position-relative position-absolute  p-2 start-100 translate-middle badge rounded-pill " data-bs-dismiss="modal" aria-label="Close" style={{marginTop:"-30px" , backgroundColor:"#4b1853"}}>       
                  <span class="" >      
                  </span>
                </button>
              </div>
              <div class="modal-body" >
              It's an Application which solves  3 major problems of Travellers( Food,Accommodation,Transport). Main Highlighting features of this website are HITCH_HIKING and COMMUNITY HOSTINGS . Users can Create , Update and Delete Community Hosting and Hitch-Hiking card . Technologies Used : HTML, CSS, PHP, MySQL, XAMPP SERVER .
              </div>
              <div class="modal-footer" style={{border:"0"}}>          
                <a href="/" type="button" class="btn disabled" style={{backgroundColor:"#c7c2d7",Color:"purple", border:"1px dashed purple"}}>Source Code</a>
              </div>
            </div>
          </div>
        </div>


        { /*  tour*/}

          { /*  news */}

          <div class="modal fade" id="news" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style={{border:"0"}}>
                <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:"purple"}}>NEWSAPI</h1>
                <button type="button" class="btn btn-close position-relative position-absolute  p-2 start-100 translate-middle badge rounded-pill " data-bs-dismiss="modal" aria-label="Close" style={{marginTop:"-30px" , backgroundColor:"#4b1853"}}>       
                  <span class="" >      
                  </span>
                </button>
              </div>
              <div class="modal-body" >
              The News App is a cutting-edge web application that leverages APIs to fetch the latest news from around the world. With a user-friendly interface and an extensive range of categories, this app delivers a comprehensive news experience tailored to your interests. Stay informed, explore diverse topics, and discover the stories that matter most to you with the News App.
Technologies Used : Reactjs , MongoDb, ExpressJs, Nodejs , NewsApi ,Css .
              </div>
              <div class="modal-footer" style={{border:"0"}}>          
                <a href="https://github.com/joshnagulipilli/NewsAPI" target="_blank" type="button" class="btn " style={{backgroundColor:"#c7c2d7",Color:"purple", border:"1px dashed purple"}}>Source Code</a>
              </div>
            </div>
          </div>
        </div>


        { /*  news*/}




      </div>
      <div className='my-5'></div>
      <div className="project-bottom container">
        <div className="card project-bottom-card">
          <span class="position-absolute top-0   translate-middle badge rounded-pill ">
            Expressjs

          </span>
          <a href="https://crud-operation-yltj.onrender.com/" target='_blank' rel="noreferrer"><center><h4>CRUD-Express</h4></center></a>
        </div>

        <div className="card project-bottom-card">
          <span class="position-absolute top-0   translate-middle badge rounded-pill ">
            Reactjs

          </span>
          <a href="https://joshnagulipilli.github.io/text-utils/" target='_blank' rel="noreferrer"><center><h4>Text-utils</h4></center></a>
        </div>
        <div className="card project-bottom-card">

          <span class="position-absolute top-0   translate-middle badge rounded-pill ">
            Reactjs

          </span>
          <a href="https://password-generator-joshna.netlify.app/" target='_blank' rel="noreferrer"><center><h4>Password-generator</h4></center></a>
        </div>
        <div className="card project-bottom-card">
          <span class="position-absolute top-0   translate-middle badge rounded-pill ">
            Javascript

          </span>
          <a href="https://joshnagulipilli.github.io/Expenditure_Analyser/" target='_blank' rel="noreferrer"><center><h4>Expenditure-analysis</h4></center></a>
        </div>
      </div>

    </div>
    // 
    // check out some of my works
    // I have done lot of projects in course and independent study.
  )
}

export default Projects