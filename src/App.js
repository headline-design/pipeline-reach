import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import { _Participants } from './index.main.mjs';
import algosdk from 'algosdk'
import { CopyBlock, dracula } from 'react-code-blocks';

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

const tealContracts = {
  "Permissionless Voting": {
    description: 'allows anyone to vote on two candidates within a specified "round" range'
  }
}

const tealNames = ["Permissionless Voting"]

async function getContracts(filelist) {
  for (let i = 0; i < filelist.length; i++) {
    let name = filelist[i]
    let data = await fetch(filelist[0] + ".txt")
    tealContracts[name].program = await data.text()
    let data2 = await fetch(filelist[0] + " clear.txt")
    tealContracts[name].clearProgram = await data2.text()
  }
  document.getElementById("loader").style.display = "none"
}

var acct = {}

getContracts(tealNames);

var contractName = "Morra Game"

var backend = undefined

var net = "TestNet";

const reach = loadStdlib('ALGO')

//change Algo server IP to match your local reach devnet IP, or leave with "http://localhost" to test on local machine only.


const contracts = {
  "Morra Game": {
    contract: require('./index.main.mjs'),
    description: 'Game of two players guessing "fingers"',
    interact: {
      ..._Participants['Alice'],
      wager: reach.parseCurrency(0.001),
      ...reach.hasConsoleLogger
    },
    backendFunction: "Alice"
  },
  "NFT Auction": {
    contract: require('./nftauction.mjs'),
    description: "An NFT auction",
    interact: {
      getId: () => {
        const id = reach.randomUInt();
        console.log(` Alice makes id #${id}`);
        return id; }
    },
    backendFunction: "Creator"
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "",
      description: "",
      participants: "",
      teal: ""
    }
  }

  async deploy() {

    let ctcCreator = acct.contract(backend);

    try {
      let response = await backend[contracts[contractName].backendFunction](ctcCreator, contracts[contractName].interact)
      console.log(response)
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
    if (event.target.value !== "Reach Contracts") {
      backend = contracts[event.target.value].contract;
      contractName = event.target.value;
      this.setState({ description: contracts[event.target.value].description });
      this.setState({ participants: Object.keys(_Participants).toString() });
      this.setState({ teal: backend._ALGO.appApproval })
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
    }
  }

  toggleNet = (event) => {
    if (event.target.value !== "Select Net:") {
      if (event.target.value === "MainNet") {
        net = "MainNet"
        //reach.setProviderByName(net);
        reach.setWalletFallback(reach.walletFallback({
          providerEnv: net, MyAlgoConnect
        }));
      }
      else {
        net = "TestNet"
        //reach.setProviderByName(net);
        reach.setWalletFallback(reach.walletFallback({
          providerEnv: net, MyAlgoConnect
        }));
      }
    }
    document.getElementById("net").disabled = true
  }

  selectTeal = (event) => {
    if (event.target.value !== "TEAL Contracts") {
      teal = tealContracts[event.target.value].program;
      teal2 = tealContracts[event.target.value].clearProgram
      contractName = event.target.value;
      this.setState({ description: tealContracts[event.target.value].description });
      this.setState({ teal: tealContracts[event.target.value].program })
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
    }
  }

  async deployTeal() {
    console.log("sender: " + sender)
    let algodClient = undefined

    if (net === "TestNet") {
      algodClient = new algosdk.Algodv2("", 'https://api.testnet.algoexplorer.io', '');
    }
    else {
      algodClient = new algosdk.Algodv2("", 'https://algoexplorerapi.io', '');
    }

    let compiled = await compileProgram(algodClient, teal)
    let compiledClear = await compileProgram(algodClient, teal2)

    console.log(compiled)
    const params = await algodClient.getTransactionParams().do();

    console.log(params)

    let registrationStart = algosdk.encodeUint64(params.firstRound)
    let registrationEnd = algosdk.encodeUint64(params.firstRound + 1000)
    let voteStart = algosdk.encodeUint64(params.firstRound + 2000)
    let voteEnd = algosdk.encodeUint64(params.firstRound + 3000)

    let appArgs = [registrationStart, registrationEnd, voteStart, voteEnd]
    console.log(appArgs)

    let txn = algosdk.makeApplicationCreateTxnFromObject({
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

    let signedTxn = await wallet.signTransaction(txn.toByte());
    console.log(signedTxn)
    let response = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log(response)
  }

  render() {
    return (
      <div className="reach" align="center">
        <div className="loader" id ="loader"></div>
        <h1>Smart Contract Command Center</h1>
        <h2>What the heck is a "smart contract"?</h2>
        <p>A smart contract is a relatively simplistic program or "app" that exists on the blockchain network. It stores a small amount of variable data and evaluates transactions to either approve or dissapprove them.</p>
        <h2>How can people interact with my smart contract?</h2>
        <p>After "opting in" to the smart contract, they can send a group transaction to the Algorand network that includes an "App Call" along with any relevant "arguments." The number of transactions in each group and their formats will vary between contracts.</p>
        <h2>Why use this tool?</h2>
        <p>Currently, TEAL contract creation has minimal support for JavaScript, the <i>lingua franca</i> of the online world. Creating and deploying smart contracts requires downloading and running numerous third-party software packages, using esoteric single-use languages and working with intimidating command line tools. in In order to boost decentralization and broad adoption, we are working towards the creation of a JSTeal language and complete browser-only solutions to creation, deployment and integration.</p>
        <select onChange={this.toggleNet} id="net">
          <option>Select Net:</option>
          <option>TestNet</option>
          <option>MainNet</option>
        </select><br></br><br></br>
        <button onClick={() => reach.getDefaultAccount().then(data2 => {
          let address = data2.networkAccount.addr;
          acct = data2;
          this.setState({ address: address })
          sender = address
          console.log(acct);
        })
        }>Connect</button>
        <h5>{this.state.address}</h5>
        <select onChange={this.select}>
          <option>Reach Contracts</option>
          <option>Morra Game</option>
          <option>NFT Auction</option>
        </select>
        <button onClick={this.deploy}>Deploy Reach Contract</button>
        <p>{this.state.description}</p>

        <button onClick={this.attach} style={{ display: "none" }}>Attach</button><br></br>
        <select onChange={this.selectTeal}>
          <option>TEAL Contracts</option>
          <option>Permissionless Voting</option>
        </select>
        <button onClick={this.deployTeal}>Deploy Teal Contract</button>
        <h2>TEAL Code:</h2>
        <div align="left">
          <CopyBlock
            text={this.state.teal}
            language={"cpp"}
            showLineNumbers={true}
            wrapLines
            theme={dracula}
            codeBlock
            customStyle={{
              height: 'auto',
              overflow: 'auto',
              align: "left",
              background: "#fff",
              backgroundColor: "#fff",
              borderColor: "#D7DAE0",
            }}
          />
        </div>
      </div>
    )
  }
}

export default App;
