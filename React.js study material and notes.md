React.js study material and notes

*Session 1*

What will be studied during this course
Main concepts
Controlling State + lifecycle of the component
UI component library
Navigation between pages(Transition)
Sorting/Search
Work with the server
Modal windows
Pagination
Infinite feed
Customizable hooks, reusing functional

React - library for creating ui
Independent from browser - React DOM(responsible for rendering and components etc.)
Can make apps on android and ios and even windows
Multipage application -
Different pages containing very much repetitive code which are being always loaded fully when clicked, a pretty inneficient way of using the computer power.
Single page application -
index.html - has all of the repetitive information(top bars, footer)
All of the components contained within the page come from JavaScript
When first opened might take sadly more time but afterwards it would work very fast and efficiently. It is possible to fix this first load delay, set the web pack correctly, use something called lazy loading etc.
React - Component approach

<App /> -> <PostList />  ->  <PostItem />
		
		-> <PostForm /> -><Button />
		-> <PostForm /> -><Input />

DOM - tree takes care to put all of the right information in the special specified places by the user.

React CORE is responsible for Reconciliation which takes the decision whether how the new changes should be arranged on the element tree. It also takes the render to happen. React DOM, React native is responsible for Render.

Main learning goals during react learning process:
1. Basic concepts
2. State control + component life cycle
3. UI component library
4. onpage navigation
5. sort/search
6. work with server
7. modal windows
8. pagination(space entry)
9. infinite scroll
10. custom hooks, reusable functionality

React - library for creation of user interfaces
Single page application - page stays, elements on the page are changing (a base html file which shows data from JS is used and the contents of it change as the buttons are clicked
Site might load harder because there is a lot of data which is being loaded - Webpack setting, using lazy loading(optimization variants))
Multi page application -  more html files for different pages

Research - DOM Tree; Virtual DOM; React CORE(reconciiliation); React DOM, React native(render); Progressive page application; 


React hooks -
useState()
useEffect()
useRef()
useMemo()
useCallback()
useContext()