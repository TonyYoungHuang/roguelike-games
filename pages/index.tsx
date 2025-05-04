import Head from 'next/head'
import Layout from '../components/Layout'
import GameCard from '../components/GameCard'
import games from '../data/games.json'

export default function Home() {
  const topGames = games.slice(0, 5)
  const newGames = games.slice(-4)

  return (
    <Layout>
      <Head>
        <title>Best Roguelike Games Online | xx</title>
        <meta name="description" content="Discover the best Roguelike games online. Play top-rated and newly released Roguelike games for free." />
        <link rel="canonical" href="https://xx/" />
      </Head>
      <section>
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Top 5 Most Popular Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {topGames.map(game => <GameCard key={game.slug} game={game} />)}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">New Games This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {newGames.map(game => <GameCard key={game.slug} game={game} />)}
        </div>
      </section>
    </Layout>
  )
}