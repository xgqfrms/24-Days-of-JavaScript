# jest

https://jestjs.io/

```sh
$ yarn add -D jest
# OR
$ npm i -D jest

```

https://jestjs.io/docs/en/getting-started.html#using-typescript

```sh
$ yarn add --dev babel-jest @babel/core @babel/preset-env

$ yarn add --dev @babel/preset-typescript

```

```js
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};

```


## 33.4k ⭐️

https://github.com/facebook/jest
