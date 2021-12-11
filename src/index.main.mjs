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
  const ctc2 = stdlib.T_Digest;

  return {
    infos: {
    },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
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
  if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));
  }
  if (typeof (interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;


  const v435 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');

  const txn1 = await (ctc.sendrecv({
    args: [v435],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:88:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v435, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

      const { data: [v439], secs: v441, time: v440, didSend: v67, from: v438 } = txn1;

      sim_r.txns.push({
        amt: v439,
        kind: 'to',
        tok: undefined
      });
      const v445 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      sim_r.isHalt = false;

      return sim_r;
    }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
  }));
  const { data: [v439], secs: v441, time: v440, didSend: v67, from: v438 } = txn1;
  ;
  const v445 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v445],
    waitIfNotPresent: false
  }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v438, v439, v445],
      evt_cnt: 0,
      funcNum: 2,
      lct: v440,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

        const { data: [], secs: v701, time: v700, didSend: v388, from: v699 } = txn3;

        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
        });
        const v703 = stdlib.addressEq(v438, v699);
        stdlib.assert(v703, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
        });
        sim_r.txns.push({
          amt: v439,
          kind: 'from',
          to: v438,
          tok: undefined
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
        })
        sim_r.isHalt = true;

        return sim_r;
      }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
    }));
    const { data: [], secs: v701, time: v700, didSend: v388, from: v699 } = txn3;
    ;
    const v703 = stdlib.addressEq(v438, v699);
    stdlib.assert(v703, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
    });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:85:35:application',
      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
    });

    return;

  }
  else {
    const { data: [], secs: v451, time: v450, didSend: v76, from: v449 } = txn2;
    const v453 = stdlib.add(v439, v439);
    ;
    let v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v455 = v450;
    let v461 = v453;

    while (await (async () => {
      const v469 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));

      return v469;
    })()) {
      const v471 = stdlib.add(v455, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      const v475 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:103:48:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
      });
      const v476 = stdlib.protect(ctc0, await interact.getGuess(v475), {
        at: './index.rsh:104:44:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
      });
      stdlib.protect(ctc1, await interact.log(v475), {
        at: './index.rsh:106:23:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'log',
        who: 'Alice'
      });
      const v477 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:57:31:application',
        fs: ['at ./index.rsh:111:52:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
      });
      const v478 = stdlib.digest(ctc2, [v477, v475]);
      const v480 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:57:31:application',
        fs: ['at ./index.rsh:113:62:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
      });
      const v481 = stdlib.digest(ctc2, [v480, v476]);

      const txn3 = await (ctc.sendrecv({
        args: [v438, v439, v449, v461, v471, v478],
        evt_cnt: 1,
        funcNum: 4,
        lct: v455,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

          const { data: [v484], secs: v486, time: v485, didSend: v108, from: v483 } = txn3;

          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
          });
          const v488 = stdlib.addressEq(v438, v483);
          stdlib.assert(v488, {
            at: './index.rsh:117:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
          });
          const v490 = stdlib.add(v485, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          sim_r.isHalt = false;

          return sim_r;
        }),
        soloSend: true,
        timeoutAt: ['time', v471],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
      }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 5,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
        }));
        const { data: [], secs: v668, time: v667, didSend: v344, from: v666 } = txn4;
        ;
        const v670 = stdlib.addressEq(v449, v666);
        stdlib.assert(v670, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
        });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:85:35:application',
          fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
        });

        return;

      }
      else {
        const { data: [v484], secs: v486, time: v485, didSend: v108, from: v483 } = txn3;
        ;
        const v488 = stdlib.addressEq(v438, v483);
        stdlib.assert(v488, {
          at: './index.rsh:117:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
        });
        const v490 = stdlib.add(v485, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.sendrecv({
          args: [v438, v439, v449, v461, v484, v490, v481],
          evt_cnt: 1,
          funcNum: 6,
          lct: v485,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

            const { data: [v493], secs: v495, time: v494, didSend: v115, from: v492 } = txn4;

            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
            });
            const v497 = stdlib.addressEq(v438, v492);
            stdlib.assert(v497, {
              at: './index.rsh:121:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
            });
            const v499 = stdlib.add(v494, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            sim_r.isHalt = false;

            return sim_r;
          }),
          soloSend: true,
          timeoutAt: ['time', v490],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc3],
          waitIfNotPresent: false
        }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 7,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
          }));
          const { data: [], secs: v651, time: v650, didSend: v318, from: v649 } = txn5;
          ;
          const v653 = stdlib.addressEq(v449, v649);
          stdlib.assert(v653, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
          });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:85:35:application',
            fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
          });

          return;

        }
        else {
          const { data: [v493], secs: v495, time: v494, didSend: v115, from: v492 } = txn4;
          ;
          const v497 = stdlib.addressEq(v438, v492);
          stdlib.assert(v497, {
            at: './index.rsh:121:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
          });
          const v499 = stdlib.add(v494, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v499],
            waitIfNotPresent: false
          }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v438, v439, v449, v461, v484, v493, v499],
              evt_cnt: 0,
              funcNum: 9,
              lct: v494,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                const { data: [], secs: v634, time: v633, didSend: v292, from: v632 } = txn6;

                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                });
                const v636 = stdlib.addressEq(v438, v632);
                stdlib.assert(v636, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                });
                sim_r.txns.push({
                  amt: v461,
                  kind: 'from',
                  to: v438,
                  tok: undefined
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                })
                sim_r.isHalt = true;

                return sim_r;
              }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0],
              waitIfNotPresent: false
            }));
            const { data: [], secs: v634, time: v633, didSend: v292, from: v632 } = txn6;
            ;
            const v636 = stdlib.addressEq(v438, v632);
            stdlib.assert(v636, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
            });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:85:35:application',
              fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
            });

            return;

          }
          else {
            const { data: [v506], secs: v508, time: v507, didSend: v127, from: v505 } = txn5;
            ;
            const v510 = stdlib.addressEq(v449, v505);
            stdlib.assert(v510, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
            });
            const v512 = stdlib.add(v507, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v512],
              waitIfNotPresent: false
            }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v438, v439, v449, v461, v484, v493, v506, v512],
                evt_cnt: 0,
                funcNum: 11,
                lct: v507,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                  const { data: [], secs: v617, time: v616, didSend: v266, from: v615 } = txn7;

                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                  });
                  const v619 = stdlib.addressEq(v438, v615);
                  stdlib.assert(v619, {
                    at: 'reach standard library:206:7:dot',
                    fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                  });
                  sim_r.txns.push({
                    amt: v461,
                    kind: 'from',
                    to: v438,
                    tok: undefined
                  });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                  })
                  sim_r.isHalt = true;

                  return sim_r;
                }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0],
                waitIfNotPresent: false
              }));
              const { data: [], secs: v617, time: v616, didSend: v266, from: v615 } = txn7;
              ;
              const v619 = stdlib.addressEq(v438, v615);
              stdlib.assert(v619, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
              });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:85:35:application',
                fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
              });

              return;

            }
            else {
              const { data: [v515], secs: v517, time: v516, didSend: v134, from: v514 } = txn6;
              ;
              const v519 = stdlib.addressEq(v449, v514);
              stdlib.assert(v519, {
                at: './index.rsh:143:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
              });
              const v521 = stdlib.add(v516, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.sendrecv({
                args: [v438, v439, v449, v461, v484, v493, v506, v515, v521, v477, v475],
                evt_cnt: 2,
                funcNum: 12,
                lct: v516,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                  const { data: [v526, v527], secs: v529, time: v528, didSend: v145, from: v525 } = txn7;

                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                  });
                  const v531 = stdlib.addressEq(v438, v525);
                  stdlib.assert(v531, {
                    at: './index.rsh:154:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                  });
                  const v532 = stdlib.digest(ctc2, [v526, v527]);
                  const v533 = stdlib.digestEq(v484, v532);
                  stdlib.assert(v533, {
                    at: 'reach standard library:62:17:application',
                    fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                  });
                  const v535 = stdlib.add(v528, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  sim_r.isHalt = false;

                  return sim_r;
                }),
                soloSend: true,
                timeoutAt: ['time', v521],
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
              }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 13,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                }));
                const { data: [], secs: v600, time: v599, didSend: v240, from: v598 } = txn8;
                ;
                const v602 = stdlib.addressEq(v449, v598);
                stdlib.assert(v602, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:85:35:application',
                  fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                });

                return;

              }
              else {
                const { data: [v526, v527], secs: v529, time: v528, didSend: v145, from: v525 } = txn7;
                ;
                const v531 = stdlib.addressEq(v438, v525);
                stdlib.assert(v531, {
                  at: './index.rsh:154:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                });
                const v532 = stdlib.digest(ctc2, [v526, v527]);
                const v533 = stdlib.digestEq(v484, v532);
                stdlib.assert(v533, {
                  at: 'reach standard library:62:17:application',
                  fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                });
                const v535 = stdlib.add(v528, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.sendrecv({
                  args: [v438, v439, v449, v461, v493, v506, v515, v527, v535, v480, v476],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v528,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                    const { data: [v538, v539], secs: v541, time: v540, didSend: v156, from: v537 } = txn8;

                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                    });
                    const v543 = stdlib.addressEq(v438, v537);
                    stdlib.assert(v543, {
                      at: './index.rsh:160:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                    });
                    const v544 = stdlib.digest(ctc2, [v538, v539]);
                    const v545 = stdlib.digestEq(v493, v544);
                    stdlib.assert(v545, {
                      at: 'reach standard library:62:17:application',
                      fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                      msg: null,
                      who: 'Alice'
                    });
                    const v547 = stdlib.add(v540, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                    sim_r.isHalt = false;

                    return sim_r;
                  }),
                  soloSend: true,
                  timeoutAt: ['time', v535],
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 0,
                    funcNum: 15,
                    out_tys: [],
                    timeoutAt: undefined,
                    waitIfNotPresent: false
                  }));
                  const { data: [], secs: v583, time: v582, didSend: v214, from: v581 } = txn9;
                  ;
                  const v585 = stdlib.addressEq(v449, v581);
                  stdlib.assert(v585, {
                    at: 'reach standard library:206:7:dot',
                    fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                  });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:85:35:application',
                    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                  });

                  return;

                }
                else {
                  const { data: [v538, v539], secs: v541, time: v540, didSend: v156, from: v537 } = txn8;
                  ;
                  const v543 = stdlib.addressEq(v438, v537);
                  stdlib.assert(v543, {
                    at: './index.rsh:160:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                  });
                  const v544 = stdlib.digest(ctc2, [v538, v539]);
                  const v545 = stdlib.digestEq(v493, v544);
                  stdlib.assert(v545, {
                    at: 'reach standard library:62:17:application',
                    fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                  });
                  const v547 = stdlib.add(v540, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  const v551 = stdlib.add(v527, v506);
                  stdlib.protect(ctc1, await interact.seeWinning(v551), {
                    at: './index.rsh:168:30:application',
                    fs: ['at ./index.rsh:166:15:application call to [unknown function] (defined at: ./index.rsh:166:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                  });

                  const txn9 = await (ctc.sendrecv({
                    args: [v438, v439, v449, v461, v506, v515, v527, v539, v547, v551],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v540,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                      const { data: [v553], secs: v555, time: v554, didSend: v170, from: v552 } = txn9;

                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                      });
                      const v557 = stdlib.addressEq(v438, v552);
                      stdlib.assert(v557, {
                        at: './index.rsh:171:11:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Alice'
                      });
                      let v558;
                      const v559 = stdlib.eq(v539, v515);
                      if (v559) {
                        v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                      else {
                        const v561 = stdlib.eq(v551, v539);
                        if (v561) {
                          v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                        else {
                          const v563 = stdlib.eq(v551, v515);
                          if (v563) {
                            v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                          else {
                            v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                      const cv454 = v558;
                      const cv455 = v554;
                      const cv461 = v461;

                      await (async () => {
                        const v454 = cv454;
                        const v455 = cv455;
                        const v461 = cv461;

                        if (await (async () => {
                          const v469 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));

                          return v469;
                        })()) {
                          const v471 = stdlib.add(v455, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                          sim_r.isHalt = false;
                        }
                        else {
                          const v683 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v686 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v439);
                          const v688 = v683 ? v438 : v449;
                          sim_r.txns.push({
                            amt: v686,
                            kind: 'from',
                            to: v688,
                            tok: undefined
                          });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                          })
                          sim_r.isHalt = true;
                        }
                      })();
                      return sim_r;
                    }),
                    soloSend: true,
                    timeoutAt: ['time', v547],
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                  }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v438, v439, v449, v461, v506, v515, v527, v539, v547],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v540,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                        const { data: [], secs: v566, time: v565, didSend: v188, from: v564 } = txn10;

                        sim_r.txns.push({
                          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                          kind: 'to',
                          tok: undefined
                        });
                        const v568 = stdlib.addressEq(v438, v564);
                        stdlib.assert(v568, {
                          at: 'reach standard library:206:7:dot',
                          fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                          msg: 'sender correct',
                          who: 'Alice'
                        });
                        sim_r.txns.push({
                          amt: v461,
                          kind: 'from',
                          to: v438,
                          tok: undefined
                        });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                        })
                        sim_r.isHalt = true;

                        return sim_r;
                      }),
                      soloSend: true,
                      timeoutAt: undefined,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                    }));
                    const { data: [], secs: v566, time: v565, didSend: v188, from: v564 } = txn10;
                    ;
                    const v568 = stdlib.addressEq(v438, v564);
                    stdlib.assert(v568, {
                      at: 'reach standard library:206:7:dot',
                      fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                    });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:85:35:application',
                      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                    });

                    return;

                  }
                  else {
                    const { data: [v553], secs: v555, time: v554, didSend: v170, from: v552 } = txn9;
                    ;
                    const v557 = stdlib.addressEq(v438, v552);
                    stdlib.assert(v557, {
                      at: './index.rsh:171:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                    });
                    let v558;
                    const v559 = stdlib.eq(v539, v515);
                    if (v559) {
                      v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                    else {
                      const v561 = stdlib.eq(v551, v539);
                      if (v561) {
                        v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                      }
                      else {
                        const v563 = stdlib.eq(v551, v515);
                        if (v563) {
                          v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                        }
                        else {
                          v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                        }
                      }
                    }
                    const cv454 = v558;
                    const cv455 = v554;
                    const cv461 = v461;

                    v454 = cv454;
                    v455 = cv455;
                    v461 = cv461;

                    continue;
                  }

                }

              }

            }

          }

        }

      }

    }
    const v683 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v686 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v439);
    const v688 = v683 ? v438 : v449;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v454), {
      at: './index.rsh:185:28:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
    });

    return;
  }



};
export async function Bob(ctcTop, interact) {
  if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));
  }
  if (typeof (interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;


  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
  }));
  const { data: [v439], secs: v441, time: v440, didSend: v67, from: v438 } = txn1;
  ;
  const v445 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
  stdlib.protect(ctc1, await interact.acceptWager(v439), {
    at: './index.rsh:93:29:application',
    fs: ['at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
  });

  const txn2 = await (ctc.sendrecv({
    args: [v438, v439, v445],
    evt_cnt: 0,
    funcNum: 1,
    lct: v440,
    onlyIf: true,
    out_tys: [],
    pay: [v439, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

      const { data: [], secs: v451, time: v450, didSend: v76, from: v449 } = txn2;

      const v453 = stdlib.add(v439, v439);
      sim_r.txns.push({
        amt: v439,
        kind: 'to',
        tok: undefined
      });
      const v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v455 = v450;
      const v461 = v453;

      if (await (async () => {
        const v469 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));

        return v469;
      })()) {
        const v471 = stdlib.add(v455, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        sim_r.isHalt = false;
      }
      else {
        const v683 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v686 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v439);
        const v688 = v683 ? v438 : v449;
        sim_r.txns.push({
          amt: v686,
          kind: 'from',
          to: v688,
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
    timeoutAt: ['time', v445],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
  }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
    }));
    const { data: [], secs: v701, time: v700, didSend: v388, from: v699 } = txn3;
    ;
    const v703 = stdlib.addressEq(v438, v699);
    stdlib.assert(v703, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
    });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:85:35:application',
      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
    });

    return;

  }
  else {
    const { data: [], secs: v451, time: v450, didSend: v76, from: v449 } = txn2;
    const v453 = stdlib.add(v439, v439);
    ;
    let v454 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v455 = v450;
    let v461 = v453;

    while (await (async () => {
      const v469 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));

      return v469;
    })()) {
      const v471 = stdlib.add(v455, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v471],
        waitIfNotPresent: false
      }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v438, v439, v449, v461, v471],
          evt_cnt: 0,
          funcNum: 5,
          lct: v455,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

            const { data: [], secs: v668, time: v667, didSend: v344, from: v666 } = txn4;

            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
            });
            const v670 = stdlib.addressEq(v449, v666);
            stdlib.assert(v670, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
            });
            sim_r.txns.push({
              amt: v461,
              kind: 'from',
              to: v449,
              tok: undefined
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
            })
            sim_r.isHalt = true;

            return sim_r;
          }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
        }));
        const { data: [], secs: v668, time: v667, didSend: v344, from: v666 } = txn4;
        ;
        const v670 = stdlib.addressEq(v449, v666);
        stdlib.assert(v670, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
        });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:85:35:application',
          fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
        });

        return;

      }
      else {
        const { data: [v484], secs: v486, time: v485, didSend: v108, from: v483 } = txn3;
        ;
        const v488 = stdlib.addressEq(v438, v483);
        stdlib.assert(v488, {
          at: './index.rsh:117:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
        });
        const v490 = stdlib.add(v485, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v490],
          waitIfNotPresent: false
        }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v438, v439, v449, v461, v484, v490],
            evt_cnt: 0,
            funcNum: 7,
            lct: v485,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

              const { data: [], secs: v651, time: v650, didSend: v318, from: v649 } = txn5;

              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
              });
              const v653 = stdlib.addressEq(v449, v649);
              stdlib.assert(v653, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
              });
              sim_r.txns.push({
                amt: v461,
                kind: 'from',
                to: v449,
                tok: undefined
              });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
              })
              sim_r.isHalt = true;

              return sim_r;
            }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
          }));
          const { data: [], secs: v651, time: v650, didSend: v318, from: v649 } = txn5;
          ;
          const v653 = stdlib.addressEq(v449, v649);
          stdlib.assert(v653, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
          });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:85:35:application',
            fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
          });

          return;

        }
        else {
          const { data: [v493], secs: v495, time: v494, didSend: v115, from: v492 } = txn4;
          ;
          const v497 = stdlib.addressEq(v438, v492);
          stdlib.assert(v497, {
            at: './index.rsh:121:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
          });
          const v499 = stdlib.add(v494, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          const v503 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:131:48:application',
            fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:19:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
          });
          const v504 = stdlib.protect(ctc0, await interact.getGuess(v503), {
            at: './index.rsh:133:44:application',
            fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
          });

          const txn5 = await (ctc.sendrecv({
            args: [v438, v439, v449, v461, v484, v493, v499, v503],
            evt_cnt: 1,
            funcNum: 8,
            lct: v494,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

              const { data: [v506], secs: v508, time: v507, didSend: v127, from: v505 } = txn5;

              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
              });
              const v510 = stdlib.addressEq(v449, v505);
              stdlib.assert(v510, {
                at: './index.rsh:140:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
              });
              const v512 = stdlib.add(v507, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              sim_r.isHalt = false;

              return sim_r;
            }),
            soloSend: true,
            timeoutAt: ['time', v499],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
          }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 9,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
            }));
            const { data: [], secs: v634, time: v633, didSend: v292, from: v632 } = txn6;
            ;
            const v636 = stdlib.addressEq(v438, v632);
            stdlib.assert(v636, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
            });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:85:35:application',
              fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
            });

            return;

          }
          else {
            const { data: [v506], secs: v508, time: v507, didSend: v127, from: v505 } = txn5;
            ;
            const v510 = stdlib.addressEq(v449, v505);
            stdlib.assert(v510, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
            });
            const v512 = stdlib.add(v507, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.sendrecv({
              args: [v438, v439, v449, v461, v484, v493, v506, v512, v504],
              evt_cnt: 1,
              funcNum: 10,
              lct: v507,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                const { data: [v515], secs: v517, time: v516, didSend: v134, from: v514 } = txn6;

                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                });
                const v519 = stdlib.addressEq(v449, v514);
                stdlib.assert(v519, {
                  at: './index.rsh:143:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                });
                const v521 = stdlib.add(v516, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                sim_r.isHalt = false;

                return sim_r;
              }),
              soloSend: true,
              timeoutAt: ['time', v512],
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
            }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 0,
                funcNum: 11,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
              }));
              const { data: [], secs: v617, time: v616, didSend: v266, from: v615 } = txn7;
              ;
              const v619 = stdlib.addressEq(v438, v615);
              stdlib.assert(v619, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
              });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:85:35:application',
                fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
              });

              return;

            }
            else {
              const { data: [v515], secs: v517, time: v516, didSend: v134, from: v514 } = txn6;
              ;
              const v519 = stdlib.addressEq(v449, v514);
              stdlib.assert(v519, {
                at: './index.rsh:143:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
              });
              const v521 = stdlib.add(v516, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v521],
                waitIfNotPresent: false
              }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v438, v439, v449, v461, v484, v493, v506, v515, v521],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v516,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                    const { data: [], secs: v600, time: v599, didSend: v240, from: v598 } = txn8;

                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                    });
                    const v602 = stdlib.addressEq(v449, v598);
                    stdlib.assert(v602, {
                      at: 'reach standard library:206:7:dot',
                      fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                    });
                    sim_r.txns.push({
                      amt: v461,
                      kind: 'from',
                      to: v449,
                      tok: undefined
                    });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                    })
                    sim_r.isHalt = true;

                    return sim_r;
                  }),
                  soloSend: true,
                  timeoutAt: undefined,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                }));
                const { data: [], secs: v600, time: v599, didSend: v240, from: v598 } = txn8;
                ;
                const v602 = stdlib.addressEq(v449, v598);
                stdlib.assert(v602, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:85:35:application',
                  fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                });

                return;

              }
              else {
                const { data: [v526, v527], secs: v529, time: v528, didSend: v145, from: v525 } = txn7;
                ;
                const v531 = stdlib.addressEq(v438, v525);
                stdlib.assert(v531, {
                  at: './index.rsh:154:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                });
                const v532 = stdlib.digest(ctc3, [v526, v527]);
                const v533 = stdlib.digestEq(v484, v532);
                stdlib.assert(v533, {
                  at: 'reach standard library:62:17:application',
                  fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                });
                const v535 = stdlib.add(v528, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v535],
                  waitIfNotPresent: false
                }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v438, v439, v449, v461, v493, v506, v515, v527, v535],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v528,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

                      const { data: [], secs: v583, time: v582, didSend: v214, from: v581 } = txn9;

                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                      });
                      const v585 = stdlib.addressEq(v449, v581);
                      stdlib.assert(v585, {
                        at: 'reach standard library:206:7:dot',
                        fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Bob'
                      });
                      sim_r.txns.push({
                        amt: v461,
                        kind: 'from',
                        to: v449,
                        tok: undefined
                      });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                      })
                      sim_r.isHalt = true;

                      return sim_r;
                    }),
                    soloSend: true,
                    timeoutAt: undefined,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                  }));
                  const { data: [], secs: v583, time: v582, didSend: v214, from: v581 } = txn9;
                  ;
                  const v585 = stdlib.addressEq(v449, v581);
                  stdlib.assert(v585, {
                    at: 'reach standard library:206:7:dot',
                    fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                  });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:85:35:application',
                    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                  });

                  return;

                }
                else {
                  const { data: [v538, v539], secs: v541, time: v540, didSend: v156, from: v537 } = txn8;
                  ;
                  const v543 = stdlib.addressEq(v438, v537);
                  stdlib.assert(v543, {
                    at: './index.rsh:160:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                  });
                  const v544 = stdlib.digest(ctc3, [v538, v539]);
                  const v545 = stdlib.digestEq(v493, v544);
                  stdlib.assert(v545, {
                    at: 'reach standard library:62:17:application',
                    fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                  });
                  const v547 = stdlib.add(v540, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v547],
                    waitIfNotPresent: false
                  }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.recv({
                      didSend: false,
                      evt_cnt: 0,
                      funcNum: 17,
                      out_tys: [],
                      timeoutAt: undefined,
                      waitIfNotPresent: false
                    }));
                    const { data: [], secs: v566, time: v565, didSend: v188, from: v564 } = txn10;
                    ;
                    const v568 = stdlib.addressEq(v438, v564);
                    stdlib.assert(v568, {
                      at: 'reach standard library:206:7:dot',
                      fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                    });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:85:35:application',
                      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                    });

                    return;

                  }
                  else {
                    const { data: [v553], secs: v555, time: v554, didSend: v170, from: v552 } = txn9;
                    ;
                    const v557 = stdlib.addressEq(v438, v552);
                    stdlib.assert(v557, {
                      at: './index.rsh:171:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                    });
                    let v558;
                    const v559 = stdlib.eq(v539, v515);
                    if (v559) {
                      v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                    else {
                      const v560 = stdlib.add(v527, v506);
                      const v561 = stdlib.eq(v560, v539);
                      if (v561) {
                        v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                      }
                      else {
                        const v563 = stdlib.eq(v560, v515);
                        if (v563) {
                          v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                        }
                        else {
                          v558 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                        }
                      }
                    }
                    const cv454 = v558;
                    const cv455 = v554;
                    const cv461 = v461;

                    v454 = cv454;
                    v455 = cv455;
                    v461 = cv461;

                    continue;
                  }

                }

              }

            }

          }

        }

      }

    }
    const v683 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v686 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v439);
    const v688 = v683 ? v438 : v449;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v454), {
      at: './index.rsh:185:28:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
    });

    return;
  }



};
const _ALGO = {
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
// "./index.rsh:88:9:dot"
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
// "./index.rsh:88:9:dot"
// "[]"
load 255
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
global Round
int 30
+
store 254
txn Sender
load 255
itob
concat
load 254
itob
concat
int 1
bzero
dig 1
extract 0 48
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
bz l3_afterHandler1
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
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:94:9:dot"
// "[]"
load 254
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
load 255
load 254
itob
concat
txn Sender
concat
byte base64(AAAAAAAAAAE=)
global Round
itob
concat
load 254
dup
+
itob
concat
b loopBody3
l3_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
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
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:95:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:95:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l6_makeTxnK:
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
l7_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_afterHandler2:
l8_afterHandler3:
// Handler 4
dup
int 4
==
bz l9_afterHandler4
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
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 250
pop
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:117:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:11:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 30
+
store 249
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 120
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_afterHandler4:
// Handler 5
dup
int 5
==
bz l10_afterHandler5
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
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:118:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:118:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l11_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
itxn_field Receiver
itxn_submit
int 0
l11_makeTxnK:
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
l12_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l10_afterHandler5:
// Handler 6
dup
int 6
==
bz l13_afterHandler6
pop
// check step
int 7
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
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 249
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:121:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:121:11:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 30
+
store 248
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 249
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 25
app_global_put
pop
int 9
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13_afterHandler6:
// Handler 7
dup
int 7
==
bz l14_afterHandler7
pop
// check step
int 7
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
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
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
// "reach standard library:206:7:dot"
// "[at ./index.rsh:122:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:122:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l15_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
itxn_field Receiver
itxn_submit
int 0
l15_makeTxnK:
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
l16_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l14_afterHandler7:
// Handler 8
dup
int 8
==
bz l17_afterHandler8
pop
// check step
int 9
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 248
pop
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:140:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:140:11:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 30
+
store 247
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 248
itob
concat
load 247
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 33
app_global_put
pop
int 11
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l17_afterHandler8:
// Handler 9
dup
int 9
==
bz l18_afterHandler9
pop
// check step
int 9
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:141:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:141:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l19_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l19_makeTxnK:
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
l20_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l18_afterHandler9:
// Handler 10
dup
int 10
==
bz l21_afterHandler10
pop
// check step
int 11
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 247
pop
global Round
load 248
<
assert
// "CheckPay"
// "./index.rsh:143:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:143:11:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 30
+
store 246
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 247
itob
concat
load 246
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 41
app_global_put
pop
int 13
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l21_afterHandler10:
// Handler 11
dup
int 11
==
bz l22_afterHandler11
pop
// check step
int 11
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
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
load 248
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:144:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:144:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l23_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l23_makeTxnK:
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
l24_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l22_afterHandler11:
// Handler 12
dup
int 12
==
bz l25_afterHandler12
pop
// check step
int 13
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
dup
int 160
extract_uint64
store 247
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
store 246
dup
int 8
extract_uint64
store 245
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:154:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:154:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:157:24:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 251
load 246
itob
load 245
itob
concat
sha256
==
assert
global Round
int 30
+
store 244
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
load 244
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 17
app_global_put
pop
int 15
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l25_afterHandler12:
// Handler 13
dup
int 13
==
bz l26_afterHandler13
pop
// check step
int 13
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
extract 112 32
store 250
dup
int 144
extract_uint64
store 249
dup
int 152
extract_uint64
store 248
dup
int 160
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:155:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:155:43:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l27_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
itxn_field Receiver
itxn_submit
int 0
l27_makeTxnK:
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
l28_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l26_afterHandler13:
// Handler 14
dup
int 14
==
bz l29_afterHandler14
pop
// check step
int 15
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
int 136
extract_uint64
store 247
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
store 246
dup
int 8
extract_uint64
store 245
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:160:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:160:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:162:24:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 251
load 246
itob
load 245
itob
concat
sha256
==
assert
global Round
int 30
+
store 244
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
load 244
itob
concat
int 1
bzero
dig 1
extract 0 120
app_global_put
pop
int 17
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l29_afterHandler14:
// Handler 15
dup
int 15
==
bz l30_afterHandler15
pop
// check step
int 15
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
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
extract 80 32
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
int 136
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:161:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:161:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l31_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
itxn_field Receiver
itxn_submit
int 0
l31_makeTxnK:
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
l32_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l30_afterHandler15:
// Handler 16
dup
int 16
==
bz l33_afterHandler16
pop
// check step
int 17
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
dup
int 112
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 246
pop
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:171:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:171:11:dot"
// "[]"
load 255
txn Sender
==
assert
load 248
load 250
==
bz l34_localIfF
int 1
store 245
b l35_localIfK
l34_localIfF:
load 249
load 251
+
dup
store 244
load 248
==
bz l36_localIfF
int 2
store 245
b l37_localIfK
l36_localIfF:
load 244
load 250
==
bz l38_localIfF
int 0
store 245
b l39_localIfK
l38_localIfF:
int 1
store 245
l39_localIfK:
l37_localIfK:
l35_localIfK:
load 255
load 254
itob
concat
load 253
concat
load 245
itob
global Round
itob
concat
load 252
itob
concat
b loopBody3
l33_afterHandler16:
// Handler 17
dup
int 17
==
bz l40_afterHandler17
pop
// check step
int 17
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
dup
int 112
extract_uint64
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:172:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:172:41:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l41_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l41_makeTxnK:
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
l42_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l40_afterHandler17:
int 0
assert
loopBody3:
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
pop
dup
extract 0 32
store 252
dup
int 32
extract_uint64
store 251
dup
extract 40 32
store 250
pop
load 255
int 1
==
bz l43_ifF
load 254
int 30
+
store 249
load 252
load 251
itob
concat
load 250
concat
load 253
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 88
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
l43_ifF:
int 2
load 251
*
dup
bz l44_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 250
load 252
load 255
int 2
==
select
itxn_field Receiver
itxn_submit
int 0
l44_makeTxnK:
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
l45_makeTxnK:
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
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v439",
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
                "internalType": "uint256",
                "name": "v439",
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
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
                "name": "v526",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v527",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
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
                "name": "v553",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
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
        "internalType": "struct T7",
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
                "name": "v484",
                "type": "uint256"
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "name": "v493",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v506",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
                "name": "v526",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v527",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
                "name": "v538",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v539",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
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
                "name": "v553",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
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
        "internalType": "struct T7",
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
                "name": "v484",
                "type": "uint256"
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
        "internalType": "struct T7",
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
                "name": "v493",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "name": "v506",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b6038038062002b608339810160408190526200002691620001ed565b6000808055436003556040805160208101909152908152604080518351815260208085015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16020820151516200009090341460076200011d565b6200009d601e436200028f565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200011392919062000147565b50505050620002f3565b81620001435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015590620002b6565b90600052602060002090601f016020900481019282620001795760008555620001c4565b82601f106200019457805160ff1916838001178555620001c4565b82800160010185558215620001c4579182015b82811115620001c4578251825591602001919060010190620001a7565b50620001d2929150620001d6565b5090565b5b80821115620001d25760008155600101620001d7565b60008183036040808212156200020257600080fd5b80518082016001600160401b0380821183831017156200023257634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200024c57600080fd5b8351945060208501915084821081831117156200027957634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002b157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002cb57607f821691505b60208210811415620002ed57634e487b7160e01b600052602260045260246000fd5b50919050565b61285d80620003036000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b610113610147366004612257565b6102a1565b61011361015a366004612257565b610539565b61011361016d366004612257565b6106c2565b61011361018036600461228c565b61085e565b610113610193366004612257565b610ace565b6101136101a636600461228c565b610c16565b6101136101b9366004612257565b610e86565b3480156101ca57600080fd5b50600154610126565b6101136101e1366004612257565b610fff565b6101136101f4366004612257565b611178565b610113610207366004612257565b6112b7565b61011361021a366004612257565b6114f1565b61011361022d366004612257565b61162e565b34801561023e57600080fd5b5061024761184c565b6040516101309291906122a8565b610113610263366004612257565b6118e9565b610113610276366004612257565b611b09565b610113610289366004612257565b611c48565b61011361029c366004612257565b611d84565b6102b16009600054146027611fa6565b6102cb813515806102c457506001548235145b6028611fa6565b6000808055600280546102dd90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461030990612305565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e919061238e565b90506103866040518060200160405280600081525090565b6103978260c0015143106029611fa6565b7fd35ad1aca64c2a7362497fc455219b1326ea65851cccf4bcfcdd0090fca16540836040516103c6919061242c565b60405180910390a16103da34156025611fa6565b60408201516103f5906001600160a01b031633146026611fa6565b610400601e4361245b565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e0840152600b60005543600155905161050e9183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610532929190612117565b5050505050565b6105496001600054146009611fa6565b6105638135158061055c57506001548235145b600a611fa6565b60008080556002805461057590612305565b80601f01602080910402602001604051908101604052809291908181526020018280546105a190612305565b80156105ee5780601f106105c3576101008083540402835291602001916105ee565b820191906000526020600020905b8154815290600101906020018083116105d157829003601f168201915b50505050508060200190518101906106069190612473565b905061061981604001514310600b611fa6565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161064891906124e2565b60405180910390a1610661816020015134146008611fa6565b61066961219b565b815181516001600160a01b0390911690526020808301805183518301528251336040909101528183018051600190525143920191909152516106ab908061245b565b6020820151604001526106bd81611fcb565b505050565b6106d2600f60005414604c611fa6565b6106ec813515806106e557506001548235145b604d611fa6565b6000808055600280546106fe90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461072a90612305565b80156107775780601f1061074c57610100808354040283529160200191610777565b820191906000526020600020905b81548152906001019060200180831161075a57829003601f168201915b505050505080602001905181019061078f9190612593565b90506107a4816101000151431015604e611fa6565b7f96969340a6658e1e09f3b3af80819f55bac87c191bbf60c7b83615ec9e37fc06826040516107d391906124e2565b60405180910390a16107e73415604a611fa6565b6040810151610802906001600160a01b03163314604b611fa6565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610843573d6000803e3d6000fd5b506000808055600181905561085a906002906121ed565b5050565b61086e600f600054146047611fa6565b6108888135158061088157506001548235145b6048611fa6565b60008080556002805461089a90612305565b80601f01602080910402602001604051908101604052809291908181526020018280546108c690612305565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b505050505080602001905181019061092b9190612593565b90506109436040518060200160405280600081525090565b61095582610100015143106049611fa6565b7f958a3241fda076a77d37f3f7b1cbe8cc470cd495f586396be9ede30fc88618328360405161098491906125b0565b60405180910390a161099834156044611fa6565b81516109b0906001600160a01b031633146045611fa6565b604080516109fc916109d691602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360800151146046611fa6565b610a07601e4361245b565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152601160005543600155905161050e918391016125d1565b610ade600d600054146041611fa6565b610af881351580610af157506001548235145b6042611fa6565b600080805560028054610b0a90612305565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3690612305565b8015610b835780601f10610b5857610100808354040283529160200191610b83565b820191906000526020600020905b815481529060010190602001808311610b6657829003601f168201915b5050505050806020019051810190610b9b9190612593565b9050610bb08161010001514310156043611fa6565b7f07e6cc8e2fc82a9375e0bae2c8fb95cb33ae4f7121cc887b7bcd23b343d8ec0582604051610bdf91906124e2565b60405180910390a1610bf33415603f611fa6565b610802336001600160a01b031682604001516001600160a01b0316146040611fa6565b610c26600d60005414603c611fa6565b610c4081351580610c3957506001548235145b603d611fa6565b600080805560028054610c5290612305565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7e90612305565b8015610ccb5780601f10610ca057610100808354040283529160200191610ccb565b820191906000526020600020905b815481529060010190602001808311610cae57829003601f168201915b5050505050806020019051810190610ce39190612593565b9050610cfb6040518060200160405280600081525090565b610d0d8261010001514310603e611fa6565b7f6df01b59e7af1b4e575f12c5e2be125c31bd937c4a198e80569276ca84c05bb783604051610d3c91906125b0565b60405180910390a1610d5034156039611fa6565b8151610d68906001600160a01b03163314603a611fa6565b60408051610db491610d8e91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114603b611fa6565b610dbf601e4361245b565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152600f60005543600155905161050e918391016125d1565b610e96600160005414600e611fa6565b610eb081351580610ea957506001548235145b600f611fa6565b600080805560028054610ec290612305565b80601f0160208091040260200160405190810160405280929190818152602001828054610eee90612305565b8015610f3b5780601f10610f1057610100808354040283529160200191610f3b565b820191906000526020600020905b815481529060010190602001808311610f1e57829003601f168201915b5050505050806020019051810190610f539190612473565b9050610f6781604001514310156010611fa6565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610f9691906124e2565b60405180910390a1610faa3415600c611fa6565b8051610fc2906001600160a01b03163314600d611fa6565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610843573d6000803e3d6000fd5b61100f600b600054146036611fa6565b6110298135158061102257506001548235145b6037611fa6565b60008080556002805461103b90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461106790612305565b80156110b45780601f10611089576101008083540402835291602001916110b4565b820191906000526020600020905b81548152906001019060200180831161109757829003601f168201915b50505050508060200190518101906110cc919061263e565b90506110e08160e001514310156038611fa6565b7f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b4048260405161110f91906124e2565b60405180910390a161112334156034611fa6565b805161113b906001600160a01b031633146035611fa6565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610843573d6000803e3d6000fd5b6111886005600054146018611fa6565b6111a28135158061119b57506001548235145b6019611fa6565b6000808055600280546111b490612305565b80601f01602080910402602001604051908101604052809291908181526020018280546111e090612305565b801561122d5780601f106112025761010080835404028352916020019161122d565b820191906000526020600020905b81548152906001019060200180831161121057829003601f168201915b505050505080602001905181019061124591906126ea565b90506112598160800151431015601a611fa6565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de88260405161128891906124e2565b60405180910390a161129c34156016611fa6565b6040810151610802906001600160a01b031633146017611fa6565b6112c7600760005414601d611fa6565b6112e1813515806112da57506001548235145b601e611fa6565b6000808055600280546112f390612305565b80601f016020809104026020016040519081016040528092919081815260200182805461131f90612305565b801561136c5780601f106113415761010080835404028352916020019161136c565b820191906000526020600020905b81548152906001019060200180831161134f57829003601f168201915b50505050508060200190518101906113849190612774565b905061139c6040518060200160405280600081525090565b6113ad8260a001514310601f611fa6565b7f47a1195f23e4ca8f87a7a744a702eeb3eb5b0d56dae31e23931e0349a611c709836040516113dc919061242c565b60405180910390a16113f03415601b611fa6565b8151611408906001600160a01b03163314601c611fa6565b611413601e4361245b565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e08201526101000161050e565b6115016011600054146056611fa6565b61151b8135158061151457506001548235145b6057611fa6565b60008080556002805461152d90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461155990612305565b80156115a65780601f1061157b576101008083540402835291602001916115a6565b820191906000526020600020905b81548152906001019060200180831161158957829003601f168201915b50505050508060200190518101906115be9190612593565b90506115d38161010001514310156058611fa6565b7fa2bfcfc2bf018598bf89847a2aa2dc48cb8eec269fecfd468afbe606d78101bd8260405161160291906124e2565b60405180910390a161161634156054611fa6565b805161113b906001600160a01b031633146055611fa6565b61163e6005600054146013611fa6565b6116588135158061165157506001548235145b6014611fa6565b60008080556002805461166a90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461169690612305565b80156116e35780601f106116b8576101008083540402835291602001916116e3565b820191906000526020600020905b8154815290600101906020018083116116c657829003601f168201915b50505050508060200190518101906116fb91906126ea565b90506117136040518060200160405280600081525090565b611724826080015143106015611fa6565b7f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f83604051611753919061242c565b60405180910390a161176734156011611fa6565b815161177f906001600160a01b031633146012611fa6565b61178a601e4361245b565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528b5160a0808d019182526007600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e00161050e565b60006060600054600280805461186190612305565b80601f016020809104026020016040519081016040528092919081815260200182805461188d90612305565b80156118da5780601f106118af576101008083540402835291602001916118da565b820191906000526020600020905b8154815290600101906020018083116118bd57829003601f168201915b50505050509050915091509091565b6118f9600b600054146031611fa6565b6119138135158061190c57506001548235145b6032611fa6565b60008080556002805461192590612305565b80601f016020809104026020016040519081016040528092919081815260200182805461195190612305565b801561199e5780601f106119735761010080835404028352916020019161199e565b820191906000526020600020905b81548152906001019060200180831161198157829003601f168201915b50505050508060200190518101906119b6919061263e565b90506119ce6040518060200160405280600081525090565b6119df8260e0015143106033611fa6565b7fc99abf4f2124876ba493db2d7e7c61c978cfbe8e164cbc61bfbbca544c6a7a4e83604051611a0e919061242c565b60405180910390a1611a223415602f611fa6565b6040820151611a3d906001600160a01b031633146030611fa6565b611a48601e4361245b565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600d60005543600155905161050e918391016125d1565b611b196007600054146022611fa6565b611b3381351580611b2c57506001548235145b6023611fa6565b600080805560028054611b4590612305565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7190612305565b8015611bbe5780601f10611b9357610100808354040283529160200191611bbe565b820191906000526020600020905b815481529060010190602001808311611ba157829003601f168201915b5050505050806020019051810190611bd69190612774565b9050611bea8160a001514310156024611fa6565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051611c1991906124e2565b60405180910390a1611c2d34156020611fa6565b6040810151610802906001600160a01b031633146021611fa6565b611c58600960005414602c611fa6565b611c7281351580611c6b57506001548235145b602d611fa6565b600080805560028054611c8490612305565b80601f0160208091040260200160405190810160405280929190818152602001828054611cb090612305565b8015611cfd5780601f10611cd257610100808354040283529160200191611cfd565b820191906000526020600020905b815481529060010190602001808311611ce057829003601f168201915b5050505050806020019051810190611d15919061238e565b9050611d298160c00151431015602e611fa6565b7fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b000382604051611d5891906124e2565b60405180910390a1611d6c3415602a611fa6565b805161113b906001600160a01b03163314602b611fa6565b611d946011600054146051611fa6565b611dae81351580611da757506001548235145b6052611fa6565b600080805560028054611dc090612305565b80601f0160208091040260200160405190810160405280929190818152602001828054611dec90612305565b8015611e395780601f10611e0e57610100808354040283529160200191611e39565b820191906000526020600020905b815481529060010190602001808311611e1c57829003601f168201915b5050505050806020019051810190611e519190612593565b9050611e70604051806040016040528060008152602001600081525090565b611e8282610100015143106053611fa6565b7f0cefefd14ff1b389a32d136c772bb55c0beb86aa78815aa8c485d7618fc1338283604051611eb1919061242c565b60405180910390a1611ec53415604f611fa6565b8151611edd906001600160a01b031633146050611fa6565b8160a001518260e001511415611ef65760018152611f43565b81608001518260c00151611f0a919061245b565b6020820181905260e08301511415611f255760028152611f43565b8160a0015181602001511415611f3e5760008152611f43565b600181525b611f4b61219b565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925283518184018051919091528051439201919091526060850151905190910152611fa081611fcb565b50505050565b8161085a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156120b257601e826020015160200151611ffd919061245b565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c090910190935280519192611fa09260029290910190612117565b6020820151516002146120ca578151604001516120ce565b8151515b6001600160a01b03166108fc83600001516020015160026120ef9190612808565b6040518115909202916000818181858888f19350505050158015610843573d6000803e3d6000fd5b82805461212390612305565b90600052602060002090601f016020900481019282612145576000855561218b565b82601f1061215e57805160ff191683800117855561218b565b8280016001018555821561218b579182015b8281111561218b578251825591602001919060010190612170565b5061219792915061222a565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016121e860405180606001604052806000815260200160008152602001600081525090565b905290565b5080546121f990612305565b6000825580601f10612209575050565b601f016020900490600052602060002090810190612227919061222a565b50565b5b80821115612197576000815560010161222b565b60006040828403121561225157600080fd5b50919050565b60006040828403121561226957600080fd5b612273838361223f565b9392505050565b60006060828403121561225157600080fd5b60006060828403121561229e57600080fd5b612273838361227a565b82815260006020604081840152835180604085015260005b818110156122dc578581018301518582016060015282016122c0565b818111156122ee576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061231957607f821691505b6020821081141561225157634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561236c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461238957600080fd5b919050565b600060e082840312156123a057600080fd5b60405160e0810181811067ffffffffffffffff821117156123d157634e487b7160e01b600052604160045260246000fd5b6040526123dd83612372565b8152602083015160208201526123f560408401612372565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b8135815260208083013590820152604081015b92915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561246e5761246e612445565b500190565b60006060828403121561248557600080fd5b6040516060810181811067ffffffffffffffff821117156124b657634e487b7160e01b600052604160045260246000fd5b6040526124c283612372565b815260208301516020820152604083015160408201528091505092915050565b813581526040810160208301358015158082146124fe57600080fd5b806020850152505092915050565b6000610120828403121561251f57600080fd5b61252761233a565b905061253282612372565b81526020820151602082015261254a60408301612372565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b600061012082840312156125a657600080fd5b612273838361250c565b8135815260208083013590820152604080830135908201526060810161243f565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e080830151908201526101008083015190820152610120810161243f565b600061010080838503121561265257600080fd5b6040519081019067ffffffffffffffff8211818310171561268357634e487b7160e01b600052604160045260246000fd5b8160405261269084612372565b8152602084015160208201526126a860408501612372565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a082840312156126fc57600080fd5b60405160a0810181811067ffffffffffffffff8211171561272d57634e487b7160e01b600052604160045260246000fd5b60405261273983612372565b81526020830151602082015261275160408401612372565b604082015260608301516060820152608083015160808201528091505092915050565b600060c0828403121561278657600080fd5b60405160c0810181811067ffffffffffffffff821117156127b757634e487b7160e01b600052604160045260246000fd5b6040526127c383612372565b8152602083015160208201526127db60408401612372565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600081600019048311821515161561282257612822612445565b50029056fea2646970667358221220493017e042ec68b6877aff57973a97a7ff5e31d89f87312d05f67bc4660a77fe64736f6c63430008090033`,
  BytecodeLen: 11104,
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
