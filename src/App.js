import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import { _Participants } from './index.main.mjs';
import algosdk from 'algosdk'

var sender = ""

async function compileProgram(client, teal) {
  let encoder = new TextEncoder();
  let programBytes = encoder.encode(teal);
  let compileResponse = await client.compile(programBytes).do();
  return compileResponse;
}

const wallet = new MyAlgoConnect()

var teal = ""
var teal2 = ""

async function getContract(file){
  let data = await fetch(file)
  data = await data.text()
  return data
}

getContract('voting.txt').then(data => {teal = data; console.log(teal)})
getContract('votingClear.txt').then(data => {teal2 = data; console.log(teal)})

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
    interact: {
      ..._Participants['Alice'],
      wager: reach.parseCurrency(0.001),
      ...reach.hasConsoleLogger
    },
    attach: {
      ..._Participants['Bob'],
      acceptWager: (amt) => { console.log('Bob accepts: ' + amt)},
      ...reach.hasConsoleLogger,
    }
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
    
    let accAlice = acct
    accAlice.networkAccount.addr = "C5E5W3BERJALL2ZH4YB3TAP7ZSJH2PJUPDHLGF74YE6DBMQ62AA47IXGNQ"
    let ctcAlice = accAlice.contract(backend);
    let ctcBob = acct.contract(backend, ctcAlice.getInfo());

    try {
      await backend.Bob(ctcBob, contracts[contractName].attach)
    }
    catch (error) { console.log(error) }
  }


  select = (event) => {
    if (event.target.value !== "Smart Contracts") {
      backend = contracts[event.target.value].contract;
      contractName = event.target.value;
      this.setState({ description: contracts[event.target.value].description });
      this.setState({participants: Object.keys(_Participants).toString()})
    }
    else {
      this.setState({ description: "" })
    }
  }

  async deployTeal(){
    console.log("sender: " + sender)
    const algodClient = new algosdk.Algodv2("",'https://api.testnet.algoexplorer.io', '');

    let compiled = await compileProgram(algodClient, teal)
    let compiledClear = await compileProgram(algodClient,teal2)

    console.log(compiled)
    const params = await algodClient.getTransactionParams().do();

    console.log(params)

    let registrationStart = algosdk.encodeUint64(params.firstRound)
    let registrationEnd = algosdk.encodeUint64(params.firstRound + 1000)
    let voteStart = algosdk.encodeUint64(params.firstRound + 2000)
    let voteEnd = algosdk.encodeUint64(params.firstRound + 3000)

    let appArgs = [registrationStart,registrationEnd,voteStart,voteEnd]
    console.log(appArgs)
    
    const txn = algosdk.makeApplicationCreateTxnFromObject({
        suggestedParams: {
            ...params,
        },
        from: sender,
        numLocalByteSlices: 1,
        numGlobalByteSlices: 1,
        numLocalInts: 0,
        numGlobalInts: 6,
        appArgs: appArgs,
        approvalProgram: new Uint8Array(Buffer.from(compiled.result, "base64")),
        clearProgram: new Uint8Array(Buffer.from(compiledClear.result, "base64")),
        onComplete: 0,
    });
    
    const signedTxn = await wallet.signTransaction(txn.toByte());
    console.log(signedTxn)
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
          sender = address
          console.log(acct);
        })
        }>Connect</button>
        <h3>{this.state.address}</h3>
        <button onClick={this.deploy}>Deploy</button>
        <button onClick={this.attach}>Attach</button><br></br>
        <button onClick={this.deployTeal}>Deploy Teal Contract</button>
      </div>
    )
  }
}

export default App;
