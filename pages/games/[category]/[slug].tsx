import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import games from '../../../data/games.json'

export default function GameDetail() {
  const router = useRouter()
  const { category, slug } = router.query
  const game = games.find(
    g => g.category.toLowerCase() === String(category).toLowerCase() && g.slug === slug
  )

  if (!game) return <Layout><p>Game not found.</p></Layout>

  return (
    <Layout>
      <h1>{game.title}</h1>
      {/* 其他详情内容 */}
    </Layout>
  )
}