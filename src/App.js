import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topnav from './components/global/Topnav';
import Landing from './routes/Landing';
import Signup from './routes/Signup';

function App() {
  return (
      <Router>
        <Topnav />

        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>
  );
}

export default App;
