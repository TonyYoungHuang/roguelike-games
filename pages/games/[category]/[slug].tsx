import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import games from '../../../data/games.json'

export default function GameDetail() {
  const router = useRouter()
  const { category, slug } = router.query
  const [showIframe, setShowIframe] = useState(false)
  
  const game = games.find(
    g => g.category.toLowerCase() === String(category).toLowerCase() && g.slug === slug
  )

  if (!game) return <Layout><p>Game not found.</p></Layout>

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
      
      <div className="relative rounded-lg overflow-hidden bg-gray-800 w-full aspect-video flex items-center justify-center">
        {!showIframe ? (
          <div className="text-center">
            <img 
              src={game.thumbnail || `/icons/${game.slug}.jpg`} 
              alt={game.title} 
              className="w-32 h-32 mx-auto mb-4 rounded"
            />
            <h2 className="text-xl mb-4">{game.title}</h2>
            <button 
              onClick={() => setShowIframe(true)}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded text-lg font-bold"
            >
              Play
            </button>
          </div>
        ) : (
          <iframe
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full"
            style={{ minHeight: "500px" }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      {/* 游戏其他信息 */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">游戏介绍</h2>
        <p>{game.howToPlay || '暂无介绍'}</p>
      </div>
    </Layout>
  )
}