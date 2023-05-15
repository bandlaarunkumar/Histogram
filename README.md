# CREATING A HISTOGRAM USING REACTJS

# DESCRIPTION
This project is all about fetching  the content from the given url "https://www.terriblytinytales.com/test.txt", parsing the content, finding the frequency of occurrence of each word and displaying the 20 most occurring words using histogram


### GITHUB LINK:
https://github.com/bandlaarunkumar/histogram

### HOSTED ON NETLIFY 

https://histogram-terriblytinytales.netlify.app/
# COMPONENTS
I have created two functional components in this project 
1) App.js : This is the main component that uses hooks to manage state and render dynamic content
2) Graph.js: I created this component for the purpose of plotting the histogram and i have exported this component to the App.js

# PLUGINS & LIBRARIES

I have imported the following plugins and libraries in this project
1) AXIOS : It is used  to make an HTTP GET request to the URL "https://www.terriblytinytales.com/test.txt". It then processes the text data received from the request
2) REACT ICONS : The react-icons/fa package is a part of the react-icons library that provides access to Font Awesome icons in React applications. Font Awesome is a popular icon library that offers a wide range of icons for various purposes.
3) RECHARTS :
BarChart: The BarChart component is used to render a bar chart in your React application. It provides a container for displaying bars that represent data points. You can configure various properties and pass data to the BarChart component to customize its appearance and behavior.

Bar: The Bar component represents an individual bar within the BarChart. It defines the visual representation of a data point in the chart. You can customize the appearance and properties of the bars, such as their colors and width, by configuring the Bar component.

XAxis: The XAxis component represents the x-axis in the chart. It displays the labels or ticks along the horizontal axis of the bar chart. You can customize the appearance and behavior of the x-axis, such as the tick format and style, by configuring the XAxis component.

YAxis: The YAxis component represents the y-axis in the chart. It displays the labels or ticks along the vertical axis of the bar chart. You can customize the appearance and behavior of the y-axis, such as the tick format and style, by configuring the YAxis component.

CartesianGrid: The CartesianGrid component represents the grid lines in the bar chart. It provides horizontal and vertical grid lines that help in visualizing the data points and their positions within the chart. You can configure properties such as stroke color and strokeDasharray to customize the appearance of the grid lines.

Tooltip: The Tooltip component is used to display additional information about the data points when the user hovers over the bars in the chart. It provides a customizable tooltip that can show data values or any other relevant information. You can configure the content and appearance of the tooltip by passing children to the Tooltip component.

# App.js

import React, { useState } from "react";:
This line imports the React library and the useState hook from the react package. The useState hook is used to manage state in functional components.

import axios from "axios";:
This line imports the axios library which is used to make HTTP requests.
const [wordCounts, setWordCounts] = useState([]);: This line declares a state variable wordCounts using the useState hook. The initial value of wordCounts is an empty array []. The setWordCounts function is used to update the value of wordCounts.

const [csvData, setCsvData] = useState("");: This line declares another state variable csvData using the useState hook. The initial value of csvData is an empty string "". The setCsvData function is used to update the value of csvData.

const fetchWordCounts = async () => { ... }: This function is an asynchronous function that uses axios to make an HTTP GET request to the URL "https://www.terriblytinytales.com/test.txt". It then processes the text data received from the request and calculates the frequency of each word. It then sorts the word counts in descending order and sets the top 20 word counts in the wordCounts state variable and generates a CSV string from the top 20 word counts and sets it in the csvData state variable.

# Graph.js

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";:
This line imports the BarChart, Bar, XAxis, YAxis, CartesianGrid, and Tooltip components from the recharts package. These components are used to render the bar chart in the application.




# Getting Started with Create React App

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
