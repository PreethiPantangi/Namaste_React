### Namaste React By Akshay Saini

## Lesson 01 - Inception
### Q. What is Emmet?
Emmet is a plug-in in VS code that helps in providing snippets of code to help write code faster.

### Q. Difference between Library and Framework?
Library focus on a specific functionality while frameworks provide the whole setup to build a web application.

### Q. What is CDN? Why do we use it?
CDN is abbrivated as content delivery/distribution network. Let's say we have some code on a server in Chicago and a user is requesting the code from DC, as soon as the server in Chicago receives the request it sends the response to the sender and also makes a copy of the file and stores it in the nearest CDN POP so that when a new request from the same area is requested instead of going to the Chicago server the file is sent from the cached network nearby. This helps in reducing latency, jitter.

### Q. Why is React known as React?
It is called react because it REACTS. Facebook developed as they wanted to improve the user interface and efficiently change(REACT TO) what the user sees when they do something on the browser

### Q. Difference between REACT and REACTDom?
React is responsible for creating views and reactdom is used to render the UI to the website

### Q. What is the difference between react.development.js and react.production.js files via CDN?
Development file is used for development purposes. It has Source Maps, Debugging, hot reloading etc. The Production build is running in production mode that is on client's machine.

### Q. What are async and defer?
When we use the async keyword the HTML is rendered when the script tag is encountered both html is rendered and JS file are fetched, once the file is fetched the execution of HTML stops and JS starts. Once this is done the HTML resumes rendering. When we use the defer keyword the HTML is rendered along with the script tag when encountered both html is rendered and JS file are fetched, and once the HTML is rendered then the JS file is executed.

## Lesson 01 - Igniting Our App
### Q. What is NPM?
NPM is everything but a node packager module. In the background it acts as a node packager manager.

### Q. What is Parcel/Webpack? Why do we need it?
These are bundlers which are used to minify, optimize, build and clean the code.

### Q. What is .parcel-cache?
When ever we rebuild our app the data is picked up from .parcel-cache folder so that when we rebuild our application it doesn't re-parse the whole code.

### What is npx?
NPX is Node Package Executer which is used to execute the react code written

### Q. What is the difference between dependencies and devDependencies?
When we are in the development phase of an application and dependencies are used in the production phase of an application.

### Q. What is Tree Shaking?
When we have a couple of functions which are unused then tree shaking is used to get rid of the unused functions.

### Q. What is HRM (Hot Module Replacement)?
Whenever there are some chanages made in the code the application automatically refreshes.

### Q. List down your favourite 5 superpowers of Parcel and describe and 3 of them.
1. Lazy mode - We can use the --lazy command through the CLI to use lazy loading in react JS. Only the required files are loaded instead of the whole application loading. The required files will be loaded when we navigate to a particular page.
2. Caching - Parcel caches everything and the next time we restart the server only the recent changes made in the file will be parsed and the rest will be picked up from the cache.
3. HTTPS - In case during the development phase we want to test something in the https mode then we can enable the https using the command --https
4. Image Optimization
5. Error handling

### Q. What is '.gitignore'? What should we add and not add into it?
gitignore has the list of folders or files that are not to be pushed to git. node_modules should be included and package.json and package-lock.json shouldn't be included.

### Q. What is the difference between package.json and package-lock.json?
In package.json we have an approximate version of a dependency and in package-lock.json we have the exact version of the dependency, it also has an integrity key which is a hash key and ensures that the same version of code is deployed on production as that of development.

### Q. Why should I not modify package-lock.json?
The main reason that we should not manually change the package-lock.json file is for dependency consistency whhen we work as a team.

### Q.What is node_modules? Is it good to push that on git?
When we install a dependency then the package along with their dependencies are installed in the node_module folder and we shouldn't push this file to git as it is reproducible.

### Q. What is the dist folder?
The dist folder contains the minified and the build code of production. When we build our project the code is minified and compressed in the dist folder.

### Q. What is browserslist?
Browserslist is a package that allows the developers to specify which all web browesers and their versions should the application work on.

### Q. Difference between ^ and ~?
^ is used for in minor version upgrades and ~ is used for major verison upgrades.


## Lesson 03 - Laying the foundation
### Q. What is JSX?
JSX is abbrivated as JavaScript XML, we use this to write HTML in React.

### Q. What are the superpowers of JSX?
JSX takes care of sanitizing the code and preventing cross site scripting 2. We can use any JS expressions in JSX using braces - {}

### Q. Role of type attribute in the script tag? What options can I use there?
The type attribute indicates the data represented by the script. The types can be one of the following module b. importmap

### Q. "<Title>" vs "<Title/>" vs "{Title()}" in JSX?
The above are all the ways of injecting a component inside another component

## Lesson 04 - Talk is cheap, Show me the code
### Q. Is JSX mandatory for React?
JSX is not mandatory for React. Using JSX is one way of creating dom elements we can also do that using React

