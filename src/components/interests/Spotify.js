import { useEffect, useState } from 'react';
import { LogoLink } from 'components/common/logo-link/LogoLink';
import { AppConstants } from "components/App.constants";

const Spotify = () => {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [embeddedUrl, setEmbeddedUrl] = useState('');

  useEffect(() => {
    let playlists = AppConstants.spotifyPlaylists;
    let playlist = playlists[Math.floor(Math.random() * playlists.length)];
    setPlaylistUrl(playlist.url);
    setEmbeddedUrl(playlist.embedded);
  }, []);

  return (
    <>
      <LogoLink url={playlistUrl} src={AppConstants.spotifyLogo} text="Spotify Playlist" alt="Spotify" />
      <iframe src={embeddedUrl} width="100%"
        height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
    </>
  )
}

export { Spotify }