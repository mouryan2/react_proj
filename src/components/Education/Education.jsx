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
                    course="CSE"
                    gpa="8"
                    duration="June 2015 - May 2019"
                />
            </div>
        </div>
    )
}


function College({ college, course, gpa, duration }) {
    return (
        <>

            <div className="educ-details">
                <h3 className="role">{college}</h3>
                <div className="body-content">

                    <div className="label-content">
                        <h3 className="label-head">BE/BTECH</h3>
                        <p className="label-info">{course}</p>
                    </div>

                    <div className="label-content">
                        <h3 className="label-head">CGPA</h3>
                        <p className="label-info">{gpa}</p>
                    </div>
                    <p className="experience-details">{duration}</p>
                </div>
            </div>

        </>
    )
}
