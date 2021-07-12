import './App.css';
import 'react-slideshow-image/dist/styles.css';
import {Router} from '@reach/router';
import {useEffect} from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Blog from './Pages/Blog';
import TakeAction from './Pages/TakeAction';

function App() {

  return (
    <div className="App">

    <Router>
      <Home path="/" />
      <About path="/about" />
      <News path="/news" />
      <Blog path="/blog" />
      <TakeAction path="/takeaction" />
    </Router>

    </div>
  );
}

export default App;
