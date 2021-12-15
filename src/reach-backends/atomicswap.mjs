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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc1, ctc2, ctc2]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc1, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v109 = stdlib.protect(ctc2, await interact.getSwap(), {
    at: './index.rsh:21:77:application',
    fs: ['at ./index.rsh:20:9:application call to [unknown function] (defined at: ./index.rsh:20:13:function exp)'],
    msg: 'getSwap',
    who: 'Alice'
    });
  const v110 = v109[stdlib.checkedBigNumberify('./index.rsh:21:11:array', stdlib.UInt_max, 0)];
  const v111 = v109[stdlib.checkedBigNumberify('./index.rsh:21:11:array', stdlib.UInt_max, 1)];
  const v112 = v109[stdlib.checkedBigNumberify('./index.rsh:21:11:array', stdlib.UInt_max, 2)];
  const v113 = v109[stdlib.checkedBigNumberify('./index.rsh:21:11:array', stdlib.UInt_max, 3)];
  const v114 = v109[stdlib.checkedBigNumberify('./index.rsh:21:11:array', stdlib.UInt_max, 4)];
  const v115 = stdlib.tokenEq(v110, v112);
  const v116 = v115 ? false : true;
  stdlib.assert(v116, {
    at: './index.rsh:22:11:application',
    fs: ['at ./index.rsh:20:9:application call to [unknown function] (defined at: ./index.rsh:20:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v110, v111, v112, v113, v114],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v118, v119, v120, v121, v122], secs: v124, time: v123, didSend: v38, from: v117 } = txn1;
      
      const v125 = stdlib.tokenEq(v118, v120);
      const v126 = v125 ? false : true;
      stdlib.assert(v126, {
        at: './index.rsh:23:5:dot',
        fs: [],
        msg: null,
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v118
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v120
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v118, v119, v120, v121, v122], secs: v124, time: v123, didSend: v38, from: v117 } = txn1;
  const v125 = stdlib.tokenEq(v118, v120);
  const v126 = v125 ? false : true;
  stdlib.assert(v126, {
    at: './index.rsh:23:5:dot',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v117, v118, v119, v120, v121, v122],
    evt_cnt: 0,
    funcNum: 1,
    lct: v123,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:5:dot', stdlib.UInt_max, 0), [[v119, v118]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v130, time: v129, didSend: v46, from: v128 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:25:5:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v119,
        kind: 'to',
        tok: v118
        });
      const v134 = stdlib.addressEq(v117, v128);
      stdlib.assert(v134, {
        at: './index.rsh:25:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v136 = stdlib.add(v129, v122);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v130, time: v129, didSend: v46, from: v128 } = txn2;
  ;
  ;
  const v134 = stdlib.addressEq(v117, v128);
  stdlib.assert(v134, {
    at: './index.rsh:25:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v136 = stdlib.add(v129, v122);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v136],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v117, v118, v119, v120, v121, v136],
      evt_cnt: 0,
      funcNum: 3,
      lct: v129,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v165, time: v164, didSend: v88, from: v163 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v167 = stdlib.addressEq(v117, v163);
        stdlib.assert(v167, {
          at: './index.rsh:33:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v119,
          kind: 'from',
          to: v117,
          tok: v118
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v120
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v118
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc1, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v165, time: v164, didSend: v88, from: v163 } = txn4;
    ;
    const v167 = stdlib.addressEq(v117, v163);
    stdlib.assert(v167, {
      at: './index.rsh:33:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.seeTimeout(), {
      at: './index.rsh:35:45:application',
      fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:23:function exp)'],
      msg: 'seeTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v143, time: v142, didSend: v57, from: v141 } = txn3;
    ;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeTransfer(), {
      at: './index.rsh:41:42:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)'],
      msg: 'seeTransfer',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v118, v119, v120, v121, v122], secs: v124, time: v123, didSend: v38, from: v117 } = txn1;
  const v125 = stdlib.tokenEq(v118, v120);
  const v126 = v125 ? false : true;
  stdlib.assert(v126, {
    at: './index.rsh:23:5:dot',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v130, time: v129, didSend: v46, from: v128 } = txn2;
  ;
  ;
  const v134 = stdlib.addressEq(v117, v128);
  stdlib.assert(v134, {
    at: './index.rsh:25:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v136 = stdlib.add(v129, v122);
  const v140 = stdlib.protect(ctc2, await interact.accSwap(v118, v119, v120, v121), {
    at: './index.rsh:29:46:application',
    fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:13:function exp)'],
    msg: 'accSwap',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v117, v118, v119, v120, v121, v136],
    evt_cnt: 0,
    funcNum: 2,
    lct: v129,
    onlyIf: v140,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:5:dot', stdlib.UInt_max, 0), [[v121, v120]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v143, time: v142, didSend: v57, from: v141 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:30:5:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v121,
        kind: 'to',
        tok: v120
        });
      sim_r.txns.push({
        amt: v121,
        kind: 'from',
        to: v117,
        tok: v120
        });
      sim_r.txns.push({
        amt: v119,
        kind: 'from',
        to: v141,
        tok: v118
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v120
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v118
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v136],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v165, time: v164, didSend: v88, from: v163 } = txn4;
    ;
    const v167 = stdlib.addressEq(v117, v163);
    stdlib.assert(v167, {
      at: './index.rsh:33:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc3, await interact.seeTimeout(), {
      at: './index.rsh:35:45:application',
      fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:23:function exp)'],
      msg: 'seeTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v143, time: v142, didSend: v57, from: v141 } = txn3;
    ;
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.seeTransfer(), {
      at: './index.rsh:41:42:application',
      fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)'],
      msg: 'seeTransfer',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  
  
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
int 40
==
assert
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
dup
int 24
extract_uint64
store 252
dup
int 32
extract_uint64
store 251
pop
// "CheckPay"
// "./index.rsh:23:5:dot"
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
// Nothing
// "./index.rsh:23:5:dot"
// "[]"
load 255
load 253
==
!
assert
// Initializing token
int 100000
dup
bz l2_checkTxnK
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
l2_checkTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CurrentApplicationAddress
itxn_field AssetReceiver
load 255
itxn_field XferAsset
itxn_submit
int 0
l3_makeTxnK:
pop
// Initializing token
int 100000
dup
bz l4_checkTxnK
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
l4_checkTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CurrentApplicationAddress
itxn_field AssetReceiver
load 253
itxn_field XferAsset
itxn_submit
int 0
l5_makeTxnK:
pop
// "CheckPay"
// "./index.rsh:23:5:dot"
// "[]"
txn Sender
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 72
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l6_afterHandler1
pop
// check step
int 1
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
dup
int 64
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:25:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:25:5:dot"
// "[]"
load 253
dup
bz l7_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l7_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:25:5:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
load 250
+
store 249
load 255
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 72
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l6_afterHandler1:
// Handler 2
dup
int 2
==
bz l8_afterHandler2
pop
// check step
int 2
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
dup
int 64
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:30:5:dot"
// "[]"
// "CheckPay"
// "./index.rsh:30:5:dot"
// "[]"
load 251
dup
bz l9_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 252
dig 1
gtxns XferAsset
==
assert
int axfer
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
gtxns AssetReceiver
==
assert
l9_checkTxnK:
pop
load 251
dup
bz l10_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l10_makeTxnK:
pop
load 253
dup
bz l11_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
txn Sender
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l11_makeTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l12_makeTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l13_makeTxnK:
pop
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
l14_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l8_afterHandler2:
// Handler 3
dup
int 3
==
bz l15_afterHandler3
pop
// check step
int 2
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
dup
int 64
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "./index.rsh:33:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:33:9:dot"
// "[]"
load 255
txn Sender
==
assert
load 253
dup
bz l16_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l16_makeTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l17_makeTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l18_makeTxnK:
pop
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
l19_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l15_afterHandler3:
int 0
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
  stateKeys: 1,
  stateSize: 72,
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
                "internalType": "address payable",
                "name": "v118",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v120",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "address payable",
                "name": "v118",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v120",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200103938038062001039833981016040819052620000269162000307565b6000805543600355604080518251815260208084015180516001600160a01b0390811683850152918101518385015292830151166060808301919091528201516080808301919091529091015160a08201527f9025361c8b521c9dc5640ef86562cb12b63ec6a9b05722d126f0154defecc5769060c00160405180910390a1602081015160408101519051620000dc916001600160a01b03918216911614620000d1576001620000d4565b60005b6007620001e3565b620000ea34156008620001e3565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091523380825260208381018051516001600160a01b0390811683860190815282518401516040808801918252845181015184166060808a0191825286518101516080808c01918252975188015160a0808d019182526001600081905543905585519a8b019b909b5295518716938901939093529251928701929092529051909216928401929092525192820192909252905160c082015260e00160405160208183030381529060405260029080519060200190620001da9291906200020d565b505050620003ff565b81620002095760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200021b90620003c2565b90600052602060002090601f0160209004810192826200023f57600085556200028a565b82601f106200025a57805160ff19168380011785556200028a565b828001600101855582156200028a579182015b828111156200028a5782518255916020019190600101906200026d565b50620002989291506200029c565b5090565b5b808211156200029857600081556001016200029d565b60405160a081016001600160401b0381118282101715620002e457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200030257600080fd5b919050565b600081830360c08112156200031b57600080fd5b604080519081016001600160401b03811182821017156200034c57634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f19830112156200036657600080fd5b62000370620002b3565b91506200038060208501620002ea565b8252604084015160208301526200039a60608501620002ea565b6040830152608084810151606084015260a09094015193820193909352602083015250919050565b600181811c90821680620003d757607f821691505b60208210811415620003f957634e487b7160e01b600052602260045260246000fd5b50919050565b610c2a806200040f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c146100965780637eea518c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046109d8565b6100f4565b61005d6100a43660046109d8565b610351565b61005d6100b73660046109d8565b6104be565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e6610628565b60405161007a929190610a20565b610104600160005414600c6106c5565b61011e8135158061011757506001548235145b600d6106c5565b60008080556002805461013090610a5a565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a5a565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b46565b90506101d96040518060200160405280600081525090565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516102089190610b70565b60405180910390a161021c341560096106c5565b61023961023233846020015185604001516106eb565b600a6106c5565b8151610251906001600160a01b03163314600b6106c5565b60a08201516102609043610b95565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015183168185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528b5160a0808d019182526002600055436001558751998a019a909a5296518a16958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061034a929190610902565b5050505050565b61036160026000541460156106c5565b61037b8135158061037457506001548235145b60166106c5565b60008080556002805461038d90610a5a565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990610a5a565b80156104065780601f106103db57610100808354040283529160200191610406565b820191906000526020600020905b8154815290600101906020018083116103e957829003601f168201915b505050505080602001905181019061041e9190610b46565b90506104328160a0015143101560176106c5565b7f25e9400ad0fddc8c71fc4eb2845b4d0fc13ca66f2a17e1b7e0f544d275234c09826040516104619190610b70565b60405180910390a1610475341560136106c5565b805161048d906001600160a01b0316331460146106c5565b6104a4816020015182600001518360400151610703565b600080805560018190556104ba90600290610986565b5050565b6104ce60026000541460106106c5565b6104e8813515806104e157506001548235145b60116106c5565b6000808055600280546104fa90610a5a565b80601f016020809104026020016040519081016040528092919081815260200182805461052690610a5a565b80156105735780601f1061054857610100808354040283529160200191610573565b820191906000526020600020905b81548152906001019060200180831161055657829003601f168201915b505050505080602001905181019061058b9190610b46565b905061059e8160a00151431060126106c5565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516105cd9190610b70565b60405180910390a16105e13415600e6106c5565b6105fe6105f733836060015184608001516106eb565b600f6106c5565b610615816060015182600001518360800151610703565b6104a48160200151338360400151610703565b60006060600054600280805461063d90610a5a565b80601f016020809104026020016040519081016040528092919081815260200182805461066990610a5a565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b50505050509050915091509091565b816104ba5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006106f98385308561071c565b90505b9392505050565b61070e8383836107f6565b61071757600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161078391610bbb565b60006040518083038185875af1925050503d80600081146107c0576040519150601f19603f3d011682016040523d82523d6000602084013e6107c5565b606091505b50915091506107d6828260016108c7565b50808060200190518101906107eb9190610bd7565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161085591610bbb565b60006040518083038185875af1925050503d8060008114610892576040519150601f19603f3d011682016040523d82523d6000602084013e610897565b606091505b50915091506108a8828260026108c7565b50808060200190518101906108bd9190610bd7565b9695505050505050565b606083156108d65750816106fc565b8251156108e65782518084602001fd5b60405163100960cb60e01b8152600481018390526024016106e2565b82805461090e90610a5a565b90600052602060002090601f0160209004810192826109305760008555610976565b82601f1061094957805160ff1916838001178555610976565b82800160010185558215610976579182015b8281111561097657825182559160200191906001019061095b565b506109829291506109c3565b5090565b50805461099290610a5a565b6000825580601f106109a2575050565b601f0160209004906000526020600020908101906109c091906109c3565b50565b5b8082111561098257600081556001016109c4565b6000604082840312156109ea57600080fd5b50919050565b60005b83811015610a0b5781810151838201526020016109f3565b83811115610a1a576000848401525b50505050565b8281526040602082015260008251806040840152610a458160608501602087016109f0565b601f01601f1916919091016060019392505050565b600181811c90821680610a6e57607f821691505b602082108114156109ea57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610aa657600080fd5b919050565b600060c08284031215610abd57600080fd5b60405160c0810181811067ffffffffffffffff82111715610aee57634e487b7160e01b600052604160045260246000fd5b604052905080610afd83610a8f565b8152610b0b60208401610a8f565b602082015260408301516040820152610b2660608401610a8f565b60608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215610b5857600080fd5b6106fc8383610aab565b80151581146109c057600080fd5b81358152604081016020830135610b8681610b62565b80151560208401525092915050565b60008219821115610bb657634e487b7160e01b600052601160045260246000fd5b500190565b60008251610bcd8184602087016109f0565b9190910192915050565b600060208284031215610be957600080fd5b81516106fc81610b6256fea26469706673582212201a88b4a1cff370510c020516fb1e1dc151468b65e6f5f0cb1b1f087ea793e0ad64736f6c63430008090033`,
  BytecodeLen: 4153,
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
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
