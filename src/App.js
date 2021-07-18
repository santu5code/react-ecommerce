
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartStore from './components/CartItems'


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route  path="/cart" component={CartStore}></Route>
      
    </Switch>
    </>
  );
}

export default App;
