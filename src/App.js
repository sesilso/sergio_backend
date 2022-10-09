import React, {Fragment, useState, useEffect} from 'react';
import logo from './paradise_plus.png';
import './App.css';
import SusciptionList from './components/SuscriptionList';

function App() {

  const [suscriptions, setSuscriptions] = useState([])

  useEffect(() => {
    const getSuscriptions = () => {
      fetch('http://3.224.140.216:9000/api')
      .then(res => res.json())
      .then(res => setSuscriptions(res))
    }
    getSuscriptions()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>Tipos de suscripci&oacute;n</p>
        <Fragment>
        <SusciptionList suscriptions={suscriptions}/>
      </Fragment>
      </header>
    </div>
  );
}

export default App;
