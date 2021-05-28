import './App.css';
import {Router, Link} from '@reach/router';
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Blog from './Pages/Blog';

function App() {

  return (
    <div className="App">

    <Router>
      <Home path="/" />
      <About path="/about" />
      <News path="/news" />
      <Blog path="/blog" />
    </Router>

    </div>
  );
}

export default App;
