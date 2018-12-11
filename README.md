# instructions

* `npm install`
* `npm start` to serve a development version
* `npm run serve-build` to serve a production like build
* `npm run build` to actually create the production folder with files.



# troubleshooting & findings

#### do not use .babelrc for project wide configuration
Babel 7 allows multple `.babelrc` per modules, that by default override the root `.babelrc` (more [here](https://github.com/babel/babel/pull/7358) and [here](https://github.com/babel/babel/issues/6766)). Use `babel.config.js` instead.

#### Node sass bind error
Install nvm, and use node 10+ or install correct bindings for your version as suggested by the console