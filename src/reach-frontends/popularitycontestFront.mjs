export async function run() {
  window.reachLog = "Starting reach..."

  function log(input){
    window.reachLog += ("\n" + input)
  }
  
  const [ N, timeoutFactor ] =
    window.stdlib.connector === 'ALGO' ? [ 2, 2 ] : [ 5, 2 ];

  const startingBalance = window.stdlib.parseCurrency(100);
  const accPollster = window.acct
  const accVoter_arr = await Promise.all( Array.from({length: N}, () => window.acct) );
  const accAlice = window.acct
  const accBob = window.acct

  const fmt = (x) => window.stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await window.stdlib.balanceOf(who));
  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

  const ctcPollster = accPollster.deploy(window.backend);
  const ctcInfo = ctcPollster.getInfo();

  const OUTCOME = ['Alice wins', 'Bob wins', 'Timeout'];
  const Common = (Who) => ({
      showOutcome: (outcome, forA, forB) => {
        if ( outcome == 2 ) {
          log(`${Who} saw the timeout`); }
        else {
          log(`${Who} saw a ${forA}-${forB} outcome: ${OUTCOME[outcome]}`);
        }
  } });

  await Promise.all([
    window.backend.Pollster(ctcPollster, {
      ...Common('Pollster'),
      getParams: () => ({
        ticketPrice: window.stdlib.parseCurrency(5),
        deadline: N*timeoutFactor,
        aliceAddr: accAlice,
        bobAddr: accBob,
      }),
    }),
  ].concat(
    accVoter_arr.map((accVoter, i) => {
      const ctcVoter = accVoter.attach(window.backend, ctcInfo);
      const Who = `Voter #${i}`;
      const vote = Math.random() < 0.5;
      let voted = false;
      return window.backend.Voter(ctcVoter, {
        ...Common(Who),
        getVote: (() => vote),
        voterWas: ((voterAddr) => {
          if ( window.stdlib.addressEq(voterAddr, accVoter) ) {
            log(`${Who} voted: ${vote ? 'Alice' : 'Bob'}`);
            voted = true;
          } } ),
        shouldVote: (() => ! voted) }); } )
  ));

  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
  log(`Bob went from ${beforeBob} to ${afterBob}.`);

}
