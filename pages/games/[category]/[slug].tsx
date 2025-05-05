import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import games from '../../../data/games.json'

export default function GameDetail() {
  const router = useRouter()
  const { category, slug } = router.query
  const game = games.find(
    g => g.category.toLowerCase() === String(category).toLowerCase() && g.slug === slug
  )

  // 调试用
  console.log('game:', game);

  if (!game) return <Layout><p>Game not found.</p></Layout>

  return (
    <Layout>
      <h1>{game.title}</h1>
      {game.iframeUrl ? (
        <iframe
          src={game.iframeUrl}
          title={game.title}
          width="100%"
          height="600"
          style={{ border: 'none', background: '#fff' }}
          allowFullScreen
        />
      ) : (
        <div style={{ color: 'white' }}>该游戏暂无试玩链接</div>
      )}
    </Layout>
  )
}