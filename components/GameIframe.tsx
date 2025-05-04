export default function GameIframe({ src, title }: { src: string; title: string }) {
  return (
    <div className="w-full aspect-video mb-8 rounded overflow-hidden border-2 border-gray-700">
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        style={{ minHeight: 400 }}
      ></iframe>
    </div>
  )
}