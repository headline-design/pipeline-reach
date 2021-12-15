import * as fs from "fs"

var filename = "atomicswapFront"

let path = 'public/reach-frontend/' + filename + '.mjs'

var textfile = ""

fs.readFile(path, function (err, data) {
   if (err) {
      return console.error(err);
   }
   data = data.toString()
   textfile = data;
   convertFile()
});

const toReplaceOnce = [
   `import { loadStdlib } from '@reach-sh/stdlib';`,
   `import * as backend from './build/index.main.mjs';`,
    `const stdlib = await loadStdlib();`,
    `const stdlib = await loadStdlib('ALGO');`,
    `import { loadStdlib } from '@reach-sh/stdlib/loader.mjs';`,
    `import launchToken from '@reach-sh/stdlib/launchToken.mjs';`
]

const toReplaceAll = {
   stdlib: "window.stdlib",
   backend: "window.backend",
   "await window.stdlib.newTestAccount(startingBalance);": "window.acct",
   "window.stdlib.newTestAccount(startingBalance)": "window.acct"
}


function convertFile() {
   toReplaceOnce.forEach(removal => textfile = textfile.replace(removal, ""))
   Object.keys(toReplaceAll).forEach(key => {
      textfile = textfile.split(key).join(toReplaceAll[key]);
   })
   console.log(textfile)
   fs.writeFile(path, textfile, function (err) {
      if (err) {
         return console.log(err);
      }
      console.log("File converted.");
   });
}