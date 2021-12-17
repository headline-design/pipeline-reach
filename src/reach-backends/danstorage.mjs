// Automatically generated with Reach 0.1.7 (d2352c9e)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (d2352c9e)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc3, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Oracle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  
  const v152 = stdlib.protect(ctc0, interact.i, 'for Oracle\'s interact field i');
  
  const v154 = 'Deploying...';
  stdlib.protect(ctc1, await interact.log(v154), {
    at: './index.rsh:1:39:application',
    fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:19:22:application call to "liftedInteract" (defined at: ./index.rsh:19:22:application)'],
    msg: 'log',
    who: 'Oracle'
    });
  
  const v157 = stdlib.lt(v152, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, 20));
  stdlib.assert(v157, {
    at: './index.rsh:22:11:application',
    fs: ['at ./index.rsh:20:14:application call to [unknown function] (defined at: ./index.rsh:20:18:function exp)'],
    msg: null,
    who: 'Oracle'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v152],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v159], secs: v161, time: v160, didSend: v30, from: v158 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v163 = stdlib.lt(v159, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, 20));
      stdlib.assert(v163, {
        at: './index.rsh:25:10:application',
        fs: [],
        msg: null,
        who: 'Oracle'
        });
      const v165 = '                                                                ';
      const v226 = [v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165];
      const v227 = v226;
      const v228 = stdlib.checkedBigNumberify('./index.rsh:27:56:decimal', stdlib.UInt_max, 0);
      const v229 = v160;
      
      if (await (async () => {
        const v234 = stdlib.lt(v228, v159);
        
        return v234;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v159], secs: v161, time: v160, didSend: v30, from: v158 } = txn1;
  ;
  const v163 = stdlib.lt(v159, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, 20));
  stdlib.assert(v163, {
    at: './index.rsh:25:10:application',
    fs: [],
    msg: null,
    who: 'Oracle'
    });
  const v165 = '                                                                ';
  const v226 = [v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165, v165];
  let v227 = v226;
  let v228 = stdlib.checkedBigNumberify('./index.rsh:27:56:decimal', stdlib.UInt_max, 0);
  let v229 = v160;
  
  while (await (async () => {
    const v234 = stdlib.lt(v228, v159);
    
    return v234;})()) {
    const v237 = stdlib.protect(ctc2, await interact.getWord(v227), {
      at: './index.rsh:32:44:application',
      fs: ['at ./index.rsh:31:16:application call to [unknown function] (defined at: ./index.rsh:31:20:function exp)'],
      msg: 'getWord',
      who: 'Oracle'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v158, v159, v227, v228, v237],
      evt_cnt: 1,
      funcNum: 2,
      lct: v229,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v239], secs: v241, time: v240, didSend: v137, from: v238 } = txn2;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v243 = stdlib.addressEq(v158, v238);
        stdlib.assert(v243, {
          at: './index.rsh:34:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Oracle'
          });
        const v245 = stdlib.Array_set(v227, v228, v239);
        
        const v247 = stdlib.add(v228, stdlib.checkedBigNumberify('./index.rsh:37:40:decimal', stdlib.UInt_max, 1));
        const cv227 = v245;
        const cv228 = v247;
        const cv229 = v240;
        
        await (async () => {
          const v227 = cv227;
          const v228 = cv228;
          const v229 = cv229;
          
          if (await (async () => {
            const v234 = stdlib.lt(v228, v159);
            
            return v234;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc3, ctc0, ctc4, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v239], secs: v241, time: v240, didSend: v137, from: v238 } = txn2;
    ;
    const v243 = stdlib.addressEq(v158, v238);
    stdlib.assert(v243, {
      at: './index.rsh:34:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const v245 = stdlib.Array_set(v227, v228, v239);
    stdlib.protect(ctc1, await interact.log(v245), {
      at: './index.rsh:1:39:application',
      fs: ['at ./index.rsh:1:21:application call to [unknown function] (defined at: ./index.rsh:1:25:function exp)', 'at ./index.rsh:36:24:application call to "liftedInteract" (defined at: ./index.rsh:36:24:application)'],
      msg: 'log',
      who: 'Oracle'
      });
    
    const v247 = stdlib.add(v228, stdlib.checkedBigNumberify('./index.rsh:37:40:decimal', stdlib.UInt_max, 1));
    const cv227 = v245;
    const cv228 = v247;
    const cv229 = v240;
    
    v227 = cv227;
    v228 = cv228;
    v229 = cv229;
    
    continue;
    
    }
  return;
  
  
  };
export const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// "CheckPay"
// "./index.rsh:24:10:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:24:10:dot"
// "[]"
// Nothing
// "./index.rsh:25:10:application"
// "[]"
load 255
int 20
<
assert
byte base64(ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA==)
store 254
txn Sender
load 255
itob
concat
load 254
dup
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
load 254
concat
int 8
bzero
concat
global Round
itob
concat
b loopBody1
l0_afterHandler0:
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l3_afterHandler2
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
byte base64(Aw==)
app_global_get
concat
byte base64(BA==)
app_global_get
concat
byte base64(BQ==)
app_global_get
concat
byte base64(Bg==)
app_global_get
concat
byte base64(Bw==)
app_global_get
concat
byte base64(CA==)
app_global_get
concat
byte base64(CQ==)
app_global_get
concat
byte base64(Cg==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
int 1280
extract3
store 253
dup
int 1320
int 8
extract3
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 251
pop
// "CheckPay"
// "./index.rsh:34:12:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:34:12:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
itob
concat
load 253
int 0
int 64
load 252
*
substring3
load 251
concat
load 253
int 64
dup
load 252
*
+
int 1280
substring3
concat
load 252
int 1
+
itob
concat
global Round
itob
concat
b loopBody1
l3_afterHandler2:
int 0
assert
loopBody1:
dup
int 0
int 1280
extract3
store 255
dup
int 1280
int 8
extract3
btoi
store 254
dup
int 1288
int 8
extract3
btoi
store 253
pop
dup
extract 0 32
store 252
dup
int 32
extract_uint64
store 251
pop
load 254
load 251
<
bz l4_ifF
load 252
load 251
itob
concat
load 255
concat
load 254
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 127
app_global_put
byte base64(Ag==)
dig 1
extract 254 127
app_global_put
byte base64(Aw==)
dig 1
int 381
int 127
extract3
app_global_put
byte base64(BA==)
dig 1
int 508
int 127
extract3
app_global_put
byte base64(BQ==)
dig 1
int 635
int 127
extract3
app_global_put
byte base64(Bg==)
dig 1
int 762
int 127
extract3
app_global_put
byte base64(Bw==)
dig 1
int 889
int 127
extract3
app_global_put
byte base64(CA==)
dig 1
int 1016
int 127
extract3
app_global_put
byte base64(CQ==)
dig 1
int 1143
int 127
extract3
app_global_put
byte base64(Cg==)
dig 1
int 1270
int 58
extract3
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l4_ifF:
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l5_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 11,
  stateSize: 1328,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ed238038062000ed283398101604081905262000026916200047c565b600080554360035562000038620002aa565b604080518351815260208085015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16200008434156007620001cc565b6020820151516200009a906014116008620001cc565b80517f2020202020202020202020202020202020202020202020202020202020202020908190528151602090810191909152815181830180519190915282518151909201919091528151815160400152815181516060015281518151608001528151815160a001528151815160c001528151815160e00152815181516101000152815181516101200152815181516101400152815181516101600152815181516101800152815181516101a00152815181516101c00152815181516101e0015281518151610200015281518151610220015281518151610240015281519051610260015262000188620002da565b805133905260208084015151825182015282810151818301805191909152805160009201919091525143604090910152620001c381620001f6565b505050620005c4565b81620001f25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80600001516020015181602001516020015110156200028f576200021962000305565b8151516001600160a01b03168152815160209081015181830152808301805151604080850191909152905182015160608401526003600055436001555162000264918391016200051e565b604051602081830303815290604052600290805190602001906200028a92919062000333565b505050565b60008080556001819055620002a790600290620003c2565b50565b604080516080810182526000918101828152606082019290925290815260208101620002d562000401565b905290565b604080516080810182526000918101828152606082019290925290815260208101620002d56200043c565b60408051608081018252600080825260208201529081016200032662000401565b8152602001600081525090565b828054620003419062000587565b90600052602060002090601f016020900481019282620003655760008555620003b0565b82601f106200038057805160ff1916838001178555620003b0565b82800160010185558215620003b0579182015b82811115620003b057825182559160200191906001019062000393565b50620003be92915062000465565b5090565b508054620003d09062000587565b6000825580601f10620003e1575050565b601f016020900490600052602060002090810190620002a7919062000465565b6040518061028001604052806014905b6040805180820190915260008082526020820152815260200190600190039081620004115790505090565b60405180606001604052806200045162000401565b815260200160008152602001600081525090565b5b80821115620003be576000815560010162000466565b60008183036040808212156200049157600080fd5b80518082016001600160401b038082118383101715620004c157634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620004db57600080fd5b8351945060208501915084821081831117156200050857634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b81516001600160a01b0316815260208083015181830152604080840151610560840192919081850160005b6014811015620005715782518051835285015185830152918401919083019060010162000549565b5050505050606083015161054083015292915050565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b6108fe80620005d46000396000f3fe6080604052600436106100405760003560e01c806316697f16146100495780631e93b0f11461005c5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b6100476100573660046105e5565b6100b8565b34801561006857600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008c57600080fd5b5060015461006d565b3480156100a157600080fd5b506100aa610277565b6040516100779291906105fd565b6100c8600360005414600b610314565b6100e2813515806100db57506001548235145b600c610314565b6000808055600280546100f49061065a565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061065a565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610715565b604080518435815260208086013590820152848201358183015290519192507fae42ef93ac68ebbff6b40c4aea42b9ca92ece40435cdcb681bc52ffb796cfdc5919081900360600190a16101db34156009610314565b80516101f3906001600160a01b03163314600a610314565b6101fb610457565b815181516001600160a01b03909116905260208083015182518201526040830151606084015161023c92610237903688900388019088016107d0565b61033d565b602082015152606082015161025390600190610818565b60208083018051909101919091525143604090910152610272816103b1565b505050565b60006060600054600280805461028c9061065a565b80601f01602080910402602001604051908101604052809291908181526020018280546102b89061065a565b80156103055780601f106102da57610100808354040283529160200191610305565b820191906000526020600020905b8154815290600101906020018083116102e857829003601f168201915b50505050509050915091509091565b816103395760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b610345610485565b60005b60148110156103915784816014811061036357610363610830565b602002015182826014811061037a5761037a610830565b60200201528061038981610846565b915050610348565b50818184601481106103a5576103a5610830565b60200201529392505050565b806000015160200151816020015160200151101561043e576103d16104bf565b8151516001600160a01b03168152815160209081015181830152808301805151604080850191909152905182015160608401526003600055436001555161041a91839101610861565b604051602081830303815290604052600290805190602001906102729291906104eb565b600080805560018190556104549060029061056f565b50565b6040805160808101825260009181018281526060820192909252908152602081016104806105a9565b905290565b6040518061028001604052806014905b60408051808201909152600080825260208201528152602001906001900390816104955790505090565b60408051608081018252600080825260208201529081016104de610485565b8152602001600081525090565b8280546104f79061065a565b90600052602060002090601f016020900481019282610519576000855561055f565b82601f1061053257805160ff191683800117855561055f565b8280016001018555821561055f579182015b8281111561055f578251825591602001919060010190610544565b5061056b9291506105d0565b5090565b50805461057b9061065a565b6000825580601f1061058b575050565b601f01602090049060005260206000209081019061045491906105d0565b60405180606001604052806105bc610485565b815260200160008152602001600081525090565b5b8082111561056b57600081556001016105d1565b6000606082840312156105f757600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561063157858101830151858201606001528201610615565b81811115610643576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061066e57607f821691505b602082108114156105f757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156106c8576106c861068f565b60405290565b604051610280810167ffffffffffffffff811182821017156106c8576106c861068f565b6040805190810167ffffffffffffffff811182821017156106c8576106c861068f565b6000610560828403121561072857600080fd5b6107306106a5565b82516001600160a01b038116811461074757600080fd5b8152602083810151818301526040605f8501861361076457600080fd5b61076c6106ce565b8061054087018881111561077f57600080fd5b8388015b818110156107bc5784818b03121561079b5760008081fd5b6107a36106f2565b8151815286820151878201528452928501928401610783565b509285015250516060830152509392505050565b6000604082840312156107e257600080fd5b6107ea6106f2565b82358152602083013560208201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561082b5761082b610802565b500190565b634e487b7160e01b600052603260045260246000fd5b600060001982141561085a5761085a610802565b5060010190565b81516001600160a01b0316815260208083015181830152604080840151610560840192919081850160005b60148110156108b25782518051835285015185830152918401919083019060010161088c565b505050505060608301516105408301529291505056fea26469706673582212202bc3dc82f67ccb873cfa34119772dfb54de2649551600abd413a1de54b25d82764736f6c63430008090033`,
  BytecodeLen: 3794,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Oracle": Oracle
  };
export const _APIs = {
  };
