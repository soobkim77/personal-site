import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
