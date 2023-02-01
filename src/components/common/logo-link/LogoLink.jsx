const LogoLink = ({ url, src, alt, text }) => {
  return (
    <div className="flex justify-center">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={src} alt={alt} className="h-7 mr-1" />
      </a>
      <a href={url} target="_blank" rel="noreferrer" className="text-emerald-600 hover:text-red-400 font-semibold mb-2 text-lg font-lato">
        {text}
      </a>
    </div>
  )
}

export { LogoLink }
