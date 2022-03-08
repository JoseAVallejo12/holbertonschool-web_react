# 0x07. React Immutable

## Resources

### Read or watch

- [Immutable Object concept](https://intranet.hbtn.io/rltoken/iCzkEHd9UHXDe1SQU7N5sw)
- [Immutable.js Documentation](https://intranet.hbtn.io/rltoken/VLQYE0CUVkFQz79FTKTxmA)
- [Immutable.js GitHub](https://intranet.hbtn.io/rltoken/sFez1GEIXOr7lCrk1MBTwg)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy Seq is

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- A README.md file, at the root of the folder of the project, is mandatory
- All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- All of your files should end with a new line
- All of your functions must be exported

## Setup

- Install NodeJS `12.11.x`
- Install npm `6.11.x`
The script below installs the above 2 at the specified versions

```sh
curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
```

## Provided files

<details>
<summary>babel.config.js</summary>

```js
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
  ],
};
```

</details>

<details>
<summary>jsconfig.json</summary>

```json
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}

```

</details>
</details>

<details>
<summary>package.json</summary>

```json
{
  "type": "module",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```

</details>
