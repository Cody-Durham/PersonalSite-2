import React from 'react'
import '../Styles/Contact.scss'
import '../Components/UnderConstruction'
import UnderConstruction from '../Components/UnderConstruction'
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        // <div className="contact-main-section">
        //     <UnderConstruction />
        // </div>
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
                    {/* <article>
                    I'm an Industrial Designer turned Developer that's able to utilize my creativity to take simple ideas and turn them into modern designs. Leveraging a background in consumer-facing product design my goals are to create beautiful products to help enrich people's interactions between passions and functional designs.
                    </article> */}
                </div>
                </Fade>
                <form className='contact-form-container'>
                    {/* <label for="">Name</label> */}
                    <div id='name-email-fields'>
                        <input type="text" id='name' placeholder='Name'/>
                        <input type="text" id='email' placeholder='Email'/>
                    </div>
                    <div id='message-field'>
                        <input type="text" id='message' placeholder='Message'/>     
                    </div>
                    <input type='button' value='Submit' className='submit-button'></input>
                </form>
            </div>
            </div>

        </>
        
        




        
    )
}

export default Contact