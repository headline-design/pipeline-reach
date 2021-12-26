import './App.css';
import React, { Component } from 'react';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import algosdk from 'algosdk'
import { CopyBlock, dracula } from 'react-code-blocks';
import launchToken from '@reach-sh/stdlib/launchToken.mjs';
import { Button, Select, PipelineShell, Input, Link, Flash, Textarea } from 'pipeline-ui'

var role = "Deployer"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ?"#d1d1fa": "#ffffff00",
    backgroundColor: state.isSelected ? '#d1d1fa' : '#ffffff00',
    color: state.isSelected ? 'black' : 'rgb(51, 54, 61)',
    cursor: "pointer",
    isActive: true,
    autoFocus: true,
    isFixed: true

    
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: "flex",
    cursor: "pointer",
    borderStyle: "solid",
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "hsl(0, 0%, 80%)",
    backgroundColor: "#fff",
    isFixed: true,
    autoFocus: true
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition, };
  }
}

window.launchToken = launchToken

window.acct = {}

window.reachLog = "hello world!"

var custom = false

var appId = 0

window.appId = 51807989

async function deleteApp() {
  window.reachLog += ("\n" + "Attempting to delete app...")
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
    window.reachLog += ("\n" + "TXN ID: " + response.txId)
  }
  catch (error) { console.log(error) }
}

window.creator = false;

var sender = ""

async function compileProgram(client, teal) {
  let encoder = new TextEncoder();
  let programBytes = encoder.encode(teal);
  try {
    let compileResponse = await client.compile(programBytes).do();
    return compileResponse;
  }
  catch (error) { alert("invalid TEAL contract") }
}

const wallet = new MyAlgoConnect()

var teal = ""
var teal2 = ""

const tealContracts = {
  "custom": {
    description: "Custom TEAL"
  },
  "Permissionless Voting": {
    description: 'allows anyone to vote on two candidates within a specified "round" range'
  },
  "Permissioned Voting": {
    description: 'allows anyone who holds a unique ASA to vote on two candidates within a specified "round" range'
  }
}

const tealNames = ["Permissionless Voting", "Permissioned Voting"]
const reachNames = ["danstorage", "morra","nftauction","popularitycontest"]
const reachCNames = ["Dan Storage", "Morra Game","NFT Auction","Popularity Contest"]

const contracts = {
  "Dan Storage": {
    contract: require('./reach-backends/danstorage.mjs'),
    description: 'Writes then reads data from smart contract 5 times',
    frontend: require('./reach-frontends/danstorageFront.mjs'),
    text: ""
  },
  "Morra Game": {
    contract: require('./reach-backends/morra.mjs'),
    description: 'Game of two players guessing "fingers"',
    frontend: require('./reach-frontends/morraFront.mjs'),
    text: ""
  },
  "NFT Auction": {
    contract: require('./reach-backends/nftauction.mjs'),
    description: "An NFT auction",
    frontend: require('./reach-frontends/nftauctionFront.mjs'),
    text: ""
  },
  "Popularity Contest": {
    contract: require('./reach-backends/popularitycontest.mjs'),
    description: "A vote for two candidates",
    frontend: require('./reach-frontends/popularitycontestFront.mjs'),
    text: ""
  }
}


