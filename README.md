# Smart Contract Command Center

A project to enable deploying and testing Reach and TEAL smart contracts fully in browser.

## Adding Reach Contracts

- Compile Reach contract
- rename .mjs file from build and paste into `src/reach-backends`
- export _ALGO from backend
- copy frontend code to `src/reach-frontends` and rename
- rewrite frontend code `Promise.all()` to enable real-world deployer/participant interaction
- replace ctcAlice.getInfo() with parseInt(id) and insert for non-creators
- replace `console.log` with function to append `window.reachLog`
- remove `import` declarations and replace with references to `window` objects (stdlib and backend)
- Add relevant code to `contracts` object:

```jsx
const contracts = {
    "Morra Game": {
    contract: require('./reach-backends/morra.mjs'),
    description: 'Game of two players guessing "fingers"',
    frontend: require('./reach-frontends/morraFront.mjs')
      },
  }
  ```