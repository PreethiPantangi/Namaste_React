### Namaste React By Akshay Saini

### Lesson 01 - Inception
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

### Lesson 01 - Igniting Our App
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


