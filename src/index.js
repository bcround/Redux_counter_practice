// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import App from './app/App'
import { CounterProvider } from 'redux/store'

render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
  document.getElementById('root')
)
