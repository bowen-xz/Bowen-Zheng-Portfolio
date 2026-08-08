import { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HEMIPost from './pages/blog/HEMIPost'
import CurlingPost from './pages/blog/CurlingPost'
import UnionLinkPost from './pages/blog/UnionLinkPost'

function ScrollToTop() {
  const { hash } = useLocation()

  // useLayoutEffect fires before the browser paints, so when we land on a
  // hash (e.g. the back button returning to #experience) the page appears
  // already positioned there — no flash of the top of the page, no scroll
  // animation.
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])
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
          <Route path="/curling" element={<CurlingPost />} />
          <Route path="/union-link" element={<UnionLinkPost />} />
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
