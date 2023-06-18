import React from 'react'
import SkillsNav from './SkillsNav'
import Display from './Display'

const Skills = () => {
  return (
    <div className="main-skill" id="skills">

      <SkillsNav />
      <Display />
      <div className="other-skills">
        <div className="right-other">
          <button type="button" className="btn btn-light ">  Other Skills </button>
        </div>
        <div className="left-other">
        <div className='card'>
            <i class="fa-solid fa-check-to-slot"></i>
            <p></p>
            <p>Oops</p>
          </div>
          <div className='card'>
          <i class="fa-solid fa-database"></i>
          <p></p>
          <p>DBMS</p>
        </div>
          <div className='card'>
            <i class="fa-brands fa-git-alt"></i>
            <p></p>
            <p>Git</p>
          </div>
          <div className='card'>
            <i class="fa-brands fa-github"></i>
            <p></p>
            <p>GitHub</p>
          </div>
          <div className='card'>
            <i class="fa-brands fa-windows"></i>
            <p></p>
            <p>Windows</p>
          </div>
          <div className='card'>
            <i class="fa-solid fa-u"></i>
            <p></p>
            <p>Unix</p>
          </div>
          
          <div className='card'>
            <i class="fa-regular fa-p"></i>
            <p></p>
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills