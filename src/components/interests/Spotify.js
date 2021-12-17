import { LogoLink } from 'components/common/logo-link/LogoLink';
import { AppConstants } from "components/App.constants";

const Spotify = () => {
  return (
    <div>
      <LogoLink url={AppConstants.spotifyPlaylistUrl} src={AppConstants.spotifyLogo} text="Spotify Playlist" alt="Spotify"/>
      <iframe src={AppConstants.spotifyEmbeddedUrl} width="100%"
        height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
    </div>
  )
}

export { Spotify }
