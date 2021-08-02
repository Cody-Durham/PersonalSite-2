import React from 'react'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Designer from '../Pages/Designer'
import Contact from '../Pages/Contact'
import Resume from '../Pages/Resume'

import { Route, Link, Switch } from 'react-router-dom'
import '../Styles/Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <Link to='/'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1627624646/Portfolio%20Website%202/CD_Logo_White-02_m9ldd1.png' /></Link>
                </div>
                <nav>
                    <ul>
                        <li>                        
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/designer'>Designer</Link>
                        </li>
                        <li>
                            <Link to='contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='resume'>Resume</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header