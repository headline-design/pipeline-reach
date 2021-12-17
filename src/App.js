import './App.css';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import algosdk from 'algosdk'
import { CopyBlock, dracula } from 'react-code-blocks';
import launchToken from '@reach-sh/stdlib/launchToken.mjs';
import { Button, Select, PipelineShell, Input, Link, Flash } from 'pipeline-ui'

window.launchToken = launchToken

window.reachLog = "Hello World!"

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
  try {
    let response = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log(response)
  }
  catch (error) { console.log(error) }
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

var contractName = "Morra Game"

var backend = undefined

var net = "TestNet";

const stdlib = loadStdlib('ALGO')
window.stdlib = stdlib

//change Algo server IP to match your local stdlib devnet IP, or leave with "http://localhost" to test on local machine only.


const contracts = {
  "Atomic Swap": {
    contract: require('./reach-backends/atomicswap.mjs'),
    description: 'unkown function',
    frontend: async function () {
      let data = await fetch("reach-frontend/atomicswapFront.mjs"); return data.text();
    }
  },
  "Morra Game": {
    contract: require('./reach-backends/morra.mjs'),
    description: 'Game of two players guessing "fingers"',
    frontend: async function () {
      let data = await fetch("reach-frontend/morraFront.mjs"); return data.text();
    }
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

  deploy = async () => {

    window.acct = acct
    //code for pipeline 
    /*
    async function reachDeploy(address,role,interact){
    let ctcCreator = address.contract(backend);
    await backend[role](ctcCreator, {interact})
    let id = await ctcCreator.getInfo()
    console.log(id)
    return id
      }
    */
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
    if (event.value !== "Reach Contracts") {
      backend = contracts[event.value].contract;
      window.backend = backend;
      contractName = event.value;
      this.setState({ description: contracts[event.value].description });
      this.setState({ teal: backend._ALGO.appApproval });
      this.setState({ participants: Object.keys(backend._Participants).toString() })
      contracts[event.value].frontend().then(response => this.setState({ frontend: response }))
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
      this.setState({ frontend: "" })
    }
  }

  toggleNet = (event) => {
    if (event.value !== "Select Net:") {
      if (event.value === "MainNet") {
        net = "MainNet"
        stdlib.setWalletFallback(stdlib.walletFallback({
          providerEnv: net, MyAlgoConnect
        }));
      }
      else {
        net = "TestNet"
        stdlib.setWalletFallback(stdlib.walletFallback({
          providerEnv: net, MyAlgoConnect
        }));
      }
    }
    document.getElementById("react-select-3-input").disabled = true
  }

  selectTeal = (event) => {
    if (event.value !== "TEAL Contracts") {
      teal = tealContracts[event.value].program;
      teal2 = tealContracts[event.value].clearProgram
      contractName = event.value;
      this.setState({ description: tealContracts[event.value].description });
      this.setState({ teal: tealContracts[event.value].program })
      this.setState({ frontend: "" })
      this.setState({ participants: "" })
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
      this.setState({ frontend: "" })
      this.setState({ participants: "" })
    }
  }

  async deployTeal() {
    if (teal !== "") {
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
    else {
      alert("Please select a TEAL contract to deploy!")
    }
  }

  inputAppId(event) {
    appId = event.target.value
    console.log(appId)
  }

  componentDidMount() {
    getContracts(tealNames);
    setInterval(function () {
      let textarea = document.getElementById('log');
      textarea.value = window.reachLog
      textarea.scrollTop = textarea.scrollHeight;
    }, 200)
  }


  render() {
    return (
      <div className="app" align="center">
        <div className="loader" id="loader"></div>
        <h1>Smart Contract Command Lab</h1>
        <h2>What the heck is a "smart contract"?</h2>
        <p>A smart contract is a relatively simplistic TEAL (Transaction Execution Approval Language) program or "app" that exists on the blockchain network. It stores a small amount of global and local data and evaluates transactions to either approve or dissapprove them.</p>
        <h2>How can people interact with my smart contract?</h2>
        <p>After "opting in" to the smart contract, they can send an "app call" transaction to the Algorand network along with any relevant "arguments" or other transaction. The number of transactions in each group and their formats will vary between contracts. When using Reach, the exported "participants" are functions that are called to initiate each transaction. The user function takes the arguments of userAddress.attach(window.backend, ctcCreator.getInfo()); and an "interact" object. The need for a "backend" can be easily and completely eliminated by obtaining and sharing the value of ctcCreator.getInfo() app id by other means.</p>
        <h2>Why use this tool?</h2>
        <p>Currently, TEAL contract creation has minimal support for JavaScript, the <i>lingua franca</i> of the online world. Creating and deploying smart contracts requires downloading and running numerous third-party software packages, using esoteric single-use languages and working with intimidating command line tools. in In order to boost decentralization and broad adoption, we are working towards complete browser-only backend-free  solutions to creation, deployment and integration.</p>
        <h2>Instructions</h2>
        <p>After connecting to your wallet, select a contract and deploy! The Reach Button will both deploy the contract and run the "frontend" code below, with your address simulating all participant interactions. For real-world use, the code specific to each participant must be isolated from this code and run with different accounts. Exercise extreme caution with mainNet, as your account may be drained. On testnet, attempting to create more than 10 smart contracts will fail. Other failures will be triggered by not having your wallet set to testnet, or not having enough funds. To fund your testnet account, simply visit: <Link href="https://testnet.algoexplorer.io/dispenser" target="_blank" title="Algo Dispenser">
          the AlgoExplorer Dispenser
        </Link></p>
        <Flash my={3} variant="danger">
          WARNING!!! Reach code must run to completion, at which point a prompt will appear to allow the deletion of the smart contract. Due to the nature of the Reach code, a significant amount of time may pass while it appears nothing is happening. Please be patient and sign all transactions!
        </Flash>
        <table><thead><th></th><th>Log</th></thead>
          <tr><td valign="top">
            <PipelineShell>
              <Select id="net" placeholder="Select Net..." onChange={this.toggleNet} options={[
                { value: 'TestNet', label: 'TestNet' },
                { value: 'MainNet', label: 'MainNet' }
              ]}></Select>
              <br></br><br></br>
              <Button onClick={() => stdlib.getDefaultAccount().then(data2 => {
                let address = data2.networkAccount.addr;
                acct = data2;
                this.setState({ address: address })
                sender = address
                console.log(acct);
              })
              }>Connect</Button>
              <h5>{this.state.address}</h5>
              <Select placeholder="Select Reach contract..." onChange={this.select} options={[
                { value: 'Reach Contracts', label: 'Reach Contracts' },
                { value: 'Morra Game', label: 'Morra Game' },
                { value: 'NFT Auction', label: 'NFT Auction' },
                { value: 'Popularity Contest', label: 'Popularity Contest' }
              ]}></Select>
              <Button onClick={this.deploy}>Deploy & Run Reach</Button>
              <div align="left">
                <p><b>Description: </b>{this.state.description}</p>
                <p><b>Participants: </b>{this.state.participants}</p>
              </div>
              <Button onClick={this.attach} style={{ display: "none" }}>Attach</Button><br></br>
              <Select placeholder="Select TEAL contract..." onChange={this.selectTeal} options={[
                { value: 'TEAL Contracts', label: 'TEAL Contracts' },
                { value: 'Permissionless Voting', label: 'Permissionless Voting' }
              ]}></Select>
              <Button onClick={this.deployTeal}>Deploy TEAL Contract</Button>
              <br></br><br></br><Input type="number" onChange={this.inputAppId} placeholder="app id"></Input><Button onClick={() => { deleteApp(appId) }}>Delete TEAL Contract</Button>
            </PipelineShell>
          </td>
            <td valign="top">
              <textarea style={{ "background-color": "black", "color": "yellow" }} id="log" readonly rows="30" cols="50">
                Testing
                hello
              </textarea>
            </td></tr>
        </table>
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
