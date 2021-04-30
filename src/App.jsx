import './App.css';
import Greeting from './Components/Greeting';
import Introduction from './Components/Introduction';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Introduction />
      <SectionOne />
      <SectionTwo />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
