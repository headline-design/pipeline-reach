import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import { _Participants } from './index.main.mjs';

var contractName = "Morra Game"

var backend = undefined

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

const contracts = {
  "Morra Game": {
    contract: require('./index.main.mjs'),
    description: 'Game of two players guessing "fingers"',
    interact: {...undefined,
      wager: reach.parseCurrency(0.001),
      ...reach.hasConsoleLogger},
      attach:{}
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "",
      description: "",
      participants: ""
    }
  }

  async deploy() {

    let ctcAlice = acct.contract(backend);

    try {
      await backend.Alice(ctcAlice, contracts[contractName].interact)
    }
    catch (error) { console.log(error) }
  }

  async attach() {

    let ctcAlice = acct.contract(backend);

    try {
      await backend.Bob(ctcAlice, contracts[contractName].interact)
    }
    catch (error) { console.log(error) }
  }


  select = (event) => {
    if (event.target.value !== "Smart Contracts") {
      backend = contracts[event.target.value].contract;
      contractName = event.target.value;
      this.setState({ description: contracts[event.target.value].description });
      try{this.setState({participants: Object.keys(_Participants).toString()})}catch(error){console.log(error)}
    }
    else {
      this.setState({ description: "" })
    }
  }

  render() {
    return (
      <div className="reach" align="center">
        <select onChange={this.select}>
          <option>Smart Contracts</option>
          <option>Morra Game</option>
        </select>
        <p>{this.state.description}</p>
        <p>Participants: {this.state.participants}</p>
        <button onClick={() => reach.getDefaultAccount().then(data2 => {
          let address = data2.networkAccount.addr;
          acct = data2;
          this.setState({ address: address })
          console.log(acct);
        })
        }>Connect</button>
        <h3>{this.state.address}</h3>
        <button onClick={this.deploy}>Deploy</button>
        <button onClick={this.attach} disabled>Attach</button>
      </div>
    )
  }
}

export default App;
