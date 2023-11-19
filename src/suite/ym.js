import React, { useState, useEffect } from 'react';
import YouTubePlayer from 'youtube-player'; // Assurez-vous d'avoir installé cette bibliothèque

export default function PlaylistApp() {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [playlistId, setPlaylistId] = useState(null);
  //const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Créez une instance du lecteur YouTube lorsque l'ID de la playlist est disponible
    if (playlistId) {
      const youtubePlayer = YouTubePlayer('youtube-player', {
        width: 640,
        height: 360,
        videoId: playlistId, // Utilisez l'ID de la playlist ici
      });

      // Ajoutez un gestionnaire d'erreur pour le lecteur YouTube Player
      youtubePlayer.on('error', (event) => {
        console.error('Erreur de lecture :', event.data);
      });

      setPlayer(youtubePlayer);
    }
  }, [playlistId]);

  // Fonction pour extraire l'ID de la playlist depuis un lien YouTube Music
  function extractPlaylistId(youtubeMusicLink) {
    // Exemple de lien YouTube Music : https://music.youtube.com/playlist?list=PLXXXXXXXXXX
    const regex = /list=([A-Za-z0-9_-]+)/;
    const match = youtubeMusicLink.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      // Lien invalide ou non pris en charge
      return null;
    }
  }

  // Fonction pour gérer la soumission du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    const id = extractPlaylistId(youtubeLink);
    if (id) {
      setPlaylistId(id);
    } else {
      // Gérer le cas d'un lien invalide
      alert('Lien de playlist YouTube Music invalide.');
    }
  }

  return (
    <div>
      <h1>Playlist YouTube Music</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Collez le lien de la playlist YouTube Music ici"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
        />
        <button type="submit">Afficher la playlist</button>
      </form>
      <div id="youtube-player"></div>
    </div>
  );
}

;
