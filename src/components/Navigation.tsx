import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-bold text-xl text-blue-400">
            My Blog
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}