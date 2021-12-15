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
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1]
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
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  
  
  const v173 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:28:43:application',
    fs: ['at ./index.rsh:27:17:application call to [unknown function] (defined at: ./index.rsh:27:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v173],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v175], secs: v177, time: v176, didSend: v25, from: v174 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v179 = v174;
      const v180 = v176;
      
      if (await (async () => {
        
        return true;})()) {
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
  const {data: [v175], secs: v177, time: v176, didSend: v25, from: v174 } = txn1;
  ;
  let v179 = v174;
  let v180 = v176;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v194, v195], secs: v197, time: v196, didSend: v46, from: v193 } = txn2;
    ;
    const v200 = stdlib.add(v180, v195);
    let v201 = v194;
    let v202 = true;
    let v203 = v179;
    let v204 = v196;
    let v205 = v180;
    
    while (await (async () => {
      const v215 = stdlib.gt(v200, v205);
      
      return v215;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v200],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v179, v200, v201, v202, v203, v204],
          evt_cnt: 0,
          funcNum: 5,
          lct: v204,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v251, time: v250, didSend: v150, from: v249 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv201 = v201;
            const cv202 = v202;
            const cv203 = v203;
            const cv204 = v250;
            const cv205 = v204;
            
            await (async () => {
              const v201 = cv201;
              const v202 = cv202;
              const v203 = cv203;
              const v204 = cv204;
              const v205 = cv205;
              
              if (await (async () => {
                const v215 = stdlib.gt(v200, v205);
                
                return v215;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v255 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v201;
                sim_r.txns.push({
                  amt: v255,
                  kind: 'from',
                  to: v179,
                  tok: undefined
                  });
                const cv179 = v203;
                const cv180 = v204;
                
                await (async () => {
                  const v179 = cv179;
                  const v180 = cv180;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc1, ctc0, ctc0, ctc2, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v251, time: v250, didSend: v150, from: v249 } = txn4;
        ;
        const cv201 = v201;
        const cv202 = v202;
        const cv203 = v203;
        const cv204 = v250;
        const cv205 = v204;
        
        v201 = cv201;
        v202 = cv202;
        v203 = cv203;
        v204 = cv204;
        v205 = cv205;
        
        continue;
        }
      else {
        const {data: [v237], secs: v239, time: v238, didSend: v130, from: v236 } = txn3;
        ;
        const v242 = stdlib.gt(v237, v201);
        stdlib.assert(v242, {
          at: './index.rsh:68:22:application',
          fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v243 = v202 ? stdlib.checkedBigNumberify('./index.rsh:70:37:decimal', stdlib.UInt_max, 0) : v201;
        ;
        const cv201 = v237;
        const cv202 = false;
        const cv203 = v236;
        const cv204 = v238;
        const cv205 = v204;
        
        v201 = cv201;
        v202 = cv202;
        v203 = cv203;
        v204 = cv204;
        v205 = cv205;
        
        continue;}
      
      }
    const v255 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v201;
    ;
    const cv179 = v203;
    const cv180 = v204;
    
    v179 = cv179;
    v180 = cv180;
    
    continue;
    
    }
  return;
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Object({
    startingBid: ctc0,
    timeout: ctc0
    });
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v25, from: v174 } = txn1;
  ;
  let v179 = v174;
  let v180 = v176;
  
  while (await (async () => {
    
    return true;})()) {
    const v185 = ctc.selfAddress();
    stdlib.protect(ctc1, await interact.showOwner(v175, v179), {
      at: './index.rsh:39:27:application',
      fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)'],
      msg: 'showOwner',
      who: 'Owner'
      });
    const v187 = stdlib.addressEq(v185, v179);
    let v188;
    if (v187) {
      const v189 = stdlib.protect(ctc2, await interact.getAuctionProps(), {
        at: './index.rsh:42:56:application',
        fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)'],
        msg: 'getAuctionProps',
        who: 'Owner'
        });
      v188 = v189;
      }
    else {
      const v190 = {
        startingBid: stdlib.checkedBigNumberify('./index.rsh:19:37:decimal', stdlib.UInt_max, 0),
        timeout: stdlib.checkedBigNumberify('./index.rsh:19:49:decimal', stdlib.UInt_max, 0)
        };
      v188 = v190;
      }
    const v191 = v188.startingBid;
    const v192 = v188.timeout;
    
    const txn2 = await (ctc.sendrecv({
      args: [v179, v180, v191, v192],
      evt_cnt: 2,
      funcNum: 2,
      lct: v180,
      onlyIf: v187,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v194, v195], secs: v197, time: v196, didSend: v46, from: v193 } = txn2;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v200 = stdlib.add(v180, v195);
        const v201 = v194;
        const v202 = true;
        const v203 = v179;
        const v204 = v196;
        const v205 = v180;
        
        if (await (async () => {
          const v215 = stdlib.gt(v200, v205);
          
          return v215;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v255 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v201;
          sim_r.txns.push({
            amt: v255,
            kind: 'from',
            to: v179,
            tok: undefined
            });
          const cv179 = v203;
          const cv180 = v204;
          
          await (async () => {
            const v179 = cv179;
            const v180 = cv180;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v194, v195], secs: v197, time: v196, didSend: v46, from: v193 } = txn2;
    ;
    const v200 = stdlib.add(v180, v195);
    let v201 = v194;
    let v202 = true;
    let v203 = v179;
    let v204 = v196;
    let v205 = v180;
    
    while (await (async () => {
      const v215 = stdlib.gt(v200, v205);
      
      return v215;})()) {
      const v218 = ctc.selfAddress();
      const v220 = stdlib.addressEq(v218, v179);
      const v222 = stdlib.addressEq(v218, v203);
      const v223 = v222 ? false : true;
      const v224 = v220 ? false : v223;
      let v225;
      if (v224) {
        const v226 = stdlib.protect(ctc3, await interact.getBid(v201), {
          at: './index.rsh:59:45:application',
          fs: ['at ./index.rsh:57:16:application call to [unknown function] (defined at: ./index.rsh:57:16:function exp)', 'at ./index.rsh:57:16:application call to [unknown function] (defined at: ./index.rsh:57:16:function exp)'],
          msg: 'getBid',
          who: 'Owner'
          });
        v225 = v226;
        }
      else {
        const v227 = ['None', null];
        v225 = v227;
        }
      let v228;
      switch (v225[0]) {
        case 'None': {
          const v229 = v225[1];
          v228 = false;
          
          break;
          }
        case 'Some': {
          const v230 = v225[1];
          const v231 = stdlib.gt(v230, v201);
          v228 = v231;
          
          break;
          }
        }
      let v232;
      switch (v225[0]) {
        case 'None': {
          const v233 = v225[1];
          v232 = stdlib.checkedBigNumberify('./index.rsh:63:38:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Some': {
          const v234 = v225[1];
          v232 = v234;
          
          break;
          }
        }
      
      const txn3 = await (ctc.sendrecv({
        args: [v179, v200, v201, v202, v203, v204, v232],
        evt_cnt: 1,
        funcNum: 4,
        lct: v204,
        onlyIf: v228,
        out_tys: [ctc0],
        pay: [v232, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v237], secs: v239, time: v238, didSend: v130, from: v236 } = txn3;
          
          sim_r.txns.push({
            amt: v237,
            kind: 'to',
            tok: undefined
            });
          const v242 = stdlib.gt(v237, v201);
          stdlib.assert(v242, {
            at: './index.rsh:68:22:application',
            fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
            msg: null,
            who: 'Owner'
            });
          const v243 = v202 ? stdlib.checkedBigNumberify('./index.rsh:70:37:decimal', stdlib.UInt_max, 0) : v201;
          sim_r.txns.push({
            amt: v243,
            kind: 'from',
            to: v203,
            tok: undefined
            });
          const cv201 = v237;
          const cv202 = false;
          const cv203 = v236;
          const cv204 = v238;
          const cv205 = v204;
          
          await (async () => {
            const v201 = cv201;
            const v202 = cv202;
            const v203 = cv203;
            const v204 = cv204;
            const v205 = cv205;
            
            if (await (async () => {
              const v215 = stdlib.gt(v200, v205);
              
              return v215;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v255 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v201;
              sim_r.txns.push({
                amt: v255,
                kind: 'from',
                to: v179,
                tok: undefined
                });
              const cv179 = v203;
              const cv180 = v204;
              
              await (async () => {
                const v179 = cv179;
                const v180 = cv180;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v200],
        tys: [ctc4, ctc0, ctc0, ctc5, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v179, v200, v201, v202, v203, v204],
          evt_cnt: 0,
          funcNum: 5,
          lct: v204,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v251, time: v250, didSend: v150, from: v249 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv201 = v201;
            const cv202 = v202;
            const cv203 = v203;
            const cv204 = v250;
            const cv205 = v204;
            
            await (async () => {
              const v201 = cv201;
              const v202 = cv202;
              const v203 = cv203;
              const v204 = cv204;
              const v205 = cv205;
              
              if (await (async () => {
                const v215 = stdlib.gt(v200, v205);
                
                return v215;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v255 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v201;
                sim_r.txns.push({
                  amt: v255,
                  kind: 'from',
                  to: v179,
                  tok: undefined
                  });
                const cv179 = v203;
                const cv180 = v204;
                
                await (async () => {
                  const v179 = cv179;
                  const v180 = cv180;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc0, ctc5, ctc4, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v251, time: v250, didSend: v150, from: v249 } = txn4;
        ;
        const cv201 = v201;
        const cv202 = v202;
        const cv203 = v203;
        const cv204 = v250;
        const cv205 = v204;
        
        v201 = cv201;
        v202 = cv202;
        v203 = cv203;
        v204 = cv204;
        v205 = cv205;
        
        continue;
        }
      else {
        const {data: [v237], secs: v239, time: v238, didSend: v130, from: v236 } = txn3;
        ;
        const v242 = stdlib.gt(v237, v201);
        stdlib.assert(v242, {
          at: './index.rsh:68:22:application',
          fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v243 = v202 ? stdlib.checkedBigNumberify('./index.rsh:70:37:decimal', stdlib.UInt_max, 0) : v201;
        ;
        const cv201 = v237;
        const cv202 = false;
        const cv203 = v236;
        const cv204 = v238;
        const cv205 = v204;
        
        v201 = cv201;
        v202 = cv202;
        v203 = cv203;
        v204 = cv204;
        v205 = cv205;
        
        continue;}
      
      }
    const v255 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, 0) : v201;
    ;
    const cv179 = v203;
    const cv180 = v204;
    
    v179 = cv179;
    v180 = cv180;
    
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
// "./index.rsh:30:13:dot"
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
// "./index.rsh:30:13:dot"
// "[]"
byte base64()
txn Sender
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 253
dup
int 8
extract_uint64
store 252
pop
// "CheckPay"
// "./index.rsh:45:10:dot"
// "[]"
load 255
load 254
load 252
+
itob
concat
load 253
itob
int 1
itob // bool
substring 7 8
concat
load 255
concat
global Round
itob
concat
load 254
itob
concat
b loopBody3
l3_afterHandler2:
l4_afterHandler3:
// Handler 4
dup
int 4
==
bz l5_afterHandler4
pop
// check step
int 5
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
extract 48 1
btoi
store 252
dup
extract 49 32
store 251
dup
int 81
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 249
pop
global Round
load 254
<
assert
// "CheckPay"
// "./index.rsh:53:23:dot"
// "[]"
load 249
dup
bz l6_checkTxnK
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
l6_checkTxnK:
pop
// Nothing
// "./index.rsh:68:22:application"
// "[at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)]"
load 249
load 253
>
assert
load 253
int 0
load 252
select
dup
bz l7_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 251
itxn_field Receiver
itxn_submit
int 0
l7_makeTxnK:
pop
load 255
load 254
itob
concat
load 249
itob
int 0
itob // bool
substring 7 8
concat
txn Sender
concat
global Round
itob
concat
load 250
itob
concat
b loopBody3
l5_afterHandler4:
// Handler 5
dup
int 5
==
bz l8_afterHandler5
pop
// check step
int 5
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
extract 48 1
btoi
store 252
dup
extract 49 32
store 251
dup
int 81
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
load 254
>=
assert
// "CheckPay"
// "./index.rsh:53:23:dot"
// "[at ./index.rsh:74:25:application call to [unknown function] (defined at: ./index.rsh:74:25:function exp)]"
load 255
load 254
itob
concat
load 253
itob
load 252
itob // bool
substring 7 8
concat
load 251
concat
global Round
itob
concat
load 250
itob
concat
b loopBody3
l8_afterHandler5:
int 0
assert
loopBody1:
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
pop
load 255
load 254
itob
concat
int 1
bzero
dig 1
extract 0 40
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
loopBody3:
dup
int 0
extract_uint64
store 255
dup
extract 8 1
btoi
store 254
dup
extract 9 32
store 253
dup
int 41
extract_uint64
store 252
dup
int 49
extract_uint64
store 251
pop
dup
extract 0 32
store 250
dup
int 32
extract_uint64
store 249
pop
load 249
load 251
>
bz l9_ifF
load 250
load 249
itob
concat
load 255
itob
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
itob
concat
int 1
bzero
dig 1
extract 0 89
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_ifF:
load 255
int 0
load 254
select
dup
bz l10_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 250
itxn_field Receiver
itxn_submit
int 0
l10_makeTxnK:
pop
byte base64()
load 253
load 252
itob
concat
b loopBody1
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
  stateSize: 89,
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
                "name": "v175",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "name": "v175",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v195",
                "type": "uint256"
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
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v195",
                "type": "uint256"
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
                "name": "v237",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000fa538038062000fa5833981016040819052620000269162000228565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16200007a34156007620000a6565b6200008462000142565b6020808201805133905251439101526200009e81620000d0565b505062000307565b81620000cc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528582018051516001600160a01b03168086529051830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926200013d926002929091019062000182565b505050565b60405180604001604052806000151581526020016200017d604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b8280546200019090620002ca565b90600052602060002090601f016020900481019282620001b45760008555620001ff565b82601f10620001cf57805160ff1916838001178555620001ff565b82800160010185558215620001ff579182015b82811115620001ff578251825591602001919060010190620001e2565b506200020d92915062000211565b5090565b5b808211156200020d576000815560010162000212565b60008183036040808212156200023d57600080fd5b80518082016001600160401b0380821183831017156200026d57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200028757600080fd5b835194506020850191508482108183111715620002b457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c90821680620002df57607f821691505b602082108114156200030157634e487b7160e01b600052602260045260246000fd5b50919050565b610c8e80620003176000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780638e314769146100985780639014596a146100ab578063a209ad4e146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a6366004610a1a565b6100f4565b61005d6100b9366004610a3d565b61028e565b61005d6100cc366004610a1a565b61042d565b3480156100dd57600080fd5b506100e6610620565b60405161007a929190610a4f565b61010460056000541460116106bd565b61011e8135158061011757506001548235145b60126106bd565b60008080556002805461013090610aac565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610aac565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b0b565b90506101d5816020015143101560136106bd565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8826040516102049190610ba8565b60405180910390a1610218341560106106bd565b6102206108dc565b815181516001600160a01b0391821690526020808401518351820152604080850151828501805191909152606080870151825190151594019390935260808087015182519516949092019390935282514392019190915260a084015191510152610289816106e6565b505050565b61029e60036000541460096106bd565b6102b8813515806102b157506001548235145b600a6106bd565b6000808055600280546102ca90610aac565b80601f01602080910402602001604051908101604052809291908181526020018280546102f690610aac565b80156103435780601f1061031857610100808354040283529160200191610343565b820191906000526020600020905b81548152906001019060200180831161032657829003601f168201915b505050505080602001905181019061035b9190610bcd565b604080518435815260208086013590820152848201358183015290519192507f1909e55c00533c67ba90e14c8fe93a469c3600425ed0758459eff538687e7b91919081900360600190a16103b1341560086106bd565b6103b96108dc565b815181516001600160a01b03909116905260208201516103de90604085013590610c32565b815160209081019190915280820180518583013590528051600190830152835181516001600160a01b0390911660409091015280514360609091015290830151905160800152610289816106e6565b61043d600560005414600d6106bd565b6104578135158061045057506001548235145b600e6106bd565b60008080556002805461046990610aac565b80601f016020809104026020016040519081016040528092919081815260200182805461049590610aac565b80156104e25780601f106104b7576101008083540402835291602001916104e2565b820191906000526020600020905b8154815290600101906020018083116104c557829003601f168201915b50505050508060200190518101906104fa9190610b0b565b905061050d81602001514310600f6106bd565b6040805183358152602080850135908201527f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f910160405180910390a161055b34602084013514600b6106bd565b604081015161057190602084013511600c6106bd565b80608001516001600160a01b03166108fc8260600151610595578260400151610598565b60005b6040518115909202916000818181858888f193505050501580156105c0573d6000803e3d6000fd5b506105c96108dc565b815181516001600160a01b039091169052602080830151825182015280820180518583013590528051600092019190915280513360409091015280514360609091015260a0830151905160800152610289816106e6565b60006060600054600280805461063590610aac565b80601f016020809104026020016040519081016040528092919081815260200182805461066190610aac565b80156106ae5780601f10610683576101008083540402835291602001916106ae565b820191906000526020600020905b81548152906001019060200180831161069157829003601f168201915b50505050509050915091509091565b816106e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516080015181600001516020015111156107f1576040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528151516001600160a01b0390811680835283516020908101518185019081528186018051516040808801918252825185015115156060808a01918252845183015189166080808c01918252955182015160a0808d019182526005600055436001558551998a019a909a5296519388019390935292519286019290925290511515918401919091525190931691810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061028992919061092f565b8060000151600001516001600160a01b03166108fc82602001516020015161081e57602083015151610821565b60005b6040518115909202916000818181858888f19350505050158015610849573d6000803e3d6000fd5b506108526109b3565b602080830180516040015183830180516001600160a01b039092169091529051606001519051909101526106e281610888565b50565b604080518082019091526000808252602082015260208281018051516001600160a01b03168084529051820151838301908152600360005543600155604080519384019290925251908201526060016107cd565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b82805461093b90610aac565b90600052602060002090601f01602090048101928261095d57600085556109a3565b82601f1061097657805160ff19168380011785556109a3565b828001600101855582156109a3579182015b828111156109a3578251825591602001919060010190610988565b506109af9291506109ed565b5090565b604051806040016040528060001515815260200161092a604051806040016040528060006001600160a01b03168152602001600081525090565b5b808211156109af57600081556001016109ee565b600060408284031215610a1457600080fd5b50919050565b600060408284031215610a2c57600080fd5b610a368383610a02565b9392505050565b600060608284031215610a1457600080fd5b82815260006020604081840152835180604085015260005b81811015610a8357858101830151858201606001528201610a67565b81811115610a95576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ac057607f821691505b60208210811415610a1457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610af857600080fd5b919050565b801515811461088557600080fd5b600060c08284031215610b1d57600080fd5b60405160c0810181811067ffffffffffffffff82111715610b4e57634e487b7160e01b600052604160045260246000fd5b604052610b5a83610ae1565b815260208301516020820152604083015160408201526060830151610b7e81610afd565b6060820152610b8f60808401610ae1565b608082015260a083015160a08201528091505092915050565b81358152604081016020830135610bbe81610afd565b80151560208401525092915050565b600060408284031215610bdf57600080fd5b6040516040810181811067ffffffffffffffff82111715610c1057634e487b7160e01b600052604160045260246000fd5b604052610c1c83610ae1565b8152602083015160208201528091505092915050565b60008219821115610c5357634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220894399f2768ff421a7a2be088c1aa12bc2116c4f5ef3b672ab3129d35608664b64736f6c63430008090033`,
  BytecodeLen: 4005,
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
  "Creator": Creator,
  "Owner": Owner
  };
export const _APIs = {
  };
