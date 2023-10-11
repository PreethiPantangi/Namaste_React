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

## Lesson 07 
### Q. What are various ways to add images to our App? Explain with code examples.
1. Images can we stored in the local folder of our application and be accessed
2. By using CDN links
3. Using the image URL

### Q. What would happen if we do console.log(useState())?
useState returns a value to store the data and a callback function to set/update the value.
console.log(useState()) - [undefined, f()] 

### Q. How will useEffect behave if we do not add a dependency array?
1. If there is no dependency array then useEffect will be called everytime the component re-renders
2. If we give an empty dependency array then the useEffect will be called only during the initial render of the component 
3. If some value is passed to the dependency array then useEffect will be called only when the value is updated

### Q. What is SPA?
SPA is abbreviated a Single Page Application. It loads only a single page and updates whenever we navigate to another page.

### Q. What is the difference between client side routing and server side routing?
In Server side routing when a page is clicked an API call is made to fetch the file and then once the response is received the web page is loaded. In client side routing we have all the files at the client side and based on the navigation between pages we render the appropriate page. 

## Lesson 08
### Q. How do you create nested routes react-router-dom configuration
We can create nested routes inside a react router configuration using the createBrowserReact method where we pass an array of objects and specify the path and element. If we want to specify children for the route there is a key called "children" which we use and it again takes an array of objects with path and element.

### Q. createHashRouter
This is used when we are not able to configure our application properly and direct all the traffic towards our website. It just adds a "#" in the URL

### Q. createMemoryRouter
If we don't not want to use the browser history to navigate back and forth in the browser then we can use the createMemoryRouter which implements it's own stack of the traversed pages

### Q. What is the order of the life cycle method calls in Class Based Component
constructor, render, componentDidMount

### Q. Why do we use componentDidMount()?
We use componentDidMount to make fetch API calls or to show some data after we render the UI

### Q. Why do we use componentWillUnMount? Show with example
componentWillUnmount is called whenever we exit the page. This is used to clean up variables meaning anything that we created in componentDidMount. 
Example:

componentDidMount() {
   const timer = setInterval(() => {
      console.log("Hello");
   }, 1000);
}

If we don't clean up the above the message Hello will be printed even after we navigate away from the page and once we get pack to the page a new interval is started. To avoid this we will clean up the interval in the componentWillUnmount method

componentWillUnmount() {
   clearInterval(timer)
}

### Q. Why do we use super(props) in constructor?
When we use super in the constructore we inherit the props from parent component as well as any new props that the component has 

### Q. Why can't use the async keyword for the callback function in useEffect()?
useEffect is expected to return a function that we be called for clean-up purpose when the component unmounts. Making this callback async we will never be able to call the function.

## Lesson 09

### Q. When and why do we need lazy()?
Considering the scenario in our Food deilvery application where we have food and grocery delivery. When we write the code and build it all of the code is bundled in one file and as the code increases the bundle becomems heavy and the application doesn't load fast. To avoid this we do lazy loading this basically loads the components when required. We use the lazy function provided by react to implement the lazy loading feature.

### Q. What is suspense?
Suspense is a component provided by react to dispay a fallback while your component is loading.

### Q. Why did we get the error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. to fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
When we do not warp out component with Suspense we get the error. There is a param that we pass to the Suspense component called fallback which will be rendered when our component is still loading. 

### Q. Advantages and Disadvantages of using code splitting pattern?
To avoid creating huge bundles we do code splitting  

### Q. When and why do we need suspense?
When we lazy load our application, the file takes some time to load (ex: 10 secs) and as react is fast it throws us an error. To avoid that error we use the Suspense component provided by react to wrap our originial component.

## Lesson 10

### Q. Explore all the ways of writing CSS
1. Inline style - we write the styles in the tag itself
2. Embedded style sheet - we write the style code in the style tag 
3. External Style sheet - We write all the CSS in a file and import the file in HTML
4. Frameworks - TailwindCSS

### Q. How do we configure tailwind?
We configure tailwind using the following command "npm i tailwindcss postcss" and "npx tailwindcss init"

### Q. In tailwind.config.js what do all the keys content, theme, extend, plugins mean?
1. Content - says files with what extension will be suing tail wind.
2. Theme - We specify the color palette for our application
3. Extend - This contains details about spacing, meaning setting '128' for 32 rem
4. Plugins - These are used to register new styles for tailwind to inject into the user's stylesheet using JS instead of CSS 

### Q. Why do we have .postcssrc file?
This file ensures during the build time that our tailwind css will be converted to normal css

## Lesson 11 

### Q. What is Prop Drilling?
1. Prop drilling is the concept of passing data from parent - child - grandchild - great grand child and so on.
2. Using prop drilling may cause issues in the app such as re-rendering the child component again even though there are no changes made in that particular component.

### Q. What is lifting the state up?
When the parent component manages the state of the child component it is called as lifting up the state.

### Q. What are Context Provider and Consumer
Let's say we want to access the logged in user information at multiple places in the application rather than doing prop drilling we can use Context Provider and Consumer. As the name suggests Provider provides the data to the application and Consumer utilizes it. 

### Q. If we don't pass a value to provider will it consider the default value?
No, Default value is only used when there is no matching provider for it.

## Lesson 12 
### Q. What is the difference between useContext vs Redux?
useContext is a hook where Redux is a state management library

### Q. Advantages of using Redux Toolkit over Redux
1. Redux ToolKit solves various issues by providing a hook-based implementation of Redux
2. RTK gives the ability to write mutable state updates in the reducers.
3. It also eliminates the use of extra coding by providing boilerplates.
4. RTK also has the feature of RTK query which eliminates the use of Thunks and makes the query processing faster
5. It also provides automatic support for Redux Dev-tools Extension and for immer.js library which is a great tool to deal with immutable objects.
6. You can also use the various predefined functions of Redux Toolkit which not only speeds up the process but also saves time.

### Q. Explain Dispatcher
We cannot directly modify the store. One step in modifying the store is dispatching an action

### Q. Explain Reducer
When the action is dispatched the reducer is called which them modifies the store

### Q. Explain slice
Store is one huge object and to create different categories or sections of data we use slices.

### Q. Explain Selector
TO display data from store to the UI we use something called selector. We subscribe to only the required slices from the store and use the data to display it on the UI.

### Q. Explain createSlice and the configuration it takes.
As the name suggests createSlice is a function that takes the following object 
{
   name: '',  //Name of the slice
   initialState: {}, //Initial state of the slice 
   reducers: {} //Reducers that will help modify the store
}

### To - Do
1. Image optimization - All images are called at once