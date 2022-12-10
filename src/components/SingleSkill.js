import React from 'react'

const SingleSkill = ({logo,title}) => {
  return (
        <div className="single-icon">
            <img src={logo}/>
            <p>{title}</p>
        </div>
  )
}

export default SingleSkill