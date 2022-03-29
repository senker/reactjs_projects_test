1. Why NodeJS on frontend? 
Code written in javascript is interpretted by the browser(chrome)
Code written in javascript can be also interpretted by node JS.
The thing the have in common is the V8 engine.

NodeJs is a platform that understands javascript and uses it for its goals.
NodeJs is used for work with files, databases.

Node.js server javascript

npm install --- -save (saves it in the package.json)

gitk --all&

git checkout SHAID
git status

git checkout sec/App.js (will revert the file to the original state of the version of commit)

.map accepts arrow function where it can be defined how to affect the old array towards a new array
For example it can be an if statement which determines whether the elements of the old array meet a specific rule and transform according to the statement written in successfully or unsuccessful pass through the if statement.

example:
```js 
oldArray = ["dmitry", "vasily", "dmitry", "lera"];
let newArray = oldArray.map((el) => {
  if (el == "dmitry") {
    return 1;
  } else {
    return 0;
  }
});
console.log(newArray)

Result [1, 0, 1, 0]
```

Another way of writing the if statement(more advanced !tobeused)
```js
oldArray = ["kokos", "dmitry", "vasily", "lera"];
let newArray = oldArray.map(name => {
  return name == "dmitry" ? 1 : 0
});
console.log(newArray)

Result [0, 1, 0, 0]
```
(if there is one elements its not necessary to put the brackets (name) = name)
another example of adding list item tag to every element in the array 
```js
oldArray = ["kokos", "dmitry", "vasily", "lera"];
let newArray = oldArray.map(name => {
  return "<li>" + name + "</li>"
});
console.log(newArray)

Result ["<li>kokos</li>, <li>dmitry</li>, <li>vasily</li>, <li>lera</li>"]
```

jsx syntax
```js
oldArray = ["kokos", "dmitry", "vasily", "lera"];
let newArray = oldArray.map(name => {return `<li>${name}</li>`;});
console.log(newArray)
```

BrowserRouter
It uses history API, i.e. it's unavailable for legacy browsers (IE 9 and lower and contemporaries). Client-side React application is able to maintain clean routes like example.com/react/route but needs to be backed by web server. Usually this means that web server should be configured for single-page application, i.e. same index.html is served for /react/route path or any other route on server side. On client side, window.location.pathname is parsed by React router. React router renders a component that it was configured to render for /react/route.

Additionally, the setup may involve server-side rendering, index.html may contain rendered components or data that are specific to current route.

HashRouter
It uses URL hash, it puts no limitations on supported browsers or web server. Server-side routing is independent from client-side routing.

Backward-compatible single-page application can use it as example.com/#/react/route. The setup cannot be backed up by server-side rendering because it's / path that is served on server side, #/react/route URL hash cannot be read from server side. On client side, window.location.hash is parsed by React router. React router renders a component that it was configured to render for /react/route, similarly to BrowserRouter.

Most importantly, HashRouter use cases aren't limited to SPA. A website may have legacy or search engine-friendly server-side routing, while React application may be a widget that maintains its state in URL like example.com/server/side/route#/react/route. Some page that contains React application is served on server side for /server/side/route, then on client side React router renders a component that it was configured to render for /react/route, similarly to previous scenario.
