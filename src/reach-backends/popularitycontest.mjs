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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc1, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
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
export async function Pollster(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pollster expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pollster expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    aliceAddr: ctc0,
    bobAddr: ctc0,
    deadline: ctc1,
    ticketPrice: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:14:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v139, time: v138, didSend: v19, from: v137 } = txn1;
      
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v139, time: v138, didSend: v19, from: v137 } = txn1;
  ;
  const v143 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:42:38:application',
    fs: ['at ./index.rsh:40:18:application call to [unknown function] (defined at: ./index.rsh:40:22:function exp)'],
    msg: 'getParams',
    who: 'Pollster'
    });
  const v144 = v143.ticketPrice;
  const v145 = v143.deadline;
  const v146 = v143.aliceAddr;
  const v147 = v143.bobAddr;
  
  const txn2 = await (ctc.sendrecv({
    args: [v137, v138, v144, v145, v146, v147],
    evt_cnt: 4,
    funcNum: 1,
    lct: v138,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v149, v150, v151, v152], secs: v154, time: v153, didSend: v37, from: v148 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v156 = stdlib.addressEq(v137, v148);
      stdlib.assert(v156, {
        at: './index.rsh:44:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Pollster'
        });
      const v158 = stdlib.add(v138, v150);
      const v159 = stdlib.checkedBigNumberify('./index.rsh:49:24:decimal', stdlib.UInt_max, 0);
      const v160 = stdlib.checkedBigNumberify('./index.rsh:49:27:decimal', stdlib.UInt_max, 0);
      const v161 = v153;
      const v162 = v138;
      const v167 = stdlib.checkedBigNumberify('./index.rsh:32:13:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v173 = stdlib.gt(v158, v162);
        
        return v173;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v205 = stdlib.ge(v159, v160);
        const v206 = v205 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v208 = v207 ? v151 : v152;
        sim_r.txns.push({
          amt: v167,
          kind: 'from',
          to: v208,
          tok: undefined
          });
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
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v149, v150, v151, v152], secs: v154, time: v153, didSend: v37, from: v148 } = txn2;
  ;
  const v156 = stdlib.addressEq(v137, v148);
  stdlib.assert(v156, {
    at: './index.rsh:44:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Pollster'
    });
  const v158 = stdlib.add(v138, v150);
  let v159 = stdlib.checkedBigNumberify('./index.rsh:49:24:decimal', stdlib.UInt_max, 0);
  let v160 = stdlib.checkedBigNumberify('./index.rsh:49:27:decimal', stdlib.UInt_max, 0);
  let v161 = v153;
  let v162 = v138;
  let v167 = stdlib.checkedBigNumberify('./index.rsh:32:13:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v173 = stdlib.gt(v158, v162);
    
    return v173;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v158],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v149, v151, v152, v158, v159, v160, v161, v167],
        evt_cnt: 0,
        funcNum: 4,
        lct: v161,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v198, time: v197, didSend: v99, from: v196 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          
          const cv159 = v159;
          const cv160 = v160;
          const cv161 = v197;
          const cv162 = v161;
          const cv167 = v167;
          
          await (async () => {
            const v159 = cv159;
            const v160 = cv160;
            const v161 = cv161;
            const v162 = cv162;
            const v167 = cv167;
            
            if (await (async () => {
              const v173 = stdlib.gt(v158, v162);
              
              return v173;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v205 = stdlib.ge(v159, v160);
              const v206 = v205 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v208 = v207 ? v151 : v152;
              sim_r.txns.push({
                amt: v167,
                kind: 'from',
                to: v208,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc1, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v198, time: v197, didSend: v99, from: v196 } = txn4;
      ;
      stdlib.protect(ctc4, await interact.showOutcome(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2), v159, v160), {
        at: './index.rsh:36:29:application',
        fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:64:41:application call to [unknown function] (defined at: ./index.rsh:34:51:function exp)', 'at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)'],
        msg: 'showOutcome',
        who: 'Pollster'
        });
      
      const cv159 = v159;
      const cv160 = v160;
      const cv161 = v197;
      const cv162 = v161;
      const cv167 = v167;
      
      v159 = cv159;
      v160 = cv160;
      v161 = cv161;
      v162 = cv162;
      v167 = cv167;
      
      continue;
      }
    else {
      const {data: [v182], secs: v184, time: v183, didSend: v75, from: v181 } = txn3;
      const v186 = stdlib.add(v167, v149);
      ;
      const v188 = [stdlib.checkedBigNumberify('./index.rsh:60:43:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:60:46:decimal', stdlib.UInt_max, 0)];
      const v189 = [stdlib.checkedBigNumberify('./index.rsh:60:54:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:60:57:decimal', stdlib.UInt_max, 1)];
      const v190 = v182 ? v188 : v189;
      const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:60:17:array', stdlib.UInt_max, 0)];
      const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:60:17:array', stdlib.UInt_max, 1)];
      const v193 = stdlib.add(v159, v191);
      const v194 = stdlib.add(v160, v192);
      const cv159 = v193;
      const cv160 = v194;
      const cv161 = v183;
      const cv162 = v161;
      const cv167 = v186;
      
      v159 = cv159;
      v160 = cv160;
      v161 = cv161;
      v162 = cv162;
      v167 = cv167;
      
      continue;}
    
    }
  const v205 = stdlib.ge(v159, v160);
  const v206 = v205 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v208 = v207 ? v151 : v152;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v206, v159, v160), {
    at: './index.rsh:36:29:application',
    fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:34:51:function exp)'],
    msg: 'showOutcome',
    who: 'Pollster'
    });
  
  return;
  
  
  
  
  };
