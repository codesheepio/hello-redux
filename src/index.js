import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './containers/Counter'
import rootReducer from './reducers'
import './style.css'

const initialState = { counter: 100 }

const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default

    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(
  <Provider store={store}>
    <Counter label="I'm a counter" />
  </Provider>,
  document.getElementById('react-root')
)
