import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-white">xx</Link>
        <ul className="flex space-x-6">
          <li><Link href="/games/roguelike/" className="hover:text-yellow-400">Roguelike</Link></li>
          <li><Link href="/games/action/" className="hover:text-yellow-400">Action</Link></li>
          <li><Link href="/games/adventure/" className="hover:text-yellow-400">Adventure</Link></li>
        </ul>
        <form action="/search" method="get" className="flex">
          <input type="text" name="q" placeholder="Search games..." className="rounded-l px-3 py-1 bg-gray-800 text-white focus:outline-none" />
          <button type="submit" className="bg-yellow-500 text-black px-4 py-1 rounded-r hover:bg-yellow-400">Search</button>
        </form>
      </div>
    </nav>
  )
}