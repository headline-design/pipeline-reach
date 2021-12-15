# Smart Contract Command Center

A project to enable deploying and testing Reach and TEAL smart contracts fully in browser.

## Adding Reach Contracts

- Compile Reach contract
- rename .mjs file from build and paste into src
- export _ALGO from backend
- copy frontend code to public and rename
- rewrite frontend code to use real wallets, window backend and other variables. rewrite ctcAlice.getInfo() to obtain app id and insert for non creators
- Add relevant code to contracts object