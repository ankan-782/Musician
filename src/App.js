import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from '../src/components/Home/Home';
import Services from './components/Services/Services';
import Teachers from './components/Teachers/Teachers';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="text-white">
      <Router>
        <Header></Header>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/teachers">
              <Teachers></Teachers>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
