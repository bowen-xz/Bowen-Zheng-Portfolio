import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HEMIPost from './pages/blog/HEMIPost'

function ScrollToTop() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])
  return null
}

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/hemi" element={<HEMIPost />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/Bowen-Zheng-Portfolio">
      <Layout />
    </BrowserRouter>
  )
}
