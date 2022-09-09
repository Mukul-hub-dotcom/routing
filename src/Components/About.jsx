import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate=useNavigate()
  return (
    <div>About
      <br />
      <button onClick={()=>{
        navigate("/product/masai")
      }}>Submit</button>
    </div>
  )
}

export default About


// useParam of react router dom to fetch id
// useNavigate