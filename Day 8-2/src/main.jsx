import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Master from './code-splitting/Master'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Master />
    </BrowserRouter>
)
