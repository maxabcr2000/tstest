# Testing for importing js bundle in reactJS

Practice for importing js bundle file (exports a wrapper class which is originally written in typescript) in ReactJS project.

## Notes
  1. libName.min.js is the minified bundle file that generated by webpack. The bundle file exports a wrapper class the import web3 module. ([The source project of the bundle](https://github.com/maxabcr2000/typescriptdemo))

  2. Add script tag in index.html for importing the js bundle file
  * <script src="libName.min.js"> </script>
  3. Get access to the exported class through window global object in index.js
  ```javascript
  const EthHelper = window.libName.default;

  const helper = new EthHelper({
      host: "ws://localhost",
      port: 8546
  });
  ```

## Usage
  * run `npm run start`. 



