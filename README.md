# About
Simple JavaScript and TypeScript algorithms realization

# Install
If you dont have tsc, install it localy or globaly. In project folder do folowing: 
git clone https://github.com/ranux/algorithms-js

```
npm install                # set up all dependencies
npm install -g typescript  # Only if you dont have tsc!
npm install tsd -g
tsd install                # install tsd files ( see tsd.json )
npm install tslint -g      # install tslint
tsc                        # build
node dist/Main.js          # run
```

# VSCode
Just open project in Visual Studio Code
Press Shift+Cmd+B to build project

# Run all tests
node dist/tests/RunAllTestSuits.js

# Translate to ES6
In tsconfig.json change
```
{
    "target": "es5",
}
```
to
```
{
    "target": "es6",
}
```