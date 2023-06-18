import React, { useContext } from 'react'
import SkillsContext from './Context/Skills/SkillsContext'

function Display() {
    const {skills}=useContext(SkillsContext)
    return (
        <div className='container'>
        {
     

            skills!==undefined && skills.map((ele,i)=>
            {
                return <div className='card'>
                <div className="card-content">
                       {ele.percentage}
                    </div>
                    {ele.icon}
                    <p></p>
                    <p>{ele.name}</p>
                </div>
            })
        }
           



        
        </div>
    )
}

export default Display