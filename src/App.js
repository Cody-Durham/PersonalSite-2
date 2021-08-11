import './App.css';
import Header from './Components/Header';
import Main from './Pages/Main'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Designer from './Pages/Designer'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import Footer from './Components/Footer';
import Articles from './Pages/Articles'
import './Styles/App.scss'
import {Switch, Route} from 'react-router-dom'




const url = 'https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json'
// console.log('google spreadsheet data =>',googleURL);
// const split = googleURL.entry[0].gsx$project.$t

function App() {
 
  return (
    <div className="App">
      <Header /> 

        <Switch>
          <Route exact path='/'>
            <Main url={url}/> 
          </Route>
          
          <Route path='/about' component= { About } >
          </Route>

          {/* <Route path='/projects' component={ Projects }>
          </Route> */}

          <Route path='/designer' component={ Designer }>
          </Route>

          <Route path='/contact' component={ Contact }>
          </Route>

          <Route path='/resume' component={ Resume }>
          </Route>

          <Route path='/articles' component={ Articles }>
          </Route> 

        </Switch>
        <Footer /> 
    </div>
  );
}

export default App;
