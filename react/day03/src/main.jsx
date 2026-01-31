
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Mainlayout from './layout/Mainlayout'
import { Provider } from 'react-redux'
import { myStore } from './store'

createRoot( document.getElementById( 'root' ) ).render(

  <Provider store={myStore}>
    <Mainlayout />
  </Provider>
  ,
)
