(async () => {
  const timeoutK = window.stdlib.connector === 'ALGO' ? 1 : 3;
  const startingBalance = window.stdlib.parseCurrency(100);
  const fmt = (x) => window.stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await window.stdlib.balanceOf(who));

  const accAlice  = window.acct
  const accClaire = window.acct

  const ctcAlice = accAlice.deploy(window.backend);

  const everyone = [
    [' Alice', accAlice],
    ['Claire', accClaire],
  ];
  const randomArrayRef = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  const auctionProps = {
    ' Alice': {
      startingBid: window.stdlib.parseCurrency(0),
      timeout: timeoutK * 3,
    },
    'Claire': {
      startingBid: window.stdlib.parseCurrency(3),
      timeout: timeoutK * 4,
    }
  };

  const bids = {
    ' Alice': {
      maxBid: window.stdlib.parseCurrency(7),
    },
    'Claire': {
      maxBid: window.stdlib.parseCurrency(20),
    }
  };

  const trades = {
    ' Alice': 0, 'Claire': 0
  };

  const makeOwner = (acc, who) => {
    const ctc = acc.attach(window.backend, window.creator?ctcAlice.getInfo():window.appId);
    ctcAlice.getInfo().then(data => console.log(data))
    const others = everyone.filter(x => x[0] !== who);
    return window.backend.Owner(ctc, {
      showOwner: ((id, owner) => {
        if ( window.stdlib.addressEq(owner, acc) ) {
          console.log(`\n${who} owns it\n`);
          if ( trades[who] == 2 ) {
            console.log(`${who} stops`);
            process.exit(0);
          } else {
            trades[who] += 1;
          }
        }
      }),
      getAuctionProps: (() => {
        console.log(`${who} starts the bidding at ${fmt(auctionProps[who].startingBid)}`);
        return auctionProps[who];
      }),
      getBid: (price) => {
        if (price < bids[who].maxBid) {
          const bid = window.stdlib.add(price, window.stdlib.parseCurrency(1));
          console.log(`${who} tries to bid ${fmt(bid)} (based on price: ${fmt(price)})`);
          return ['Some', bid];
        } else {
          return ['None', null];
        }
      },
    });
  };

if (window.creator){
  await Promise.all([
    window.backend.Creator(
      ctcAlice,
      {
        getId: () => {
          const id = window.stdlib.randomUInt();
          console.log(` Alice makes id #${id}`);
          return id;
        }
      }),
    makeOwner(accAlice, ' Alice'),
    makeOwner(accClaire, 'Claire')
])
}
else{
  await Promise.all([makeOwner(accClaire, 'Claire')])
}

})();