export async function Voter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v139, time: v138, didSend: v19, from: v137 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v149, v150, v151, v152], secs: v154, time: v153, didSend: v37, from: v148 } = txn2;
  ;
  const v156 = stdlib.addressEq(v137, v148);
  stdlib.assert(v156, {
    at: './index.rsh:44:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter'
    });
  const v158 = stdlib.add(v138, v150);
  let v159 = stdlib.checkedBigNumberify('./index.rsh:49:24:decimal', stdlib.UInt_max, 0);
  let v160 = stdlib.checkedBigNumberify('./index.rsh:49:27:decimal', stdlib.UInt_max, 0);
  let v161 = v153;
  let v162 = v138;
  let v167 = stdlib.checkedBigNumberify('./index.rsh:32:13:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v173 = stdlib.gt(v158, v162);
    
    return v173;})()) {
    const v178 = stdlib.protect(ctc2, await interact.getVote(), {
      at: './index.rsh:53:43:application',
      fs: ['at ./index.rsh:52:23:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at ./index.rsh:52:23:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)'],
      msg: 'getVote',
      who: 'Voter'
      });
    const v179 = stdlib.protect(ctc2, await interact.shouldVote(), {
      at: './index.rsh:54:47:application',
      fs: ['at ./index.rsh:52:23:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at ./index.rsh:52:23:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)'],
      msg: 'shouldVote',
      who: 'Voter'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v149, v151, v152, v158, v159, v160, v161, v167, v178],
      evt_cnt: 1,
      funcNum: 3,
      lct: v161,
      onlyIf: v179,
      out_tys: [ctc2],
      pay: [v149, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v182], secs: v184, time: v183, didSend: v75, from: v181 } = txn3;
        
        const v186 = stdlib.add(v167, v149);
        sim_r.txns.push({
          amt: v149,
          kind: 'to',
          tok: undefined
          });
        
        const v188 = [stdlib.checkedBigNumberify('./index.rsh:60:43:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:60:46:decimal', stdlib.UInt_max, 0)];
        const v189 = [stdlib.checkedBigNumberify('./index.rsh:60:54:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:60:57:decimal', stdlib.UInt_max, 1)];
        const v190 = v182 ? v188 : v189;
        const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:60:17:array', stdlib.UInt_max, 0)];
        const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:60:17:array', stdlib.UInt_max, 1)];
        const v193 = stdlib.add(v159, v191);
        const v194 = stdlib.add(v160, v192);
        const cv159 = v193;
        const cv160 = v194;
        const cv161 = v183;
        const cv162 = v161;
        const cv167 = v186;
        
        await (async () => {
          const v159 = cv159;
          const v160 = cv160;
          const v161 = cv161;
          const v162 = cv162;
          const v167 = cv167;
          
          if (await (async () => {
            const v173 = stdlib.gt(v158, v162);
            
            return v173;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v205 = stdlib.ge(v159, v160);
            const v206 = v205 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
            const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            const v208 = v207 ? v151 : v152;
            sim_r.txns.push({
              amt: v167,
              kind: 'from',
              to: v208,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v158],
      tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v149, v151, v152, v158, v159, v160, v161, v167],
        evt_cnt: 0,
        funcNum: 4,
        lct: v161,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v198, time: v197, didSend: v99, from: v196 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          
          const cv159 = v159;
          const cv160 = v160;
          const cv161 = v197;
          const cv162 = v161;
          const cv167 = v167;
          
          await (async () => {
            const v159 = cv159;
            const v160 = cv160;
            const v161 = cv161;
            const v162 = cv162;
            const v167 = cv167;
            
            if (await (async () => {
              const v173 = stdlib.gt(v158, v162);
              
              return v173;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v205 = stdlib.ge(v159, v160);
              const v206 = v205 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              const v208 = v207 ? v151 : v152;
              sim_r.txns.push({
                amt: v167,
                kind: 'from',
                to: v208,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v198, time: v197, didSend: v99, from: v196 } = txn4;
      ;
      stdlib.protect(ctc3, await interact.showOutcome(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2), v159, v160), {
        at: './index.rsh:36:29:application',
        fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:64:41:application call to [unknown function] (defined at: ./index.rsh:34:51:function exp)', 'at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)'],
        msg: 'showOutcome',
        who: 'Voter'
        });
      
      const cv159 = v159;
      const cv160 = v160;
      const cv161 = v197;
      const cv162 = v161;
      const cv167 = v167;
      
      v159 = cv159;
      v160 = cv160;
      v161 = cv161;
      v162 = cv162;
      v167 = cv167;
      
      continue;
      }
    else {
      const {data: [v182], secs: v184, time: v183, didSend: v75, from: v181 } = txn3;
      const v186 = stdlib.add(v167, v149);
      ;
      stdlib.protect(ctc3, await interact.voterWas(v181), {
        at: './index.rsh:59:45:application',
        fs: ['at ./index.rsh:59:21:application call to [unknown function] (defined at: ./index.rsh:59:25:function exp)', 'at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:20:function exp)'],
        msg: 'voterWas',
        who: 'Voter'
        });
      
      const v188 = [stdlib.checkedBigNumberify('./index.rsh:60:43:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:60:46:decimal', stdlib.UInt_max, 0)];
      const v189 = [stdlib.checkedBigNumberify('./index.rsh:60:54:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:60:57:decimal', stdlib.UInt_max, 1)];
      const v190 = v182 ? v188 : v189;
      const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:60:17:array', stdlib.UInt_max, 0)];
      const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:60:17:array', stdlib.UInt_max, 1)];
      const v193 = stdlib.add(v159, v191);
      const v194 = stdlib.add(v160, v192);
      const cv159 = v193;
      const cv160 = v194;
      const cv161 = v183;
      const cv162 = v161;
      const cv167 = v186;
      
      v159 = cv159;
      v160 = cv160;
      v161 = cv161;
      v162 = cv162;
      v167 = cv167;
      
      continue;}
    
    }
  const v205 = stdlib.ge(v159, v160);
  const v206 = v205 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v208 = v207 ? v151 : v152;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v206, v159, v160), {
    at: './index.rsh:36:29:application',
    fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:34:51:function exp)'],
    msg: 'showOutcome',
    who: 'Voter'
    });
  
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
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:38:14:dot"
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
// "./index.rsh:38:14:dot"
// "[]"
txn Sender
global Round
itob
concat
int 1
bzero
dig 1
extract 0 40
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
bz l2_afterHandler1
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
pop
txna ApplicationArgs 2
dup
len
int 80
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
dup
extract 16 32
store 251
dup
extract 48 32
store 250
pop
// "CheckPay"
// "./index.rsh:44:14:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:44:14:dot"
// "[]"
load 255
txn Sender
==
assert
load 253
itob
load 251
concat
load 250
concat
load 254
load 252
+
itob
concat
int 16
bzero
global Round
itob
concat
load 254
itob
concat
int 8
bzero
concat
b loopBody2
l2_afterHandler1:
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l4_afterHandler3
pop
// check step
int 4
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
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 1
==
assert
dup
btoi
store 247
pop
global Round
load 252
<
assert
// "CheckPay"
// "./index.rsh:49:21:dot"
// "[]"
load 255
dup
bz l5_checkTxnK
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
l5_checkTxnK:
pop
byte base64(AAAAAAAAAAAAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAEAAAAAAAAAAA==)
load 247
select
store 246
load 255
itob
load 254
concat
load 253
concat
load 252
itob
concat
load 251
load 246
int 0
extract_uint64
+
itob
load 250
load 246
int 8
extract_uint64
+
itob
concat
global Round
itob
concat
load 249
itob
concat
load 248
load 255
+
itob
concat
b loopBody2
l4_afterHandler3:
// Handler 4
dup
int 4
==
bz l6_afterHandler4
pop
// check step
int 4
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
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "./index.rsh:63:17:dot"
// "[at ./index.rsh:62:36:application call to [unknown function] (defined at: ./index.rsh:62:36:function exp)]"
load 255
itob
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
load 248
itob
concat
b loopBody2
l6_afterHandler4:
int 0
assert
loopBody2:
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
dup
int 0
extract_uint64
store 250
dup
extract 8 32
store 249
dup
extract 40 32
store 248
dup
int 72
extract_uint64
store 247
pop
load 247
load 252
>
bz l7_ifF
load 250
itob
load 249
concat
load 248
concat
load 247
itob
concat
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 112
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l7_ifF:
load 251
dup
bz l8_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 248
load 249
int 1
int 0
load 255
load 254
>=
select
int 0
==
select
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
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
l9_makeTxnK:
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
  stateKeys: 1,
  stateSize: 112,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v149",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v150",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v152",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v182",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v149",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v150",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v152",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v182",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
        "internalType": "struct T2",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010ab380380620010ab8339810160408190526200002691620001ab565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a16200007b34156007620000db565b604080518082018252338082524360208084018281526001600081905592909255845180820193909352905182850152835180830385018152606090920190935280519192620000d2926002929091019062000105565b50505062000253565b81620001015760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001139062000216565b90600052602060002090601f01602090048101928262000137576000855562000182565b82601f106200015257805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018257825182559160200191906001019062000165565b506200019092915062000194565b5090565b5b8082111562000190576000815560010162000195565b600060408284031215620001be57600080fd5b604080519081016001600160401b0381118282101715620001ef57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020a57600080fd5b60208201529392505050565b600181811c908216806200022b57607f821691505b602082108114156200024d57634e487b7160e01b600052602260045260246000fd5b50919050565b610e4880620002636000396000f3fe6080604052600436106100565760003560e01c80630d7b1bda1461005f5780631e93b0f1146100725780638323075714610096578063a7661d54146100ab578063ab53f2c6146100be578063e2186a08146100e157005b3661005d57005b005b61005d61006d366004610b0f565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a257600080fd5b50600154610083565b61005d6100b9366004610b39565b6102d0565b3480156100ca57600080fd5b506100d3610477565b60405161008d929190610b5c565b61005d6100ef366004610b39565b610514565b610104600160005414600a61074d565b61011e8135158061011757506001548235145b600b61074d565b60008080556002805461013090610bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610bb9565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610c13565b90507f53a4280b5abc371e37047517f094be6e8d732584eceaec73dfd6916b892cd62f826040516101f29190610c79565b60405180910390a16102063415600861074d565b805161021e906001600160a01b03163314600961074d565b610226610977565b80516020840135905261023f6080840160608501610cd2565b81516001600160a01b0390911660209091015261026260a0840160808501610cd2565b81516001600160a01b0390911660409182015260208301516102879185013590610cef565b81516060908101919091526020808301805160009081905281518301819052815143604090910152918501518151909301929092529051608001526102cb81610776565b505050565b6102e0600460005414601161074d565b6102fa813515806102f357506001548235145b601261074d565b60008080556002805461030c90610bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461033890610bb9565b80156103855780601f1061035a57610100808354040283529160200191610385565b820191906000526020600020905b81548152906001019060200180831161036857829003601f168201915b505050505080602001905181019061039d9190610d15565b90506103b18160600151431015601361074d565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1826040516103e09190610dd6565b60405180910390a16103f43415601061074d565b6103fc610977565b815181515260208083015182516001600160a01b03918216908301526040808501518451921691810191909152606080850151845182015260808086015184860180519190915260a087015181519095019490945283514393019290925260c085015183519091015260e0840151915101526102cb81610776565b60006060600054600280805461048c90610bb9565b80601f01602080910402602001604051908101604052809291908181526020018280546104b890610bb9565b80156105055780601f106104da57610100808354040283529160200191610505565b820191906000526020600020905b8154815290600101906020018083116104e857829003601f168201915b50505050509050915091509091565b610524600460005414600d61074d565b61053e8135158061053757506001548235145b600e61074d565b60008080556002805461055090610bb9565b80601f016020809104026020016040519081016040528092919081815260200182805461057c90610bb9565b80156105c95780601f1061059e576101008083540402835291602001916105c9565b820191906000526020600020905b8154815290600101906020018083116105ac57829003601f168201915b50505050508060200190518101906105e19190610d15565b90506105eb6109de565b6105fc82606001514310600f61074d565b7f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f498360405161062b9190610dd6565b60405180910390a18151610642903414600c61074d565b8051600190819052815160006020918201819052818401805191909152518101919091526106769060408501908501610df7565b610684578060200151610687565b80515b6040820152610694610977565b825181515260208084015182516001600160a01b0391821692019190915260408085015183519216918101919091526060808501518351909101528201515160808401516106e29190610cef565b602080830151919091526040830151015160a08401516107029190610cef565b602080830180519091019190915280514360409091015260c0840151905160600152825160e08401516107359190610cef565b60208201516080015261074781610776565b50505050565b816107725760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516060015181600001516060015111156108e7576107e86040518061010001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b815151815281516020908101516001600160a01b0390811682840152835160409081015190911681840152835160609081015190840152818401805151608080860191909152815184015160a0860152815183015160c08601529051015160e0840152600460005543600155516108c39183910160006101008201905082518252602083015160018060a01b0380821660208501528060408601511660408501525050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906102cb929190610a40565b6020808201519081015190516000911115610903576001610906565b60005b146109165780516040015161091d565b8051602001515b6001600160a01b03166108fc8260200151608001519081150290604051600060405180830381858888f1935050505015801561095d573d6000803e3d6000fd5b506000808055600181905561097490600290610ac4565b50565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016109d96040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040805160a08101909152600060608201818152608083019190915281908152602001610a1e604051806040016040528060008152602001600081525090565b81526020016109d9604051806040016040528060008152602001600081525090565b828054610a4c90610bb9565b90600052602060002090601f016020900481019282610a6e5760008555610ab4565b82601f10610a8757805160ff1916838001178555610ab4565b82800160010185558215610ab4579182015b82811115610ab4578251825591602001919060010190610a99565b50610ac0929150610afa565b5090565b508054610ad090610bb9565b6000825580601f10610ae0575050565b601f01602090049060005260206000209081019061097491905b5b80821115610ac05760008155600101610afb565b600060a08284031215610b2157600080fd5b50919050565b600060408284031215610b2157600080fd5b600060408284031215610b4b57600080fd5b610b558383610b27565b9392505050565b82815260006020604081840152835180604085015260005b81811015610b9057858101830151858201606001528201610b74565b81811115610ba2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610bcd57607f821691505b60208210811415610b2157634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461097457600080fd5b8051610c0e81610bee565b919050565b600060408284031215610c2557600080fd5b6040516040810181811067ffffffffffffffff82111715610c5657634e487b7160e01b600052604160045260246000fd5b6040528251610c6481610bee565b81526020928301519281019290925250919050565b81358152602080830135908201526040808301359082015260a081016060830135610ca381610bee565b6001600160a01b039081166060840152608084013590610cc282610bee565b8082166080850152505092915050565b600060208284031215610ce457600080fd5b8135610b5581610bee565b60008219821115610d1057634e487b7160e01b600052601160045260246000fd5b500190565b6000610100808385031215610d2957600080fd5b6040519081019067ffffffffffffffff82118183101715610d5a57634e487b7160e01b600052604160045260246000fd5b816040528351815260208401519150610d7282610bee565b816020820152610d8460408501610c03565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b80358015158114610c0e57600080fd5b8135815260408101610dea60208401610dc6565b1515602083015292915050565b600060208284031215610e0957600080fd5b610b5582610dc656fea264697066735822122081ae483c088c05256e7df34a277247f5a88081356bc8172e52e2f9db3934b26864736f6c63430008090033`,
  BytecodeLen: 4267,
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
  "Pollster": Pollster,
  "Voter": Voter
  };
export const _APIs = {
  };
