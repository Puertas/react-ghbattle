# react-ghbattle
### Learning React Example - Github Profiles Battle

Example to learn React and react environment (webpack, react-router...). Following the Tutorials from: https://reacttraining.com/online which I really recommend.

The example consist on a search box where you can select to Github profiles and confront them!. After the battle we will show
a result cards with data the score and the winner.

## Plugins & Configurations:
### NPM
Very basic configuration on NPM with just to basic task:
 - "start": Will start a Webpack dev server (with Live Update).
 - "production": Will process and prepare project for production.

### Babel
Not many configuration on .babelrc, just add React plugins to compile React and JSX.

###Webpack
Again nothing fancy or big here:
 - Basic configuration to process with babel and bundle all dependencies.
 - Also using **html-webpack-plugin** to take the index.html and add the bundle to it for production.
