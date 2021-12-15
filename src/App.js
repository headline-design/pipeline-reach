import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import algosdk from 'algosdk'
import { CopyBlock, dracula } from 'react-code-blocks';

var appId = 0

window.appId = 51807989

async function deleteApp() {
  let algodClient = ""

  if (net === "TestNet") {
    algodClient = new algosdk.Algodv2("", 'https://api.testnet.algoexplorer.io', '');
  }
  else {
    algodClient = new algosdk.Algodv2("", 'https://algoexplorerapi.io', '');
  }
  let params = await algodClient.getTransactionParams().do();

  let txn = algosdk.makeApplicationDeleteTxnFromObject({
    suggestedParams: {
      ...params,
    },
    from: sender,
    appIndex: parseInt(appId),
  });

  let signedTxn = await wallet.signTransaction(txn.toByte());
  try{
  let response = await algodClient.sendRawTransaction(signedTxn.blob).do();
  console.log(response)
  }
  catch(error){console.log(error)}
}

window.creator = false;

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
    let data = await fetch("teal/" + filelist[0] + ".txt")
    tealContracts[name].program = await data.text()
    let data2 = await fetch("teal/" + filelist[0] + " clear.txt")
    tealContracts[name].clearProgram = await data2.text()
  }
  document.getElementById("loader").style.display = "none"
}

var acct = {}

getContracts(tealNames);

var contractName = "Morra Game"

var backend = undefined

var net = "TestNet";

const stdlib = loadStdlib('ALGO')
window.stdlib = stdlib

//change Algo server IP to match your local stdlib devnet IP, or leave with "http://localhost" to test on local machine only.


const contracts = {
  "Morra Game": {
    contract: require('./reach-backends/morra.mjs'),
    description: 'Game of two players guessing "fingers"'
  },
  "NFT Auction": {
    contract: require('./reach-backends/nftauction.mjs'),
    description: "An NFT auction",
    frontend: async function () {
      let data = await fetch("reach-frontend/nftauctionFront.mjs"); return data.text();
    }
  },
  "Popularity Contest": {
    contract: require('./reach-backends/popularitycontest.mjs'),
    description: "A vote for two candidates",
    frontend: async function () {
      let data = await fetch("reach-frontend/popularitycontestFront.mjs"); return data.text();
    }
  }
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "",
      description: "",
      participants: "",
      teal: "",
      frontend: ""
    }
  }

  deploy = () => {

    let ctcCreator = acct.contract(backend);

    console.log(ctcCreator)

    window.acct = acct

    console.log(acct.networkAccount)


    try {
      eval(this.state.frontend)
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
      window.backend = backend;
      contractName = event.target.value;
      this.setState({ description: contracts[event.target.value].description });
      this.setState({ teal: backend._ALGO.appApproval })
      contracts[event.target.value].frontend().then(response => this.setState({ frontend: response }))
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
      this.setState({ frontend: "" })
    }
  }

  toggleNet = (event) => {
    if (event.target.value !== "Select Net:") {
      if (event.target.value === "MainNet") {
        net = "MainNet"
        //stdlib.setProviderByName(net);
        stdlib.setWalletFallback(stdlib.walletFallback({
          providerEnv: net, MyAlgoConnect
        }));
      }
      else {
        net = "TestNet"
        //stdlib.setProviderByName(net);
        stdlib.setWalletFallback(stdlib.walletFallback({
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
      this.setState({ frontend: "" })
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
      this.setState({ frontend: "" })
    }
  }

  async deployTeal() {
    console.log("sender: " + sender)
    let algodClient = ""

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

  inputAppId(event) {
    appId = event.target.value
    console.log(appId)
  }

  render() {
    return (
      <div className="app" align="center">
        <div className="loader" id="loader"></div>
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
          <option disabled>MainNet</option>
        </select><br></br><br></br>
        <button onClick={() => stdlib.getDefaultAccount().then(data2 => {
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
          <option disabled>Morra Game</option>
          <option>NFT Auction</option>
          <option>Popularity Contest</option>
        </select>
        <button onClick={this.deploy}>Deploy & Run Reach</button>
        <p>{this.state.description}</p>

        <button onClick={this.attach} style={{ display: "none" }}>Attach</button><br></br>
        <select onChange={this.selectTeal}>
          <option>TEAL Contracts</option>
          <option>Permissionless Voting</option>
        </select>
        <button onClick={this.deployTeal}>Deploy Teal Contract</button>
        <input type="number" onChange={this.inputAppId}></input><button onClick={() => { deleteApp(appId) }}>Delete App</button>
        <table>
          <thead><th>TEAL Code</th><th>Frontend Code</th></thead>
          <tbody>
            <tr>
              <td valign="top">
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
                      overflow: 'false',
                      align: "left",
                      background: "#fff",
                      backgroundColor: "#fff",
                      borderColor: "#D7DAE0",
                    }}
                  />
                </div>
              </td>
              <td valign="top">
                <div align="left">
                  <CopyBlock
                    text={this.state.frontend}
                    language={"js"}
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