async function getContracts() {
  for (let i = 0; i < tealNames.length; i++) {
    let name = tealNames[i]
    let data = await fetch("teal/" + name + ".txt")
    tealContracts[name].program = await data.text()
    let data2 = await fetch("teal/" + name + " clear.txt")
    tealContracts[name].clearProgram = await data2.text()
  }
  for (let i = 0; i < reachNames.length; i++){
    let name = reachNames[i]
    let data = await fetch("reach-frontends/" + name + "Front.txt")
    contracts[reachCNames[i]].text = await data.text()
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


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "",
      description: "",
      participants: "",
      teal: "",
      frontend: "",
      frontendText: ""
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
      if (contractName === "Morra Game") {
        if (role === "Deployer") {
          this.state.frontend.run(role)
        }
        else {
          this.state.frontend.run(role, appId)
        }
      }
      else {
        this.state.frontend.run()
      }
    }
    catch (error) { console.log(error) }

  }

  select = (event) => {
    document.getElementById("appArgs").style.display = "none"
    if (event.value !== "Reach Contracts") {
      backend = contracts[event.value].contract;
      window.backend = backend;
      contractName = event.value;
      this.setState({ description: contracts[event.value].description });
      this.setState({ teal: backend._ALGO.appApproval });
      this.setState({ participants: Object.keys(backend._Participants).toString() })
      this.setState({ frontend: contracts[event.value].frontend })
      this.setState({ frontendText: contracts[event.value].text })
      if (contractName === "Morra Game") {
        document.getElementById("roles").style.display = "block"
      }
      else {
        document.getElementById("roles").style.display = "none"
      }
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
      this.setState({ frontend: "" })
      document.getElementById("roles").style.display = "none"
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
  }

  selectTeal = (event) => {
    console.log(event.value)
    if (event.value !== "TEAL Contracts") {
      if (event.value === "custom") { custom = true } else { custom = false }
      teal = tealContracts[event.value].program;
      teal2 = tealContracts[event.value].clearProgram
      contractName = event.value;
      this.setState({ description: tealContracts[event.value].description });
      this.setState({ teal: tealContracts[event.value].program })
      this.setState({ frontend: "" })
      this.setState({ frontendText: "" })
      this.setState({ participants: "" })
      document.getElementById("roles").style.display = "none"
    }
    else {
      this.setState({ description: "" })
      this.setState({ teal: "" })
      this.setState({ frontend: "" })
      this.setState({ frontendText: "" })
      this.setState({ participants: "" })
      document.getElementById("roles").style.display = "none"
    }
  }

  async deployTeal() {
    if (teal !== "") {
      window.reachLog = "Deploying TEAL..."
      console.log("sender: " + sender)
      let algodClient = ""

      if (net === "TestNet") {
        algodClient = new algosdk.Algodv2("", 'https://api.testnet.algoexplorer.io', '');
      }
      else {
        algodClient = new algosdk.Algodv2("", 'https://algoexplorerapi.io', '');
      }

      let compiled = ""

      compiled = await compileProgram(algodClient, teal)
      let compiledClear = await compileProgram(algodClient, teal2)

      console.log(compiled)
      const params = await algodClient.getTransactionParams().do();

      console.log(params)

      let registrationStart = algosdk.encodeUint64(params.firstRound)
      let registrationEnd = algosdk.encodeUint64(params.firstRound + 1000)
      let voteStart = algosdk.encodeUint64(params.firstRound + 2000)
      let voteEnd = algosdk.encodeUint64(params.firstRound + 3000)

      let appArgs = custom ? document.getElementById("argInput").value : [registrationStart, registrationEnd, voteStart, voteEnd]

      if (custom) {
        let js = eval(appArgs)
        let converted = []
        js.forEach(arg => { converted.push(algosdk.encodeUint64(arg)) })
        appArgs = converted
      }

      console.log(appArgs)

      let lbytes = 1
      let gbytes = 1
      let lints = 0
      let gints = 6

      if (custom) {
        lbytes = document.getElementById("lbyte").value
        gbytes = document.getElementById("gbyte").value
        lints = document.getElementById("lint").value
        gints = document.getElementById("gint").value
      }

      let txn = algosdk.makeApplicationCreateTxnFromObject({
        suggestedParams: {
          ...params,
        },
        from: sender,
        numLocalByteSlices: lbytes,
        numGlobalByteSlices: gbytes,
        numLocalInts: lints,
        numGlobalInts: gints,
        appArgs: appArgs,
        approvalProgram: new Uint8Array(Buffer.from(compiled.result, "base64")),
        clearProgram: new Uint8Array(Buffer.from(compiledClear.result, "base64")),
        onComplete: 0,
      });

      let signedTxn = await wallet.signTransaction(txn.toByte());
      console.log(signedTxn)
      let response = await algodClient.sendRawTransaction(signedTxn.blob).do();
      window.reachLog += ("\n" + "TXN ID: " + response.txId)
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
    getContracts();
    setInterval(function () {
      let textarea = document.getElementById('log');
      textarea.value = window.reachLog
      textarea.scrollTop = textarea.scrollHeight;
    }, 200)
  }

  loadTeal = async () => {
    let contents = await document.getElementById('file-input').files[0].text();
    tealContracts.custom.program = contents
    let clearProgram = `#pragma version 4
int 1
`;
    tealContracts.custom.clearProgram = clearProgram
    this.selectTeal({ value: "custom" })

    document.getElementById("appArgs").style.display = "block"
    custom = true
  }

  selectRole = (event) => {
    role = event.value;
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
        <p>Currently, TEAL contract creation has minimal support for client-only JavaScript, the <i>lingua franca</i> of the decentralized online world. Creating and deploying smart contracts requires downloading and running numerous third-party software packages, using esoteric single-use languages and working with intimidating command line tools. in In order to boost decentralization and broad adoption, we are working towards complete browser-only backend-free  solutions to creation, deployment and integration.</p>
        <h2>Instructions</h2>
        <p>After connecting to your wallet, select a contract and deploy! The Reach Button will both deploy the contract and run the "frontend" code below, with your address simulating all participant interactions (with the exception of the Morra Game, which we working to adapt for simultaneously interaction between multiple real-world participants). For real-world use, the code specific to each participant must be isolated from this code and run with different accounts. Exercise extreme caution with mainNet, as your account may be drained. On testnet, attempting to create more than 10 smart contracts will fail. Other failures will be triggered by not having your wallet set to testnet, or not having enough funds. To fund your testnet account, simply visit: <Link href="https://testnet.algoexplorer.io/dispenser" target="_blank" title="Algo Dispenser">
          the AlgoExplorer Dispenser
        </Link></p>
        <Flash my={3} variant="danger">
          WARNING!!! Reach code must run to completion, at which point a prompt will appear to allow the deletion of the smart contract. Due to the nature of the Reach code, a significant amount of time may pass while it appears nothing is happening. Please be patient and sign all transactions!
        </Flash>
        <table><thead><th>Modules</th><th>Log</th></thead>
        
          <tr class="pipeline-shell"><td valign="top">
            <PipelineShell>
              <div class="selectorbox">
              <Select       styles={customStyles} width='200px' menuColor='red' id="net" placeholder="Select Net..."  onChange={this.toggleNet} options={[
                { value: 'TestNet', label: 'TestNet' }
              ]}></Select>
              
              <br></br>
              <Button onClick={() => stdlib.getDefaultAccount().then(data2 => {
                let address = data2.networkAccount.addr;
                acct = data2;
                this.setState({ address: address })
                sender = address
                console.log(acct);
              })
              }>Connect</Button>
              </div>
              <br></br>
              <div class="selectorbox">
              <h5>{this.state.address}</h5>
              <Link href="https://github.com/reach-sh/reach-lang/tree/master/examples" target="_blank" >Github Source</Link>
              <br></br><br></br>
              <Select placeholder="Select Reach contract..." styles={customStyles} onChange={this.select} options={[
                { value: 'Reach Contracts', label: 'Reach Contracts' },
                { value: 'Morra Game', label: 'Morra Game' },
                { value: 'Popularity Contest', label: 'Popularity Contest' },
                { value: 'Dan Storage', label: 'Dan Storage' },
                { value: 'NFT Auction', label: 'NFT Auction' }
              ]}></Select>
              <div id="roles" style={{ display: "none" }}>
                <Select styles={customStyles} placeholder="Select role..." onChange={this.selectRole} options={[
                  { value: 'Deployer', label: 'Deployer & Participant' },
                  { value: 'Participant', label: 'Participant' },
                ]}></Select>
                <Input type="number" placeholder="App Id..." onChange={this.inputAppId}></Input>
              </div>
              <br></br>
              <Button onClick={this.deploy}>Deploy & Run Reach</Button>
              <div align="left">
                <p><b>Description: </b>{this.state.description}</p>
                <p><b>Participants: </b>{this.state.participants}</p>
              </div>
              <br></br>
              <Button onClick={this.attach} style={{ display: "none" }}>Attach</Button><br></br>
              </div>
              <br></br>
              <div class="selectorbox">
              <Link href="https://github.com/algorand/smart-contracts/tree/master/devrel" target="_blank" >Github Source</Link>
              <br></br><br></br>
              <Select placeholder="Select TEAL contract..." styles={customStyles} onChange={this.selectTeal} options={[
                { value: 'TEAL Contracts', label: 'TEAL Contracts' },
                { value: 'Permissionless Voting', label: 'Permissionless Voting' },
                { value: 'Permissioned Voting', label: 'Permissioned Voting' }
              ]}></Select>
              <br></br>
              <Button onClick={this.deployTeal}>Deploy TEAL Contract</Button>
              <input id="file-input" type="file" onChange={this.loadTeal} style={{ display: " none" }} />
              <div id="appArgs" style={{ display: "none" }}>
                <label>Local Byte Slices</label><input id="lbyte"></input><br></br>
                <label>Global Byte Slices</label><input id="gbyte"></input><br></br>
                <label>Local Integers</label><input id="lint"></input><br></br>
                <label>Global Integers</label><input id="gint"></input><br></br>
                <p>App Args</p>
                <textarea id="argInput">{"[\n]"}</textarea>
              </div>
              <br></br><br></br>
              <Button className="btn-outlinez" onClick={() => document.getElementById('file-input').click()}>Load Custom</Button>
              <p></p>

              </div>
              <br></br><br></br><div class="selectorbox"><Input className="pipeline-input" type="number" onChange={this.inputAppId} placeholder="app id"></Input><Button onClick={() => { deleteApp(appId) }}>Delete TEAL Contract</Button></div>
            </PipelineShell>
            
          </td>
            <td valign="top">
              <textarea style={{ "background-color": "black", "color": "yellow" }} id="log" readonly rows="65" cols="50">
                Testing
                hello
              </textarea>
            </td></tr>
        </table>
        <table class="teal-table" align-contents="center">
          <thead><th>TEAL Code</th><th>Frontend Code</th></thead>
          <tbody>
            <tr>
              <td valign="top" maxWidth="%50">
               
                  <CopyBlock
                    text={this.state.teal}
                    language={"cpp"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                    codeBlock
                    customStyle={{
                      width: "50%",
                      height: 'auto',
                      overflow: 'false',
                      align: "left",
                      background: "#fff",
                      backgroundColor: "#fff",
                      borderColor: "#D7DAE0",
                    }}
                  />
          
              </td>
              <td valign="top">
                <div align="left">
                  <CopyBlock
                    text={this.state.frontendText}
                    language={"js"}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                    codeBlock
                    customStyle={{
                      width: "50%",
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
