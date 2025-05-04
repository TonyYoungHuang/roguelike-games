import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import GameCard from '../../../components/GameCard'
import games from '../../../data/games.json'

export default function CategoryPage() {
  const router = useRouter()
  const { category } = router.query
  const filteredGames = games.filter(g => g.category === category)

  return (
    <Layout>
      <Head>
        <title>{category} Games | xx</title>
        <meta name="description" content={`Play the best ${category} games online for free.`} />
        <link rel="canonical" href={`https://xx/games/${category}/`} />
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-yellow-400 capitalize">{category} Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredGames.map(game => <GameCard key={game.slug} game={game} />)}
      </div>
    </Layout>
  )
}