import React from 'react';
import {FaDev } from 'react-icons/fa';
import { GitHub, Linkedin, Mail  } from 'react-feather';

export const SocialButtonsPage = () => {

    let footerStyle = {
        position: "absolute",
        top: "80vh",
    }
    return (
        
        <footer className="social" style={footerStyle}>
              
              <div className=' marginLR15 inbl scaleOnHover ico25'>
                <p>
              <a href='https://github.com/vishalkumarprasad' title='Github' target="_blank" rel='noreferrer'>
                <GitHub className='col'/>
              </a>
              </p>
              </div>
              <div className=' marginLR15 inbl scaleOnHover ico25'>
                <p>
              <a href='https://linkedin.com/in/vishalkumarprasad/' title='Linkedin' target="_blank" rel='noreferrer'>
                <Linkedin className='col'/>
                </a>
              </p>
              </div>
              <div className=' marginLR15 inbl scaleOnHover ico25'>
                <p>
              <a href='https://dev.to/vishalkumarprasad' title='Dev.to' target="_blank" rel='noreferrer'>
                <FaDev className='col'/>
              </a>
                </p>
              </div>
              <div className=' marginLR15 inbl scaleOnHover ico25'>
                <p>
              <a href='mailto:vishalkumarprasad@outlook.com' title='Mail' target="_blank" rel='noreferrer'>
                <Mail className='col'/>
              </a>
                </p>
              </div>
              </footer>
              
              
            
            
    )
}



export default SocialButtonsPage;