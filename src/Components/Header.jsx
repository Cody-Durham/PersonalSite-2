import React from 'react'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Designer from '../Pages/Designer'
import Contact from '../Pages/Contact'
import Resume from '../Pages/Resume'

import { Route, Link, Switch } from 'react-router-dom'




const Header = () => {
    return (
        <div>
            <h1>Header</h1>

            <nav>
                <div className='logo'>
                <Link to='/'><h1>My logo goes here</h1></Link>
                </div>
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

            <Switch>
                <Route exact path='/about' component={ About } />
                <Route exact path='/projects' component={ Projects } />
                <Route exact path='/designer' component={ Designer } />
                <Route exact path='/contact' component={ Contact } />
                <Route exact path='/resume' component={ Resume } />
            </Switch>
        </div>
    )
}

export default Header