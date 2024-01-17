import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Service from './components/Service';
import Navigation from './components/Navigation';
import Property from './components/Property';
import Expertise from './components/Expertise';
import Question from './components/Question';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div >
     <Header/>
     <Service/><br></br>
     <Navigation/>
     <Property/>
     <Expertise/>
     <Question/>
     <Connect/>
     <Footer/>
    </div>
  );
}

export default App;
