In this file I will write down all of the notes which I have gathered from the process of learning react.js

1. Module introduction:
We will learn how to create Component-Driven User Interfaces
Building Interactive & Scalable UIs
We will go through React Core Syntax & JSX
Working with components
Working with Data
Everything will be problem based - projects will be built in order to understand the concepts better.
The first prepared project for the course will be an application which will provide user an overview of the expenses during an year. It will be possible to change between the years with a very nice and smooth transition. And it will be possible to add a new expense by choosing the title of it, amount of money and the date.

2. What are components? And why is react all about them?
React is a JavaScript library for building user interfaces
HTML, CSS & JavaScript are about building user interfaces as well
React makes building complex, interactive and reactive user interfaces simpler.
To make everything easier for the user, react is all about "Components"
What is a "Component"?
Because all user interfaces in the end are made up of components.
Components are reusable building blocks in your user interface
They are a combiantion of HTML code, CSS code for styling and JavaScript code for logic.
Its one of its traits that it is reusable, you don't have to make it reusable.
Why Components?
Because of its reusability aspect which helps with not repeating yourself, separation of concerns helps with keeping the code base small and manageable, instead of having one large file holding all html code and all the javascript logic for the entire user interface we have small separate units of these components where each one of them has one clear concern, one specific task it focuses on, then after we will have small pieces of code which the system will be made of which will be easy to manage and maintain.
Main idea behind it is to split big chunks of code into multiple smaller functions.

3. React code is written in a "Declarative Way!"
User interfaces are in the end made out of HTML, CSS and JavaScript.
And all of the components are about combining all of the languages together.
When we work with react and we build components then we do just that (combining the 3 together in all these components and then we combine all of these components to built the user interface) - P.s. *CSS considered least important part from the 3*
React uses an "Declarative approach" for building these components
The desired target state will be defined and it will be let to React figure out the actual JavaScript DOM instructions.

4. Creating a new React Project
Choose the desired folder where you want to create the project:
run: npx create-react-app my-name
npm install will install all of the dependencies on a clean project and npm run will start the project itself. Close the running process in the terminal only when you are done with it.

5. Analyzing a Standard react project
Whenever importing something in a file, if it is a js file then the extension should be omitted, if it is .css for example, then it should be kept there.
App is considered a component which changes according to the needs of the developer

6. Introducing JSX
JSX stands for JavaScriptXML - Html in the end is XML
Code wrote in a JSX file may contain weird syntax which would not work outside the react.
But because of the services running behind the scenes, react is responsible for converting it to elements that can be interracted with.

7. How react works
Component - custom html element

In javascript it would take much more code to write a single line to display on the UI which would look something like:
const para = document.createElement('p');
para.textContent = 'This is also visible';
document.getElementById('root').append(para);  (following an imperative approach, because you give clear step-by-step instructions what javascript and the browser should be doing. Following such an approach can turn very difficult to manage and having to write all of these instructions can be very cumbersome(large or heavy))

While with help of react all of that happens in the background which saves a lot of space and offers possibilities of developing better looking and better written UIs.

8. Building first custom component
In react you practically build a component tree which changes from file to file and also the complexity of it is different everywhere, but the more it is split the better it is.

For example <App/> component can be composed out of <Header/> component and a <Tasks/> component
Where <Tasks/> can hold other pieces of user interface like <Task/> <Task/> etc.
Usually the top component is rendered directly into single HTML page which in the example presented about would be the <App/> component.

A component in react is just a simple javascript function. Special kind of function, special regarding what it returns.

Simple rule which react applies is that lowercase elements are built in html elements so it will look for them as built in elements where elements starting with upper case character are elements defined by the developer.

One div is a root element and two divs are 2 root elements, only one root element can be returned.

First quiz:
1. Which kind of code do you write when using React.js?
Answer: Declarative JavaScript Code
That's correct! With React.js, you define the "goal" (i.e. what should be shown on the screen) and let React figure out how to get there.

2. What is "JSX"?
Answer: It's a special, non-standard syntax which is enabled in React projects
That's correct! React projects like the ones we create via "create-react-app" support JSX syntax. It gets compiled to standard JS code behind the scenes.

3. Why is React all about "Components"?
Answer: Every UI in the end up is made up of multiple building blocks (=components), hence it makes sense to think about user interfaces as "combinations of components"
That's correct! "Components" are really just a way of thinking about user interfaces. React embraces that concept and gives you tools to build components that you can then combine.

4. What does "declarative" mean?
Answer: You define the desired outcome (e.g. a target UI) and let the library(React) figure out the steps.
That's correct! You define the target "state" (UI) and React figures out which JS commands need to be executed to bring that result to life.

5. What is a "React Component"?
Answer: It's a JavaScript function which typically returns HTML(JSX) code the should be displayed.
That's correct. A component is just that: A JS function that typically returns some HTML (or, to be precise: JSX) code which will be shown on the screen when that component is used.

6. How many custom React components must a React app have?
Answer: That's totally up to you.
That's correct! You can have as many React components as you want / need.

7. Which statement is correct?
Answer: With React, you build a component tree with one root component that's mounted into a DOM node.
That's correct! You build a component tree that has one root node.

8. What does "component tree" mean?
Answer: It means that you have a root node which then has more components nested beneath it.
That's correct! You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.

9. How do you pass data between components?
Answer: Via "custom HTML attributes" (better known as "props")
That's correct! You build your own "HTML elements" in the end, hence you can also define your own attributes (called "props" in React's world)

10. How can you output dynamic data in React components (i.e. in the returned JSX code)?
Answer: You can use single curly braces (opening & closing) with any JS expression between them.
That's correct. You can't put block statements (e.g. if statements) between those curly braces but you can output any result of any JS expression by using this special feature.

Notes: You can mount multiple component trees into multiple DOM nodes (i.e. multiple ReactDOM.render(...) calls) but you can't have adjacent component trees in the same root node.

Work with states.
Hooks must be called only inside react component functions. They cannot be called outside react component functions. Also they cannot be called inside any nested functions.

useState always returns 2 elements where the first one is the current value and the second value is the value that is to be changed.

State is always separated from one component to another.

State can be updated in many ways!
Thus far, we update our state upon user events (e.g. upon a click).

That's very common but not required for state updates! You can update states for whatever reason you may have.

Later in the course, we'll see Http requests that complete (where we then want to update the state based on the Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.

Redux learning - 34, 37, 38, 39, 42, 43, 45 (russian language)
Playlist reference - https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8