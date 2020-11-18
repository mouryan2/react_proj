import React from 'react'
import github from './icons/github.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'

import './Media.css'
export default function media() {
  return (
    <div className="my-connection" >
      <a href="https://www.instagram.com/divya_chandaka">
        <img className="my-item" src={instagram} height=" 35px" width="35px" alt="logo" />
      </a>
      <a href="https://github.com/divyachandaka123">
        <img className="my-item" src={github} height=" 35px" width="35px" alt="logo" />
      </a>
      <a  href="https://www.linkedin.com/in/divya-chandaka-7551a4158">
        <img className="my-item" src={linkedin} height=" 40px" width="39px" alt="logo" />
      </a>
    </div>
  )
}
