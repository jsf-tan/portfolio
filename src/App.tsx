import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
