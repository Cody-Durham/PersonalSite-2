import React from 'react'
import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom'
import '../Styles/Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Fade top>
                <div className='header-container'>
                    <div className='logo'>
                        <Link to='/'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627624646/Portfolio%20Website%202/CD_Logo_White-02_m9ldd1.png' alt='my custom logo'/></Link>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1628904616/Portfolio%20Website%202/SoftwareDeveloper_White_Icons-34_futaru.png' className=' software-developer'></img>
                    </div>
                    <nav>
                        <ul>
                            <li>                        
                                <Link to='/about'>About</Link>
                            </li>
                            {/* <li>
                                <Link to='/projects'>Projects</Link>
                            </li> */}
                            <li>
                                <Link to='/designer'>Designer</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/resume'>Resume</Link>
                            </li>
                            <li>
                                <Link to='/articles'>Articles</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Fade>
        </div>
        
    )
}

export default Header