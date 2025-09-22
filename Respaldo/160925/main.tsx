import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/App.tsx'
import Endodoncia from './pages/Endodoncia.tsx'
import OdontologiaGeneral from './pages/OdontologiaGeneral.tsx'
import Ortodoncia from './pages/ortodoncia.tsx'
import Periodoncia from './pages/Periodoncia.tsx'
import RestauradoraAvanzada from './pages/Restauradora_avanzada.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/endodoncia" element={<Endodoncia />} />
        <Route path="/odontologia-general" element={<OdontologiaGeneral />} />
        <Route path="/ortodoncia" element={<Ortodoncia />} />
        <Route path="/periodoncia" element={<Periodoncia />} />
        <Route path="/restauradora-avanzada" element={<RestauradoraAvanzada />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
