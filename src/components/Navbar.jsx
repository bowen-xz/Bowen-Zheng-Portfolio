import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isBlogPost = pathname !== '/'
  const backTarget = pathname === '/curling' ? '/#projects' : '/#experience'

  return (
    <>
      {isBlogPost && (
        <Link
          to={backTarget}
          aria-label="Back to portfolio"
          className="fixed top-28 left-8 lg:left-16 z-[60] flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-500 text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors bg-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
      )}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="px-8 lg:px-16 h-16 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-900 tracking-tight">
            <span id="nav-yellow-dot" className="w-5 h-5 rounded-full bg-amber-400 flex-shrink-0" />
            Bowen Zheng
          </Link>
        </div>
      </header>
    </>
  )
}
