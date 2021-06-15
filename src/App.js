import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
