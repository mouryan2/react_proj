import React from 'react'
import Mininav from '../Mininav/Mininav'
import './Experience.css'
export default function Experience() {
    return (
        <>
            <Mininav />
            <div className="experience">
                <h2 className="sideheading-1">EXPERIENCE</h2>
                <Company
                    role="SOFTWARE ENGINEER"
                    company="Mindtree Ltd"
                    client="LFG"
                    details="working for lincoln banking project "
                    experience="October 2019 - present" />
                <Company
                    role="TEST ENGINEER"
                    company="Adaquare Info"
                    client="Internal"
                    details="worked on Internal project "
                    experience="January 2018 - September 2019" />
            </div>
        </>
    )
}



function Company({ company, client, details, experience, role }) {
    return (
        <>

            <div className="exp-details">
                <h3 className="role">{role}</h3>
                <div className="body-content">
                    <div className="label-content">
                        <h3 className="label-head">COMPANY</h3>
                        <p className="label-info">{company}</p>
                    </div>
                    <div className="label-content">
                        <h3 className="label-head">CLIENT</h3>
                        <p className="label-info">{client}</p>
                    </div>


                    <p className="experience-details">{experience}</p>
                </div>
                <p className="details">{details}</p>
            </div>
        </>
    )
}
