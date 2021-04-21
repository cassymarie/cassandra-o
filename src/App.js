import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import BlogPage from './containers/BlogPage'
import HomePage from './containers/HomePage'
import ProjectPage from './containers/ProjectPage'
import FunPage from './containers/FunPage'

import '../src/styles/App.css'

class App extends Component {
  render (){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/projects" component={ProjectPage}></Route>
          <Route exact path="/blog" component={BlogPage}></Route>
          <Route exact path="/justfun" component={FunPage}></Route>
        </Switch>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