### Q. Is ES6 mandatory for React?
It is not mandatory, there are other ways of using React without useing ES6 for example: mixins

### Q. How can I write comments in JSX?
We wrap the comments in {}. For single line comments we use // and for multi line /***/

### Q. What is <React.Fragment></React.Fragment> and <></>?
In react we can only have one parent element and if want to use two parent elements we will have to wrap it in an unnecessary div or span etc. To avoid this we have the React Fragment and <></>

### Q. What is Virtual DOM?
Virtual dom is a lightweight version of the real dom in JavaScript. It is much faster to update the virtual dom than real dom.

### Q. What is Reconciliation in React?
Reconciliation in react is a way of updating the dom. There is a process called diffing where react compares the DOM elements of the two root elements and if they are different the whole tree is torn down and a new one is built but if the root of the two elements are same for example if both of them are div then react only updates the attributes such as className, style etc.

### Q. What is React Fiber?
Fiber is the new reconciliation engine of React. The main goal of this is incremental rendering of virtual DOM. Basically we have to break down the work into units and fiber represents each unit.

### Q. Why and When do we need keys in React?
When we have aa list of items and we iterate over them to display the component in the DOM we need to have a unique key for each of them. If there is no unique key, whenever there is a new element added to the list the whole dom is re-rendered which is a costly operation.

### Q. Can we use index as key in React?
It is not recommened that we use index as key because initially the list might be ["A", "B", "C"] and the key for each is let's say 0,1,2 respectively. When a new element is added to the list ["D", "A", "B", "C"] the index changes from 0,1,2 for A,B,C to 0,1,2,3 for D,A,B,C. In this process the whole tree is re-rendered as the keys are not same from the previous dom elements

### Q. What are props in react?
We build Components so that we can reuse them. Let's say I have a card component and have n list of objects to show using the card. So using I will pass the object data to the component as argument and the data is received as props. Props are basically properties. props contain children, data etc.

### Q. What is config driven UI?
Config driven UI means the UI is built based on the response that is sent from the API. In amazon website let's say in one region I want to show the offers but in other I do not want to then the UI is rendered accordingly with config driven UI.

### Food ordering app layout 

Header
    Logo
    nav Items
Body
    Search
    RestaurantContainer
        RestaurantCard
            img
            name
            rating
            cuisine
            eta
Footer
    Copyright
    Links
    Address
    Contact 

## Lesson 05 - Let's get Hooked
### Q. What is the difference between named, default and * export?
When we use default export we can only export one variable but when we want to the export multiple variables we use the named export.

### Q. What is the importance of config.js?
This file has all the constants that we will be using in the application. Ex: LOGO_URL, CDN_URL, mockData etc.

### Q. What are React Hooks?
Hooks are javascript utility functions provided by React

### Q. Why do we use the useState hook?
Whenever there are some changes in the data and we want the UI to update accordingly we use the useState hook. Syntax : const [data, setData] = useState([])

## Lesson 06
### Q. What is a Microservice?
It is an architecture style where each service is loosely coupled. Meaning, the UI, backend, DB everything are a different service and we communicate with eath other through API's.

### Q. What is monolith architecture?
Monolith architecture is one where all of the code exists in the same application. UI, Backend, DB everything are at the same place.

### Q. What is the difference between monolith and microservice architecture?
Monolith architecture is developed as a single application where as microservice is smaller independent deployable services

### Q. Why do we use the useEffect hook?
We use the useEffect hook when we want to do something after our page is rendered. For example, When we want to fetch data after our UI is rendered.

### Q. What is optional chaining?
When we recieve response from servers the data is not straight forward in the JSON the data might be 5 levels down in the json structure. In that case we use optional chaining. Example: response?.data?.data?.data

### Q. What is Shimmer UI?
When we are fetching the data we might display it in form of cards or any other format. While the data is loading we show the user a loader and as soon as the data is available the data is displayed in a different format all of a sudden giving the user a bad experience. Shimmer UI is basically a skeleton shown on the UI while the data is being fetched.

### Q. What is the difference between JS expression and JS statement?
JS expression has a value which will be used to pass to a function as argument or normally used somewhere. JS statement has no value and is a declaration

### Q. What is conditional rendering?
Conditional rendering is when we have no data to show on the UI we might want to display some other kind of a UI.
   Example:
   return listOfRes.length === 0 ? (<ShimmerComponent/>) : (<RestaurantsComponent/>)

### Q. What is CORS?
CORS is abbrivated as Cross Origin Resource Sharing. It enables controlled access to the resources which are outside the domain

### Q. What is async and await?
Instead of using promise based chaining we use async and await enables asynchronous, promise based behaviour.

### Q. What is the use of "const json = await data.json()"?
When we make an API call the data that is received is a response object that represents the response to the request. The json method of the response object is an asynchronous method that returns a promise. By using the await keyword we can wait for the promise to resolve and get the actual JSON data.

