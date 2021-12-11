import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import * as backend from './index.main.mjs';

var devnet = false;



const reach = loadStdlib(devnet ? 'ALGO-devnet' : 'ALGO')

//change Algo server IP to match your local reach devnet IP, or leave with "http://localhost" to test on local machine only.

const myEnv = reach.providerEnvByName(devnet ? 'LocalHost' : 'MainNet');
console.log(myEnv);
var acct = {};

if (devnet) {
  myEnv.ALGO_INDEXER_SERVER = "http://localhost";
  myEnv.ALGO_SERVER = "http://localhost";
  reach.setProviderByEnv(myEnv);
}

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'MainNet', MyAlgoConnect
}));


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ""
    }
  }

  async deploy() {

    const accAlice = acct
    const ctcAlice = accAlice.deploy(backend);

    try {
      await Promise.all([
        backend.Alice(ctcAlice, {
          ...undefined,
          wager: reach.parseCurrency(5),
          ...reach.hasConsoleLogger,
        }),])
    }
    catch (error) { console.log(error) }
  }

  render() {
    return (
      <div className="reach" align="center">
        <button onClick={() => reach.getDefaultAccount().then(data2 => {
          let address = data2.networkAccount.addr;
          acct = data2;
          this.setState({ address: address })
          console.log(acct);
        })
        }>Connect</button>
        <h3>{this.state.address}</h3>
        <button onClick={this.deploy}>Deploy</button>
      </div>
    )
  }
}

export default App;
