import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../contextAPI/users';
import Main from '../pages/Main';
import { isToken } from '../util/getToken';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const setState = (state) => setIsLogin(state);
  useEffect(() => {
    setState(isToken());
  }, []);
  return (
    <UserContext.Provider value={{ isLogin, setState }}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
