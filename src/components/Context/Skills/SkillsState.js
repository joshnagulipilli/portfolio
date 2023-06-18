import React, { useState } from 'react'
import SkillsContext from './SkillsContext' 

const SkillsState = (props) => {
  const [skills,setSkills]=useState()
const addSkills=(skillsArr)=>
{
   setSkills(skillsArr)
}

  return (
    <SkillsContext.Provider value={{skills ,setSkills,addSkills}}>
    {props.children}
    </SkillsContext.Provider>
  )
}

export default SkillsState