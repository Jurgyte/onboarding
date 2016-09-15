import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from './reducers'
import App from './components/App'

// let store = createStore(todoApp)

render((
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  ),
  document.getElementById('root'))
