# react-project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

Please make sure to npm install to download necessary packages and dependencies.

## Available Scripts

In the project directory, you can run:


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

## Design Choices and Limitations

### Header.js
Here, I just have a simple header text.

### Table.js
The bulk of the project is completed in this file. Specific functionalities can be found in the comments within the code file.

In order to store each row's index, string input, and indices of substrings, I decided implement an array of objects. In each object, there consists of string 'index', string 'textfield', and array 'indices'. 

### Limitations
All intended functionalities are working. However, I was not able to implement the 'ADD + EDIT' feature. Specifically, the indices of substring column will update only when a specific row's textfield is being changed. 

Additionally, I have limited user's text input to be capitalized.
