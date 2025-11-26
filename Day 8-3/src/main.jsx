import { createRoot } from 'react-dom/client'
// import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Master from './components/Master'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Navbar />
        <Master />
    </BrowserRouter>
)
