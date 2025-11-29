import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import Shop from './Shop'
import cakeStore from './redux/cakeStore'

createRoot(document.getElementById('root')).render(
    <Provider store={cakeStore}>
        <Shop />
    </Provider>
)
