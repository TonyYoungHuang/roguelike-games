import Link from 'next/link'

export default function GameCard({ game }: { game: any }) {
  return (
    <Link href={`/games/${game.category}/${game.slug}`} className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition">
      <img src={game.thumbnail} alt={game.title} className="rounded mb-2 w-full aspect-video object-cover" />
      <h3 className="text-lg font-bold">{game.title}</h3>
    </Link>
  )
}