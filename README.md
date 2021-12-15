# Smart Contract Command Center

A project to enable deploying and testing Reach and TEAL smart contracts fully in browser.

## Adding Reach Contracts

- Compile Reach contract
- rename .mjs file from build and paste into `src/reach-backends`
- export _ALGO from backend
- copy frontend code to `public/reach-frontend` and rename
- change `filename` variable in `reachconvert.mjs` to above name:

```jsx 
import * as fs from "fs"

var filename = "morraFront"
```
- run

```bash
node reachconvert.mjs
```

- rewrite ctcAlice.getInfo() to obtain app id and insert for non creators
- Add relevant code to contracts object

```jsx
const contracts = {
  "NFT Auction": {
    contract: require('./reach-backends/nftauction.mjs'),
    description: "An NFT auction",
    frontend: async function () {
      let data = await fetch("reach-frontend/nftauctionFront.mjs"); return data.text();
    }
  }