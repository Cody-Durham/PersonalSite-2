import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main'
import About from './Pages/About'
import Projects from './Pages/Projects';
import Designer from './Pages/Designer';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

function App() {
  return (
    <div className="App">

      <Main /> 
      <About /> 
      <Projects />
      <Designer />
      <Contact /> 
      <Resume /> 
   
    </div>
  );
}

export default App;
