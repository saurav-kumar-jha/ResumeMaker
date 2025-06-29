import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResumeProvider } from './component/Context/resumeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ResumeProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </ResumeProvider>
)
