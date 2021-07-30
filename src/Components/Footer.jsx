import React from 'react'
import '../Styles/Footer.scss'

import { Route, Link, Switch } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='footer'>
            <nav>
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
                    <li>
                        <Link to='/'>C 2021 Cody Durham</Link>
                    </li>
                </ul>

                
            </nav>
        </div>
    )
}

export default Footer