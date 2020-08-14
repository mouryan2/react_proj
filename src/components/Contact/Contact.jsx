import React from 'react'
import './Contact.css';
import  gmail from'./icons/gmail.svg'
export default function Contact() {
    return (
        <div className="contact">
           <h3 className="contactme">Contact me!</h3>
           <p className="p-text">I'd love to hear from you</p>
           <p className="p-text">Shoot me a message</p>
           <a  href="mailto:divyachandhaka678@gmail.com" >
           {/* <img  height="50px" width="50px" src="https://img.icons8.com/ultraviolet/40/000000/hand-right.png"/> */}
           <img className="gmail-icon" src={gmail} alt="gmail" height="50px" width="50px"/>
           </a>
           <p className="gmail">divyachandhaka678@gmail.com</p>
        </div>
    )
}
