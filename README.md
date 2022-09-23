# Market App

### :ticket: Deployment

Website : [https://market-v4.netlify.app/](https://market-v4.netlify.app/) <br><br>
Api : [https://market-api-v4.herokuapp.com](https://market-api-v4.herokuapp.com/)

### 🏞️  A picture is worth a thousand words
<img width="1273" alt="Screen Shot 2022-09-23 at 10 27 33 AM" src="https://user-images.githubusercontent.com/30313266/191910992-c0544b17-1adf-4d7f-9575-0a44b7af11cf.png">


## Integration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder Structure 

- api &nbsp;&nbsp; ->                JSON server is responsible for servicing data https://market-api-v4.herokuapp.com/
- assets/icons &nbsp;&nbsp; ->       SVG files  
- components &nbsp;&nbsp; ->         Reusable components only for a Features
- features &nbsp;&nbsp; ->           Features are responsible for more stuff than presentational components
- pages &nbsp;&nbsp; ->              The application's home page. Features components are combined here
- theme/colors &nbsp;&nbsp; ->       Keeps colors to use throughout the application
- store &nbsp;&nbsp; ->              It manages and centralizes application state. Reducers are responsible for taking in two things: previous state.                                            Then they reduce it (read it return) to one entity: the new updated instance of state.



## Tech Stack

- react
- redux
- styled Components
- create-react-app



