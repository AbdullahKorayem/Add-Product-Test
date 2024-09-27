import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductsContext'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProductProvider>
            <App />
        </ProductProvider>
    </StrictMode>,
)