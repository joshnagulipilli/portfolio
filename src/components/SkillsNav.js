import React, { useContext, useEffect } from 'react'
import SkillsContext from './Context/Skills/SkillsContext'

function SkillsNav() {
     const { addSkills } = useContext(SkillsContext)
     const databases =[
          {
               "name": "MongoDB",
               "icon": <i class="fa-solid fa-m"></i>,
               "percentage": "90%"
          }, {
               "name": "SQL",
               "icon": <i class="fa-solid fa-database"></i>,
               "percentage": "60%"
          }
     ]
     const Programming=[
          {
               "name": "C",
               "icon": <i class="fa-solid fa-c"></i>,
               "percentage": "80%"
          },
          {
               "name": "C++",
               "icon": <i class="fa-solid fa-check"></i>,
               "percentage": "80%"
          },
          {
               "name": "Python",
               "icon": <i class="fa-brands fa-python"></i>,
               "percentage": "90%"
          },
          {
               "name": "Java",
               "icon": <i class="fa-brands fa-java"></i>,
               "percentage": "50%"
          },
          {
               "name": "HTML",
               "icon": <i class="fa-brands fa-html5"></i>,
               "percentage": "95%"
          },
          {
               "name": "CSS",
               "icon": <i class="fa-brands fa-css3"></i>,
               "percentage": "90%"
          },
          {
               "name": "Javascript",
               "icon": <i class="fa-brands fa-square-js"></i>,
               "percentage": "80%"
          }
     ]

     const frameworks=[
          {
               "name": "ReactJs",
               "icon": <i class="fa-brands fa-react"></i>,
               "percentage": "70%"
          },
          {
               "name": "Nodejs",
               "icon": <i class="fa-brands fa-node-js"></i>,
               "percentage": "80%"
          },
         
          {
               "name": "ExpressJs",
               "icon": <i class="fa-solid fa-e"></i>,
               "percentage": "80%"
          },
          {
               "name": "Mongoose",
               "icon": <i class="fa-regular fa-m"></i>,
               "percentage": "90%"
          },
          {
               "name": "Flask",
               "icon": <i class="fa-solid fa-f"></i>,
               "percentage": "60%"
          }
     ]
     const All = [
          {
               "name": "ReactJs",
               "icon": <i class="fa-brands fa-react"></i>,
               "percentage": "70%"
          },
          {
               "name": "Nodejs",
               "icon": <i class="fa-brands fa-node-js"></i>,
               "percentage": "80%"
          },
          {
               "name": "MongoDB",
               "icon": <i class="fa-solid fa-m"></i>,
               "percentage": "90%"
          },
          {
               "name": "ExpressJs",
               "icon": <i class="fa-solid fa-e"></i>,
               "percentage": "80%"
          },
          {
               "name": "Mongoose",
               "icon": <i class="fa-regular fa-m"></i>,
               "percentage": "90%"
          },
          {
               "name": "HTML",
               "icon": <i class="fa-brands fa-html5"></i>,
               "percentage": "95%"
          },
          {
               "name": "CSS",
               "icon": <i class="fa-brands fa-css3"></i>,
               "percentage": "90%"
          },
          {
               "name": "Javascript",
               "icon": <i class="fa-brands fa-square-js"></i>,
               "percentage": "80%"
          },
          {
               "name": "Flask",
               "icon": <i class="fa-solid fa-f"></i>,
               "percentage": "90%"
          },
          {
               "name": "C",
               "icon": <i class="fa-solid fa-c"></i>,
               "percentage": "80%"
          },
          {
               "name": "C++",
               "icon": <i class="fa-solid fa-check"></i>,
               "percentage": "80%"
          },
          {
               "name": "Python",
               "icon": <i class="fa-brands fa-python"></i>,
               "percentage": "90%"
          },
          {
               "name": "Java",
               "icon": <i class="fa-brands fa-java"></i>,
               "percentage": "50%"
          },
          {
               "name": "SQL",
               "icon": <i class="fa-solid fa-database"></i>,
               "percentage": "60%"
          },
     ]

     useEffect(() => {
          addSkills(All);
     }, [])

     const handleAll = () => {
          addSkills(All);
     }
     const handleDatabases=()=>
     {
          addSkills(databases);
     }
     const handleFrameworks=()=>
     {
          addSkills(frameworks);
     }
     const handleProgramming=()=>
     {
          addSkills(Programming);
     }


     return (
          <div className="main-nav ">

               <div className=" left-top-grid">
                    <center><h4> What SKills  ?</h4>
                    </center>
               </div>
               <div className="  right-top-grid">
                    <div className=" right-one">
                         <div className="dot-line"><center>Here Are My Skills To Represent My Expertise</center> </div>
                    </div>
                    <div className="right-two d-flex justify-content-around">
                         <button type="button" className="btn btn-light here" onClick={handleAll}>  <i class="fa-solid fa-check"></i>&nbsp; &nbsp;All</button>
                         <button type="button" className="btn btn-light here" onClick={handleProgramming}>  <i class="fa-solid fa-keyboard"></i> &nbsp;&nbsp;Programming </button>
                         <button type="button" className="btn btn-light here"  onClick={handleFrameworks}> <i class="fa-solid fa-arrow-right"></i> &nbsp;&nbsp;Frameworks </button>
                         <button type="button" className="btn btn-light here"  onClick={handleDatabases}>   <i class="fa-solid fa-database"></i> &nbsp;&nbsp;Databases</button>
                    </div>


               </div>




          </div>
     )
}

export default SkillsNav