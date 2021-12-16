(async () => {

  window.reachLog = "Starting reach..."

  function log(input){
    window.reachLog += ("\n" + input)
  }

  const startingBalance = window.stdlib.parseCurrency(10);

  const accAlice = window.acct
  const accBob = window.acct

  const fmt = (x) => window.stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await window.stdlib.balanceOf(who));
  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

  const ctcAlice = accAlice.deploy(window.backend);
  const ctcBob = accBob.attach(window.backend, ctcAlice.getInfo());

  const FINGERS = [0, 1, 2, 3, 4, 5];
  const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

  const Player = (Who) => ({
    ...window.stdlib.hasRandom,
    getFingers: async () => {
     // const fingers = Math.floor(Math.random() * 3);
      const fingers = Math.floor(Math.random() * 6);         
      log(`${Who} shoots ${FINGERS[fingers]} fingers`);
     // build in occasional timeout
      if ( Math.random() <= 0.01 ) {
        for ( let i = 0; i < 10; i++ ) {
          log(`  ${Who} takes their sweet time sending it back...`);
          await window.stdlib.wait(1);
        }
      }     
      return fingers;
    },
    getGuess:  async (fingers) => {
     // guess should be greater than or equal to number of fingers thrown
     // const guess= Math.floor(Math.random() * 3);
      const guess= Math.floor(Math.random() * 6) + FINGERS[fingers];
     // occassional timeout
      if ( Math.random() <= 0.01 ) {
        for ( let i = 0; i < 10; i++ ) {
          log(`  ${Who} takes their sweet time sending it back...`);
          await window.stdlib.wait(1);
        }
      }
      log(`${Who} guessed total of ${guess}`);   
      return guess;
    },
    seeWinning: (winningNumber) => {    
      log(`Actual total fingers thrown: ${winningNumber}`);
      log(`----------------------------`);  
    },

    seeOutcome: (outcome) => {
      log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
      log(`${Who} observed a timeout`);
    },
  });

  await Promise.all([
    window.backend.Alice(ctcAlice, {
      ...Player('Alice'),
      wager: window.stdlib.parseCurrency(5),    
      ...window.stdlib.hasConsoleLogger,
    }),
    window.backend.Bob(ctcBob, {
      ...Player('Bob'),
      acceptWager: (amt) => {      
        log(`Bob accepts the wager of ${fmt(amt)}.`);
      },
      ...window.stdlib.hasConsoleLogger,      
    }),
  ]);
  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
  log(`Bob went from ${beforeBob} to ${afterBob}.`);


})();
