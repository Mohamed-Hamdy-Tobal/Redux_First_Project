import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux'
import { store } from './Store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
            <App />
      </Provider>
      ,
)