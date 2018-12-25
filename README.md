# Easycredit-api

FrontEnd made with React.

## Installation

```bash
git clone https://gitlab.com/this-repository.git
npm install
```

## Features
### Core
* [Redux](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/redux.md)
* [ImmutableJS](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/immutablejs.md)
* [reselect](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/reselect.md)
* [redux-saga](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/redux-saga.md)
* [routing](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/js/routing.md)
* [apisauce](https://github.com/infinitered/apisauce)
* [styled-components](https://github.com/styled-components/styled-components)
* [material-ui](https://material-ui.com/)
### Unit Testing
* [Jest](http://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)
### Linting
* [ESLint](http://eslint.org/)
* [Prettier](https://prettier.io/)
* [stylelint](https://stylelint.io/)



## Structure
```
├── app
│   ├── components             # Components folder
│   │   └── component          # Component folder
│   │       ├── index.js       # Component definition
│   │       └── styles.js      # Styles
│   ├── containers             # Containers folder
│   │   └── container          # Container folder
│   │       ├── actions.js     # Actions with params
│   │       ├── api.js         # Services
│   │       ├── constants.js   # List of actions
│   │       ├── index.js       # Component definition
│   │       ├── Loadable.js    # Initial loader
│   │       ├── reducer.js     # Funcionality of actions
│   │       ├── saga.js        # Asynchronous calls
│   │       ├── selectors.js   # Selectors from store
│   │       └── styles.js      # Styles
│   ├── images                 # App images
│   ├── tests                  # Unit tests (x)
│   ├── translations           # Languajes dictionary (x)
│   ├── utils                  # Utilities
│   ├── api.js                 # API configuration
│   ├── app.js                 # React app initializer
│   ├── configureStorage.js    # Config app storages
│   ├── global-styles.js       # Global base css
│   ├── index.html             # App main point (html)
│   ├── manifest.json          # App manifest
│   └── reducers.js            # App reducer
├── build                      # Builded app (production)
├── docs                       # Boilerplate usage docs
├── internals                  # App CLI and others...
└── server                     # Web server initializer
```

## Usage

* `npm run start` Starts the development server running on  `http://localhost:3000`
* `npm run lint` Lints your JavaScript and your CSS.
* `npm run build` Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the  `build`  folder.

## Based on

* [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate/)
