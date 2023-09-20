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
