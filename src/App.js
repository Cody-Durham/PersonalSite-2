import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main'
import About from './Pages/About'
import Projects from './Pages/Projects';
import Designer from './Pages/Designer';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import { Link, Route, Switch } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer /> 
    </div>
  );
}

export default App;
