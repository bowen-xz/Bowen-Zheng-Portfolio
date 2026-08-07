import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isBlogPost = pathname !== '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="px-8 lg:px-16 h-16 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-900 tracking-tight">
          <span id="nav-yellow-dot" className="w-5 h-5 rounded-full bg-amber-400 flex-shrink-0" />
          Bowen Zheng
        </Link>
        {isBlogPost && (
          <Link
            to="/#experience"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            ← Portfolio
          </Link>
        )}
      </div>
    </header>
  )
}
