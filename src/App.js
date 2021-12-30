//import './App.css';
import React, { Component } from 'react';
import { loadStdlib } from '@reach-sh/stdlib'
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
import algosdk from 'algosdk'
import { CopyBlock, dracula } from 'react-code-blocks';
import launchToken from '@reach-sh/stdlib/launchToken.mjs';
import { Button, Select, PipelineShell, Input, Link, Flash, Textarea, AlgoAddress } from 'pipeline-ui'

var role = "Deployer"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "d1d1fa" : state.isFocused? "#e2e2fb" : "#ffffff00",
    color: state.isSelected ? 'black' : 'rgb(51, 54, 61)',
    cursor: "pointer",

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
const reachNames = ["danstorage", "morra", "nftauction", "popularitycontest"]
const reachCNames = ["Dan Storage", "Morra Game", "NFT Auction", "Popularity Contest"]

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
  for (let i = 0; i < reachNames.length; i++) {
    let name = reachNames[i]
    let data = await fetch("reach-frontends/" + name + "Front.txt")
    contracts[reachCNames[i]].text = await data.text()
  }
  //document.getElementById("modal-background").style.display = "none"
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
      frontendText: "",
      showButton: "Hide TEAL Code"
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
    if (event.value === "NFT Auction") {alert("WARNING! This demo Reach contract will not run to completion. Only use with a disposable Algorand address.")}
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

  handleShowTeal = () => {
    if (this.state.showButton === "Show TEAL Code") {
      this.setState({ showButton: "Hide TEAL Code" })
      document.getElementById("tealdiv").style.display = "block"
    }
    else {
      this.setState({ showButton: "Show TEAL Code" })
      document.getElementById("tealdiv").style.display = "none"
    }
  }


  render() {
    return (
      <div className="app" align="center">
        {/*}<div className="modal-background" id="modal-background"><div className="flexy">
          <div className="loader" id="loader"></div><h1>Loading files...</h1></div>
          
    </div>*/}
    <div className="boiler-h1">
    <h2 className="bolierplate-h2-1">TEAL</h2>
            <h2 className="bolierplate-h2">Algorand smart contract boilerplate</h2></div>
        <div className="flexible-h1"><h1 className="bolierplate-h1">PIPELINE</h1>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="Capa_1"
      width="70"
      height="70"
      viewBox="0 0 510 510"
    >
      <linearGradient id="lg1">
        <stop offset="0" stopColor="rgb(124 124 238)"></stop>
        <stop offset="1" stopColor="rgb(210 210 249)"></stop>
      </linearGradient>
      <linearGradient
        id="SVGID_1_"
        x1="126.402"
        x2="395.506"
        y1="126.402"
        y2="395.506"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg1"
      ></linearGradient>
      <linearGradient
        id="SVGID_2_"
        x1="430.795"
        x2="65.132"
        y1="430.795"
        y2="65.132"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg1"
      ></linearGradient>
      <linearGradient id="lg2">
        <stop offset="0" stopColor="#4c8df1" stopOpacity="0"></stop>
        <stop offset="0.563" stopColor="#466cc8" stopOpacity="0.563"></stop>
        <stop offset="1" stopColor="#4256ac"></stop>
      </linearGradient>
      <linearGradient
        id="SVGID_3_"
        x1="277.483"
        x2="101.109"
        y1="331.872"
        y2="244.184"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg2"
      ></linearGradient>
      <linearGradient
        id="SVGID_4_"
        x1="418.698"
        x2="277.698"
        y1="400.245"
        y2="332.245"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg2"
      ></linearGradient>
      <linearGradient id="lg3">
        <stop offset="0" stopColor="#e3e5e4"></stop>
        <stop offset="1" stopColor="#cbd0e4"></stop>
      </linearGradient>
      <linearGradient
        id="SVGID_5_"
        x1="250.536"
        x2="327.067"
        y1="408.464"
        y2="484.995"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg3"
      ></linearGradient>
      <linearGradient
        id="SVGID_6_"
        x1="292.254"
        x2="241.588"
        y1="436.058"
        y2="321.392"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#cbd0e4" stopOpacity="0"></stop>
        <stop offset="1" stopColor="#6a7d83"></stop>
      </linearGradient>
      <linearGradient
        id="SVGID_7_"
        x1="207.983"
        x2="375.569"
        y1="208.017"
        y2="375.603"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg3"
      ></linearGradient>
      <linearGradient
        id="SVGID_8_"
        x1="326.249"
        x2="136.247"
        y1="297.751"
        y2="107.748"
        gradientUnits="userSpaceOnUse"
        xlinkHref="#lg3"
      ></linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M445.539 255c0-7.504-.439-14.904-1.286-22.18-1.09-9.356 2.617-18.633 9.698-24.845l29.15-25.574c9.894-8.68 12.117-23.215 5.271-34.456L457.195 96.76c-6.846-11.241-20.782-15.934-33.033-11.125l-36.338 14.262c-8.795 3.452-18.68 2.243-26.515-3.036a190.21 190.21 0 00-26.614-14.976c-8.558-3.947-14.703-11.754-16.326-21.037l-6.717-38.422C309.385 9.46 298.128 0 284.966 0h-59.932c-13.162 0-24.419 9.46-26.685 22.425l-6.717 38.422c-1.623 9.283-7.768 17.091-16.326 21.037a190.21 190.21 0 00-26.614 14.976c-7.836 5.278-17.721 6.487-26.515 3.036L85.838 85.634c-12.252-4.808-26.187-.115-33.033 11.125l-31.176 51.185c-6.846 11.241-4.623 25.776 5.271 34.456l29.15 25.574c7.081 6.212 10.788 15.489 9.698 24.845a191.76 191.76 0 000 44.36c1.09 9.356-2.617 18.633-9.698 24.845L26.9 327.598c-9.894 8.68-12.117 23.215-5.271 34.456l31.176 51.185c6.846 11.241 20.782 15.934 33.033 11.125l36.338-14.262c8.795-3.452 18.68-2.242 26.515 3.036a190.21 190.21 0 0026.614 14.976c8.558 3.947 14.703 11.754 16.326 21.037l6.717 38.422C200.615 500.54 211.872 506 225.034 506h59.932c13.162 0 24.419-5.46 26.685-18.425l6.717-38.422c1.623-9.283 7.768-17.091 16.326-21.037a190.21 190.21 0 0026.614-14.976c7.836-5.278 17.721-6.487 26.515-3.036l36.338 14.262c12.252 4.809 26.187.115 33.033-11.125l31.176-51.185c6.846-11.241 4.623-25.776-5.271-34.456l-29.15-25.574c-7.081-6.212-10.788-15.489-9.698-24.845A191.11 191.11 0 00445.539 255z"
      ></path>
      <circle cx="255" cy="255" r="155.751" fill="url(#SVGID_2_)"></circle>
      <path
        fill="url(#SVGID_3_)"
        d="M284.966 510c13.162 0 24.419-9.46 26.685-22.425l6.717-38.422c1.623-9.283 7.768-17.091 16.326-21.037a190.21 190.21 0 0026.614-14.976c7.836-5.278 17.721-6.487 26.515-3.036l36.338 14.262c12.252 4.809 26.187.115 33.033-11.125l31.176-51.185c6.846-11.241 4.623-25.776-5.271-34.456l-29.15-25.574c-7.081-6.212-10.788-15.489-9.698-24.845.508-4.362.85-8.774 1.058-13.221l-95.998-95.998a129.034 129.034 0 00-19.782-17.453c-5.799-4.143-13.861.054-13.861 7.181v84.713a28.832 28.832 0 01-10.645 22.357c-1.257-1.208-111.767-111.526-112.688-112.64-2.764-3.342-7.893-2.452-11.935.439-32.6 23.323-51.818 59.527-51.741 102.678.066 37.151 13.861 70.537 39.073 93.911l27.6 27.698 1 64.446c0 15.516-.657 31.002 2.015 46.286C200.615 500.54 211.872 510 225.034 510z"
      ></path>
      <path
        fill="url(#SVGID_4_)"
        d="M488.37 362.05l-31.17 51.19c-6.85 11.24-20.79 15.93-33.04 11.13l-36.34-14.27c-8.79-3.45-18.68-2.24-26.51 3.04a190.615 190.615 0 01-26.62 14.98c-8.55 3.94-14.7 11.75-16.32 21.03l-6.72 38.43c-2.27 12.96-13.52 19.42-26.68 19.42h-59.94c-6.58 0-12.68-2.36-17.42-6.35-2.42-2.03-4.48-1.48-6.07-4.25 3.99 2.3 8.61 3.6 13.49 3.6h59.94c13.16 0 24.41-9.46 26.68-22.42 1.33-7.64 2.34-15.34 3.01-23.06s1.01-15.48 1.01-23.23v-73.17c40.28-21.65 67.67-64.19 67.67-113.12 0-32.85-12.34-62.82-32.65-85.52 3.01 2.68 5.88 5.51 8.62 8.48l96 96c-.21 4.45-.55 8.86-1.06 13.22-1.09 9.36 2.62 18.63 9.7 24.85l29.15 25.57c9.89 8.68 12.12 23.21 5.27 34.45z"
      ></path>
      <path
        fill="url(#SVGID_5_)"
        d="M311.651 487.575a268.77 268.77 0 004.015-46.286V335.333H194.333v105.956a268.77 268.77 0 004.015 46.286C200.615 500.54 211.872 510 225.034 510h59.932c13.162 0 24.419-9.46 26.685-22.425z"
      ></path>
      <path
        fill="url(#SVGID_6_)"
        d="M194.333 368.158l117.613 117.613a268.731 268.731 0 003.72-44.482V335.333H194.333z"
      ></path>
      <path
        fill="url(#SVGID_7_)"
        d="M383.34 255c0 70.88-57.459 128.339-128.339 128.34S126.786 326.114 126.66 255.234c-.077-43.151 21.141-81.355 53.741-104.678 5.826-4.168 13.928-.028 13.928 7.135v84.71a28.84 28.84 0 0014.418 24.974l31.833 18.38a28.837 28.837 0 0028.839 0l31.833-18.38a28.837 28.837 0 0014.418-24.974v-84.713c0-7.126 8.062-11.323 13.861-7.181 32.58 23.277 53.809 61.408 53.809 104.493z"
      ></path>
      <path
        fill="url(#SVGID_8_)"
        d="M160.023 265.81a45.143 45.143 0 0022.571 39.095l49.833 28.773a45.144 45.144 0 0045.146 0l49.833-28.773a45.143 45.143 0 0022.571-39.095V168.7a129.086 129.086 0 00-20.446-18.192c-5.799-4.143-13.861.054-13.861 7.181v84.713a28.84 28.84 0 01-14.418 24.974l-31.833 18.38a28.837 28.837 0 01-28.839 0l-31.833-18.38a28.837 28.837 0 01-14.418-24.974v-84.71c0-7.164-8.102-11.303-13.928-7.135a129.056 129.056 0 00-20.379 18.142v97.111z"
      ></path>
    </svg>
<h1 className="bolierplate-h1-2">REACH</h1></div><div className="boiler-border"></div>

        <h1 className="boiler-h1-2">What is a "smart contract"?</h1>
        <p align="justify">A smart contract is a relatively simplistic TEAL (Transaction Execution Approval Language) program or "app" that exists on the blockchain network. It stores a small amount of global and local data and evaluates transactions to either approve or dissapprove them.</p>
        <h2>How can people interact with my smart contract?</h2>
        <p align="justify">After "opting in" to the smart contract, they can send an "app call" transaction to the Algorand network along with any relevant "arguments" or other transaction. The number of transactions in each group and their formats will vary between contracts. When using Reach, the exported "participants" are functions that are called to initiate each transaction. The user function takes the arguments of userAddress.attach(window.backend, ctcCreator.getInfo()); and an "interact" object. The need for a "backend" can be easily and completely eliminated by obtaining and sharing the value of ctcCreator.getInfo() app id by other means.</p>
        <h2>Why use this tool?</h2>
        <p align="justify">Currently, TEAL contract creation has minimal support for client-only JavaScript, the <i>lingua franca</i> of the decentralized online world. Creating and deploying smart contracts requires downloading and running numerous third-party software packages, using esoteric single-use languages and working with intimidating command line tools. in In order to boost decentralization and broad adoption, we are working towards complete browser-only backend-free  solutions to creation, deployment and integration.</p>
        <h2>Instructions</h2>
        <p align="justify">After connecting to your wallet, select a contract and deploy! The Reach Button will both deploy the contract and run the "frontend" code below, with your address simulating all participant interactions (with the exception of the Morra Game, which we working to adapt for simultaneously interaction between multiple real-world participants). For real-world use, the code specific to each participant must be isolated from this code and run with different accounts. Exercise extreme caution with mainNet, as your account may be drained. On testnet, attempting to create more than 10 smart contracts will fail. Other failures will be triggered by not having your wallet set to testnet, or not having enough funds. To fund your testnet account, simply visit: <Link href="https://testnet.algoexplorer.io/dispenser" target="_blank" title="Algo Dispenser">
          the AlgoExplorer Dispenser
        </Link></p>
        <Flash my={3} variant="danger">
          WARNING!!! Reach code must run to completion, at which point a prompt will appear to allow the deletion of the smart contract. Due to the nature of the Reach code, a significant amount of time may pass while it appears nothing is happening. Please be patient and sign all transactions!
        </Flash>
        <table><thead></thead><tbody>
          <tr className="breakpoint-1" ><td valign="top" className="module-left"><p className="prop-label">Dev Environment</p>
           
            <div>
              <div className="selectorbox">
                <Select isSearchable={false} styles={customStyles} width='200px' menuColor='red' id="net" placeholder="Select Net..." onChange={this.toggleNet} options={[
                  { value: 'TestNet', label: 'TestNet' }
                ]}></Select>

                <br></br>
                <Button className="furby" onClick={() => stdlib.getDefaultAccount().then(data2 => {
                  let address = data2.networkAccount.addr;
                  acct = data2;
                  this.setState({ address: address })
                  sender = address
                  console.log(acct);
                })
                }>Connect</Button>
                <AlgoAddress address={this.state.address}></AlgoAddress>
              </div>
              <br></br>
              <p className="prop-label">Reach Contracts</p>
              <div className="selectorbox">
                <Link href="https://github.com/reach-sh/reach-lang/tree/master/examples" target="_blank" >Github Source</Link>
                <br></br><br></br>
                <Select isSearchable={false} placeholder="Select Reach contract..." styles={customStyles}  onChange={this.select} options={[
                  { value: 'Reach Contracts', label: 'Reach Contracts' },
                  { value: 'Morra Game', label: 'Morra Game' },
                  { value: 'Popularity Contest', label: 'Popularity Contest' },
                  { value: 'Dan Storage', label: 'Dan Storage' },
                  { value: 'NFT Auction', label: 'NFT Auction' }
                ]}></Select>
                <div id="roles" style={{ display: "none" }}>
                  <Select isSearchable={false} styles={customStyles} placeholder="Select role..." onChange={this.selectRole} options={[
                    { value: 'Deployer', label: 'Deployer & Participant' },
                    { value: 'Participant', label: 'Participant' },
                  ]}></Select>
                  <Input className="pipeline-input" type="number" placeholder="App Id..." onChange={this.inputAppId}></Input>
                </div>
                <br></br>
                <Button className="furby" onClick={this.deploy}>Deploy & Run Reach</Button>
                <br></br>
                <Button className="furby" onClick={this.attach} style={{ display: "none" }}>Attach</Button><br></br>
              </div>
              <br></br>
              <p className="prop-label">TEAL Contracts</p>
              <div className="selectorbox">
                <Link href="https://github.com/algorand/smart-contracts/tree/master/devrel" target="_blank" >Github Source</Link>
                <br></br><br></br>
                <Select isSearchable={false} placeholder="Select TEAL contract..." styles={customStyles} onChange={this.selectTeal} options={[
                  { value: 'TEAL Contracts', label: 'TEAL Contracts' },
                  { value: 'Permissionless Voting', label: 'Permissionless Voting' },
                  { value: 'Permissioned Voting', label: 'Permissioned Voting' }
                ]}></Select>
                <br></br>
                <div id="appArgs" style={{ display: "none", }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input placeholder="Local Byte Slices" className="pipeline-input" id="lbyte"></input>
                    <input placeholder="Global Byte Slices" className="pipeline-input" id="gbyte"></input>
                    <input placeholder="Local Integers" className="pipeline-input" id="lint"></input>
                    <input placeholder="Global Integers" className="pipeline-input" id="gint"></input>
                    <p>App Args</p>
                    <textarea placeholder="Global Integers" className="pipeline-input" defaultValue={"[\n]"} id="argInput"></textarea>
                  </div>
                </div>
                <Button className="furby" onClick={this.deployTeal}>Deploy TEAL Contract</Button>
                <input id="file-input" type="file" onChange={this.loadTeal} style={{ display: " none" }} />


                <br></br><br></br>
                <Button className="btn-outlinez" onClick={() => document.getElementById('file-input').click()}>Load Custom</Button>
                <p></p>

              </div>
              <br></br><br></br><p className="prop-label">Delete Contract</p><div className="selectorbox"><Input className="pipeline-input" type="number" onChange={this.inputAppId} placeholder="app id"></Input><Button className="furby" onClick={() => { deleteApp(appId) }}>Delete TEAL Contract</Button></div>
            </div>
            <br></br>
            <Button onClick={this.handleShowTeal}>{this.state.showButton}</Button>
            <div id="tealdiv" style={{ display: "block" }}>
              <p className="prop-label">TEAL Code</p>
              <CopyBlock
                text={this.state.teal}
                language={"cpp"}
                showLineNumbers={true}
                wrapLines
                theme={dracula}
                codeBlock
                customStyle={{
                  height: 'auto',
                  width: "100%",
                  overflow: 'auto',
                  align: "left",
                  padding: "unset",
                  background: "#fff",
                  textAlign: "left",
                  backgroundColor: "#fff",
                  borderColor: "#D7DAE0",
                }}
              />
            </div>

          </td>
            <td valign="top" className="module-right">
              <p className="prop-label">Contract Details</p>
              <div className="selectorbox">
                <Link href="https://github.com/reach-sh/reach-lang/tree/master/examples" target="_blank" >Github Source</Link>
                <br></br>
                <div id="roles" style={{ display: "none" }}>
                  <Select isSearchable={false} styles={customStyles} placeholder="Select role..." onChange={this.selectRole} options={[
                    { value: 'Deployer', label: 'Deployer & Participant' },
                    { value: 'Participant', label: 'Participant' },
                  ]}></Select>
                </div>
                <br></br>
                <div align="left">
                  <p><b>Description: </b>{this.state.description}</p>
                  <p><b>Participants: </b>{this.state.participants}</p>
                </div>
                <br></br>
              </div>
              <p className="prop-label">Log</p>
              <textarea style={{ "backgroundColor": "black", "color": "yellow", "width": "100%" }} id="log" readOnly rows="65" cols="50">
              </textarea>
              <br></br><br></br>
              <p className="prop-label">Frontend Code</p>
              <CopyBlock
                text={this.state.frontendText}
                language={"js"}
                showLineNumbers={true}
                wrapLines
                theme={dracula}
                codeBlock
                customStyle={{
                  width: "100%",
                  height: 'auto',
                  overflow: 'auto',
                  padding: "unset",
                  textAlign: "left",
                  align: "left",
                  background: "#fff",
                  backgroundColor: "#fff",
                  borderColor: "#D7DAE0",
                }}
              />
            </td>

          </tr>
          </tbody>
        
        </table>
      </div>
    )
  }
}

export default App;
