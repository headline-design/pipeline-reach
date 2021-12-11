import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import * as smartContract from './index.main.mjs';
import Pipeline from '@pipeline-ui-2/pipeline'

const myAlgoWallet = Pipeline.init();

console.log(Pipeline);

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

// accAlice = await reach.newTestAccount(startingBalance);
//const accBob = await reach.newTestAccount(startingBalance);

//const ctcAlice = accAlice.deploy(backend);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ""
    }
  }

  deploy () {
    acct.deploy(smartContract).then(data => {console.log(data)})
  }

  render() {
    return (
      <div className="reach" align="center">
        <button onClick={() => Pipeline.connect(myAlgoWallet).then(
          data => {
            this.setState({address: data})
            reach.getDefaultAccount(data).then(data2 => {
              acct = data2;
              console.log(data2);
            })
          })}>Connect</button>
        <h3>{this.state.address}</h3>
        <button onClick={this.deploy}>Deploy</button>
      </div>
    )
  }
}

export default App;
