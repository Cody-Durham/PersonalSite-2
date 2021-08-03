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
import {useState} from 'react'




function App() {
  const googleURL = 'https://docs.google.com/spreadsheets/d/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/edit#gid=0'
    // console.log('google spreadsheet data =>',googleURL);
    // const split = googleURL.entry[0].gsx$project.$t
 
  return (
    <div className="App">
      <Header /> 

        <Switch>
          <Route exact path='/'>
            <Main googleURL={ googleURL } /> 
          </Route>
          
          <Route path='/about' component= { About } >
            {/* <About />  */}
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
