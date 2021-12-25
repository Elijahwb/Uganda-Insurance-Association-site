import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './routes/Landing';
import Register from './routes/Register';

function App() {
  return (
    <Router>
      <section>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
