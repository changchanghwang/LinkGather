import { Route, Switch } from 'react-router-dom';
import Store from '../contextAPI/users';
import Main from '../pages/Main';

function App() {
  return (
    <Store>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Store>
  );
}

export default App;
