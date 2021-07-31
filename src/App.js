import './App.css';
import Header from './Components/Header';
import Main from './Pages/Main'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Designer from './Pages/Designer'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import Footer from './Components/Footer';
import './Styles/App.scss'
import {Switch, Route, Link} from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <Header /> 

        <Switch>
          <Route exact path='/'>
            <Main /> 
          </Route>
          
          <Route path='/about' component={ About }>
          </Route>

          <Route path='/projects' component={ Projects }>
            {/* <Projects /> */}
          </Route>

          <Route path='/designer' component={ Designer }>
            {/* <Designer /> */}
          </Route>

          <Route path='/contact' component={ Contact }>
            {/* <Contact />  */}
          </Route>

          <Route path='/resume' component={ Resume }>

          </Route>
        </Switch>
        <Footer /> 
    </div>
  );
}

export default App;
