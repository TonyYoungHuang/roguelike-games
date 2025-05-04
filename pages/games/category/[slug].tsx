import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import GameIframe from '../../../components/GameIframe'
import GameCard from '../../../components/GameCard'
import games from '../../../data/games.json'

export default function GameDetail() {
  const router = useRouter()
  const { category, slug } = router.query
  const game = games.find(g => g.category === category && g.slug === slug)

  if (!game) return <Layout><p>Game not found.</p></Layout>

  return (
    <Layout>
      <Head>
        <title>{game.title} Online | xx</title>
        <meta name="description" content={`Play ${game.title} online for free. Discover its features, gameplay, and advantages.`} />
        <link rel="canonical" href={`https://xx/games/${game.category}/${game.slug}`} />
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">{game.title} Online</h1>
      <div className="mb-6 flex flex-wrap gap-4">
        {game.screenshots.map((src: string, i: number) => (
          <img key={i} src={src} alt={`${game.title} Screenshot ${i+1}`} className="rounded w-48 aspect-video object-cover" />
        ))}
      </div>
      <GameIframe src={game.iframeUrl} title={`Play ${game.title} Online`} />
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How to Play {game.title}</h2>
        <p>{game.howToPlay}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Advantages of {game.title}</h2>
        <ul className="list-disc pl-6">
          {game.advantages.map((adv: string, i: number) => <li key={i}>{adv}</li>)}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Features of {game.title}</h2>
        <ul className="list-disc pl-6">
          {game.features.map((f: string, i: number) => <li key={i}>{f}</li>)}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How {game.title} Works & Gameplay</h2>
        <p>{game.gameplay}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <dl>
          {game.faq.map((item: any, i: number) => (
            <div key={i}>
              <dt className="font-bold">Q: {item.q}</dt>
              <dd className="mb-2">A: {item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Explore More Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {games.filter(g => g.category === category && g.slug !== slug).slice(0, 4).map(g => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>
    </Layout>
  )
}