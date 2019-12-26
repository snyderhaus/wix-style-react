<h1 style="text-align: center;">
    <a href="https://wix.github.com/wix-style-react">
        <img src="https://raw.githubusercontent.com/wix/wix-style-react/master/.storybook/logo.svg?sanitize=true" alt="Wix Style React" width="300">
    </a>
</h1>

`wix-style-react` is a collection of [React](https://facebook.github.io/react/) components that conform to Wix Style created by Wix UX guild.

#### [Docs](https://wix-wix-style-react.surge.sh/) | [V6 Docs](https://wix-wix-style-react-v6.surge.sh/) | [Source](https://github.com/wix/wix-style-react)

## Installation [![npm version](https://img.shields.io/badge/wix--style--react-7-blue)](https://github.com/wix/wix-style-react)
* Install with `npm` or `yarn`:
```sh
npm i wix-style-react
# OR
yarn add wix-style-react
```

## Usage

### Requirements

* React 16.8 and up
 [![npm version](https://img.shields.io/badge/React-16.8-brightgreen)](https://www.npmjs.com/package/react/v/16.8.6)
* Load Wix fonts from CDN
    ```html
    <link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
    ```
* Enable font smoothing with browser specific css properties, for example:
    ```css
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ```
### Example

```jsx
import React from 'react';
import Button from 'wix-style-react/Button';

const App = () => (
    <Button onClick={() => console.log('thanks for clicking :)')}>
      Click me!
    </Button>
);
```

## Build Configuration Prerequisites
`wix-style-react` uses [Stylable](https://stylable.io/), [SASS](https://sass-lang.com/) and [CSS Modules](https://github.com/css-modules/css-modules) configuration by default.
in order to use `wix-style-react`, your module bundler should be configured accordingly.
Use [Yoshi](https://github.com/wix/yoshi) as build tool to avoid configuration. Otherwise, you should configure it on your own.

### Example of `create-react-app` configuration
- Run
    ```bash
    $ npm run eject
    $ npm i -D node-sass stylable @stylable/webpack-plugin @stylable/core
    ```
-  Enhance `webpack` configuration

    ```js
    // config/webpack.config.js
    const {StylableWebpackPlugin} = require('@stylable/webpack-plugin');
    //...
    {
      //...
      module: {
        rules: [
          {
            exclude: /\.st.css$/, //This must appear before the "oneOf" property
            oneOf: [
              //...
              {
                test: sassRegex,
                include: [
                  path.join(__dirname, '../node_modules/wix-animations'),
                  path.join(__dirname, '../node_modules/wix-style-react'),
                  path.join(__dirname, '../node_modules/bootstrap-sass')
                ],
                exclude: sassModuleRegex,
                use: getStyleLoaders(
                  {
                    modules: true,
                    importLoaders: 2,
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                    camelCase: true,
                    localIdentName:'[name]__[local]___[hash:base64:5]',
                  },
                  'sass-loader'
                ),
                sideEffects: true,
              },
            ]
          },
        ],
        plugins: [
          //...
          new StylableWebpackPlugin({
             experimentalHMR: true,
             useEntryModuleInjection: true
           }),
        ]
      //...
      }
    }
    ```
### Typescript support
- Refer to [Stylable Docs](https://stylable.io/docs/getting-started/install-configure#types) regarding Typescript configuration

## Test drivers
All of `wix-style-react` components are 100% tested and supplies test drivers for easy interactions in your tests. Read more about [Components Drivers](./docs/usage/COMPONENTS_DRIVERS.md)

## Troubleshooting

Please refer to the [Troubleshooting page](https://github.com/wix/wix-style-react/blob/master/docs/usage/Troubleshooting.md)

## Contributing

Please refer to the [Contributing page](./CONTRIBUTING.md)

## License

This project is offered under [MIT License](https://github.com/wix/wix-style-react/blob/master/LICENSE).
