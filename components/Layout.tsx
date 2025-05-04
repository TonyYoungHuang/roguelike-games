import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black min-h-screen text-gray-100 font-sans">
      <Navbar />
      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  )
}