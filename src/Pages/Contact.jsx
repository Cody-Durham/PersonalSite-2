import React from 'react'
import {useState} from 'react'
import '../Styles/Contact.scss'
import '../Components/UnderConstruction'
import UnderConstruction from '../Components/UnderConstruction'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse'
import emailjs from 'emailjs-com';

const Contact = () => {

        function sendEmail (event) {
       event.preventDefault()
       emailjs.sendForm('service_ngksy95', 'template_w0motin', event.target, 'user_yiq9D9eFTcNIhr45HYcax')
       .then((response) => {
           console.log(response);
       })
       .catch((error) => {
           console.log(error);
       })
       event.target.reset()
    }



    return (
        <>
           <div className='contact-main-section'>
            <div className='contact-section1'>
                <Fade left>
                <div className='contact-left'>
                    <div>
                        {/* <h1>About</h1> */}
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629802690/Portfolio%20Website%202/Page%20Headers/Contact-45_xxusgc.png'></img>
                    </div>
                    <div>
                        <p>I live in Denver but can work from anywhere!</p>
                        <p>Give me a shout, I love to talk..!</p>
                    </div>

                    <div className='contact-links'>
                        <div id='linkedin'>
                            <a href='https://www.linkedin.com/in/codydurham/' target='blank'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674455/Portfolio%20Website%202/LinkedIn_Icon-06_eozcjq.png' alt='linkedin logo'></img></a>
                            {/* <article>LinkedIn</article> */}
                        </div>
                        <div id='github'>
                            <a href='https://github.com/cody-durham' target='blank'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674443/Portfolio%20Website%202/GitHub_Icon-07_zjmbij.png'></img></a>
                            {/* <article>Github</article> */} 
                        </div>
                    </div>
 
                </div>
                <div>
                    <img id='arrow' src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1630036245/Portfolio%20Website%202/Notepad_arrow-02_fggjwv.png'></img>
                    <img id='notepad'src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1630033366/Portfolio%20Website%202/Notepad-01_mw8vde.png'></img>
                    
                    <form className='contact-form-container' onSubmit={sendEmail}>
                        <Fade left>
                            <div id='name-email-fields'>
                                <input type="text" id='name' placeholder='Name'name='name'/>
                                <input type="text" id='email' placeholder='Email' name='user_email'/>
                            </div>
                        </Fade>
                        <Fade up>
                            <div id='message-field'>
                                <textarea type="text" id='message' placeholder='Message' name='message'/>  
                                <input id='contact-submit-button' type='submit' value='Send It!' className='submit-button'></input>
                            </div>
                        </Fade>
                    </form>
                </div>
                </Fade>
                
                
                
                
                
                
                
                
                
                
                    {/* <form className='contact-form-container' onSubmit={sendEmail}>
                        <Fade bottom>
                            <div id='name-email-fields'>
                                <input type="text" id='name' placeholder='Name'name='name'/>
                                <input type="text" id='email' placeholder='Email' name='email'/>
                            </div>
                        </Fade>
                        <Fade right>
                            <div id='message-field'>
                                <textarea type="text" id='message' placeholder='Message' name='message'/>  
                                <input id='contact-submit-button' type='submit' value='Send It!' className='submit-button'></input>
                            </div>
                        </Fade>
                    </form> */}
            </div>
            </div>
        </>
        
        




        
    )
}

export default Contact