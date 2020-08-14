import React from 'react'
import { Link } from 'react-router-dom'
import './Mininav.css'
import Skills from '../Skills/Skills'
export default function MiniNav() {
    return (
        <div>
           
      <nav className="mininavbar">
        <div className="mininav-content">          
            <ul className="mininavitems">
              <li className="mininavitem" >
                <Link to="/skills" >SKILLS</Link>
              </li>
              <li className="mininavitem" >
                <Link to="/experience">EXPERIENCE</Link>
              </li>
              <li className="mininavitem" >
                <Link to="/education">EDUCATION</Link>
              </li>
            </ul>


        </div>

      </nav >
        </div>
    )
}
