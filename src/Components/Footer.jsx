import React from 'react'
import '../Styles/Footer.scss'

import { Route, Link, Switch } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <nav>
                <div className='footer-icons'>
                    <ul>
                        <li>
                            <Link to='/about'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627623690/Portfolio%20Website%202/About_Icon-01-01_ral5mn.png'/></Link>
                        </li>
                        <li>
                            <Link to='/projects'> <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627623861/Portfolio%20Website%202/Projects_Icon-01_l1s9ls.png'/></Link>
                        </li>
                        <li>
                            <Link to='/designer'> <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627623865/Portfolio%20Website%202/Designer_Icon-01_gu67ww.png'/></Link>
                        </li>
                        <li>
                            <Link to='/contact'> <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627623871/Portfolio%20Website%202/Contact_Icon-01_qqrlvl.png'/></Link>
                        </li>
                        <li>
                            <Link to='/resume'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627623873/Portfolio%20Website%202/Resume_Icon-01_vtt6ak.png'/></Link>
                        </li>
                    </ul>
                </div>
               
                <div className='media-links'>
                    <a href='https://www.linkedin.com/in/codydurham/' target='blank'>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674455/Portfolio%20Website%202/LinkedIn_Icon-06_eozcjq.png'/> 
                    </a>
                    <a href='https://github.com/cody-durham' target='blank'>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627674443/Portfolio%20Website%202/GitHub_Icon-07_zjmbij.png'/>
                    </a>
                </div>
                
            </nav>
                <div className='footer-copyright'>
                    <p>C 2021 Cody Durham</p>
                </div>
        </div>
    )
}

export default Footer