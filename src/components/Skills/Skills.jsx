import React from 'react'
import Mininav from '../Mininav/Mininav'
import './Skills.css'


const Progress = ({ done, name }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className="technology">
            <h3 id="name">{name}</h3>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
			</div>
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <>
        <Mininav/>
        <div className="skills">
            <h2 className="sideheading">SKILLS</h2>
           
            <div className="score">
            <p className="content">
                Worked primarily with  Java and JavaScript, with frameworks such as Spring , Jdbc, Cucumber and Selenium.
            </p>
            <p className="content">
                Interested in reactive programming , exploring with Angular and AWS respectively.
            </p>
                <Progress done="90" name="JAVA" />
                <Progress done="80" name="SPRING BOOT"/>
                <Progress done="75" name="JAVA SCRIPT" />
                <Progress done="80" name="MY SQL" />
                <Progress done="85" name="SELINIUM" />
                <Progress done="65" name="C++" />
                
            </div>
        </div>
        </>
    )
}

