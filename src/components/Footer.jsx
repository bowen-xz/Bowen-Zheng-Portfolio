import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3 text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:4253956356" className="hover:text-gray-900 transition-colors">
            425-395-6356
          </a>
          <a href="mailto:bowen.xz@outlook.com" className="hover:text-gray-900 transition-colors">
            bowen.xz@outlook.com
          </a>
          <a
            href="https://www.linkedin.com/in/bowen-zheng/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Bowen Zheng</p>
      </div>
    </footer>
  )
}
