import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import main from './images/logo.jpg'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NavBar}/>
      </Switch>
    </div>
  );
}

export default App;
