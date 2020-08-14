import React from 'react'
import Mininav from '../Mininav/Mininav'
import './Education.css'
export default function Education() {
    return (
        <div>
            <Mininav />
            <div className="experience">
                <h2 className="sideheading-1">EDUCATION</h2>
            <College
               college="RAJIV GANDHI UNIVERSITY"
               degree="BE / BTECH"
               course="  : CSE"
               gpa="CGPA :  8"
               duration="June 2015 - May 2019"
            />
            </div>
        </div>
    )
}


function College({ college, degree, course, gpa, duration }) {
    return (
        <>

            <div className="exp-details">
                <h3 className="role">{college}</h3>
                <div className="body-content">
                    <div className="label-content">
    <h3 className="label-head">{degree} {course}</h3>
                        
                    </div>
                   
                    <div className="label-content">

                        <p className="label-head">{gpa}</p>
                    </div>

                    <p className="experience-details">{duration}</p>
                </div>

            </div>
        </>
    )
}
