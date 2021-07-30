import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main'
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
