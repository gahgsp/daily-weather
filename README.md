# Daily Weather

This project was developed with the goal to provide weather forecast information for a single day.

It followed the specification's artifact given to develop the behavior and also the look and feel of this application.

## Development Process

After receiving the document with all the definitions on both behavior and design of the application, my first action was to analyse carefully the informations provided by the document.

Checking the prototype gave me the opportunity to break the page in small components and define separate tasks to develop each one of them independently and in a way that it would be easy to put them together.

The application was developed with an evolutive mindset in place: the components started being simple pieces of code and after each iteration the components received new features in order to present the behavior defined by the design document.

The focus was since the beginning to provide a simple solution that can be expanded and maintained with ease.

When the application was complete with all the basic features done, I started to write both code documentation and also the creation of utility classes that are responsible for providing useful functions that can be shared across the application.

The development process also included the implementation of automated testing scenarios to ensure the well-functioning of the components used in the application.

## Side Notes

During the development of the application I came across with a deviant behavior from the one that was defined in the design document.

The API from `OpenWeatherMap` that was provided was not returning the weather information for a single day and with hourly forecast but instead the API returned information from multiple days and with 3-hours forecast.

With this in mind, I made the application behave the same as it would for a single day but with data from multiple days and multiple forecasts.

Also, due to this behavior I needed to download more icons than the ones provided in order to present the correct weather condition icon on the page.

## Development Environment

After cloning the project, run the following commands:

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
