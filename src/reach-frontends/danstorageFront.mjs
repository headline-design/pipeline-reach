export async function run() {
  window.reachLog = "Starting reach..."

  function log(input){
    window.reachLog += ("\n" + input)
  }
  const startingBalance = window.stdlib.parseCurrency(1);
  const accO = window.acct
  const ctcO = accO.contract(window.backend);

  await ctcO.p.Oracle({
    ...window.stdlib.hasConsoleLogger,
    i: 5,
    getWord: (dialog) => {
      log(`getWord` + dialog.toString());
      return '';
    },
  });
}
