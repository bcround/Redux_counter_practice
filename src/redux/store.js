import { Provider } from 'react-redux'
import rootReducer from './storage'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export const CounterProvider = (props) => {
  return <Provider store={store} {...props} />
} 