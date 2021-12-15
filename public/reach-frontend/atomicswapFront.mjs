const shouldFail = async (fp) => {
  let worked = undefined;
  try {
    await fp();
    worked = true;
  } catch (e) {
    worked = false;
  }
  console.log(`\tshouldFail = ${worked}`);
  if (worked !== false) {
    throw Error(`shouldFail`);
  }
};

(async () => {
  

  const time = window.stdlib.connector === 'CFX' ? 50 : 10;

  const startingBalance = window.stdlib.parseCurrency(100);
  const accCreator = window.acct
  const zorkmid = await window.launchToken(window.stdlib, accCreator, "zorkmid", "ZMD");
  const gil = await window.launchToken(window.stdlib, accCreator, "gil", "GIL");

  const accAlice = window.acct
  const accBob = window.acct
  if ( window.stdlib.connector === 'ETH' || window.stdlib.connector === 'CFX' ) {
    const myGasLimit = 5000000;
    accAlice.setGasLimit(myGasLimit);
    accBob.setGasLimit(myGasLimit);
  } else if ( window.stdlib.connector == 'ALGO' ) {
    console.log(`Demonstrating need to opt-in on ALGO`);
    await shouldFail(async () => await zorkmid.mint(accAlice, startingBalance));
    console.log(`Opt-ing in on ALGO`);
    await accAlice.tokenAccept(zorkmid.id);
    await accAlice.tokenAccept(gil.id);
    await accBob.tokenAccept(zorkmid.id);
    await accBob.tokenAccept(gil.id);
  }

  await zorkmid.mint(accAlice, startingBalance.mul(2));
  await gil.mint(accBob, startingBalance.mul(2));

  if ( window.stdlib.connector == 'ALGO' ) {
    console.log(`Demonstrating opt-out on ALGO`);
    console.log(`\tAlice opts out`);
    await zorkmid.optOut(accAlice);
    console.log(`\tAlice can't receive mint`);
    await shouldFail(async () => await zorkmid.mint(accAlice, startingBalance));
    console.log(`\tAlice re-opts-in`);
    await accAlice.tokenAccept(zorkmid.id);
    console.log(`\tAlice can receive mint`);
    await zorkmid.mint(accAlice, startingBalance);
  }

  const fmt = (x) => window.stdlib.formatCurrency(x, 4);
  const doSwap = async (tokenA, amtA, tokenB, amtB, trusted) => {
    console.log(`\nPerforming swap of ${fmt(amtA)} ${tokenA.sym} for ${fmt(amtB)} ${tokenB.sym}`);

    const getBalance = async (tokenX, who) => {
      const amt = await window.stdlib.balanceOf(who, tokenX.id);
      return `${fmt(amt)} ${tokenX.sym}`; };
    const getBalances = async (who) =>
      `${await getBalance(tokenA, who)} & ${await getBalance(tokenB, who)}`;

    const beforeAlice = await getBalances(accAlice);
    const beforeBob = await getBalances(accBob);
    console.log(`Alice has ${beforeAlice}`);
    console.log(`Bob has ${beforeBob}`);

    if ( trusted ) {
      console.log(`Alice transfers to Bob honestly`);
      await window.stdlib.transfer(accAlice, accBob, amtA, tokenA.id);
      console.log(`Bob transfers to Alice honestly`);
      await window.stdlib.transfer(accBob, accAlice, amtB, tokenB.id);
    } else {
      console.log(`Alice will deploy the Reach DApp.`);
      const ctcAlice = accAlice.deploy(window.backend);
      console.log(`Bob attaches to the Reach DApp.`);
      const ctcBob = accBob.attach(window.backend, ctcAlice.getInfo());

      let succ = undefined;
      const Common = (who) => ({
        seeTimeout: () => {
          succ = false;
          console.log(`${who} saw a timeout`); },
        seeTransfer: () => {
          succ = true;
          console.log(`${who} saw the transfer happened`); },
      });

      await Promise.all([
        window.backend.Alice(ctcAlice, {
          ...Common(`Alice`),
          getSwap: () => {
            console.log(`Alice proposes swap`);
            return [ tokenA.id, amtA, tokenB.id, amtB, time ]; },
        }),
        window.backend.Bob(ctcBob, {
          ...Common(`Bob`),
          accSwap: (...v) => {
            console.log(`Bob accepts swap of`, v);
            return true; },
        }),
      ]);

      return succ;
    }

    const afterAlice = await getBalances(accAlice);
    const afterBob = await getBalances(accBob);
    console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
    console.log(`Bob went from ${beforeBob} to ${afterBob}`);
  };

  const amtA = window.stdlib.parseCurrency(1);
  const amtB = window.stdlib.parseCurrency(2);

  if ( ! await doSwap(zorkmid, amtA, gil, amtB, false) ) { return; }
  if ( ! await doSwap(gil, amtB, zorkmid, amtA, false) ) { return; }
  await doSwap(zorkmid, amtA, gil, amtB, true);
})();
