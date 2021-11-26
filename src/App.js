import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './features/homepage/Homepage';
import Checkout from './features/checkout/Checkout';
import Reservation from './features/reservation/Reservation';
import Contact from './features/contact/Contact';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/reservation' component={Reservation}/>
          <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
