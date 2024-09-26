import React, { useState } from 'react';
import '../css/PlaylistItem.css';
import SpotifyPlayer from '../components/SpotifyPlayer';

export default function PlaylistItem({ playlist, token, isOpen, onToggle, playingUri, setPlayingUri }) {
    const [songs, setSongs] = useState([]);
    const [songTotal, setSongTotal] = useState();

    const fetchSongs = async () => {
        if (!isOpen && songs.length === 0) {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setSongTotal(data.total);
            setSongs(data.items.map(item => ({
                name: item.track.name,
                artist: item.track.artists.map(artist => artist.name).join(", "),
                imageUrl: item.track.album.images[0].url,
                uri: item.track.uri
            })));
        } else {
            setPlayingUri(null);
        }
        onToggle(playlist.id);
    };
    const togglePlay = (uri) => {
        setPlayingUri(playingUri === uri ? null : uri);
    };
    const handleNextStep = async (playlistId) => {
        const response = await fetch('http://localhost:3001/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playlistId)
        });

        const data = await response.json();
        sessionStorage.setItem('recommendedSongs', JSON.stringify(data.return));
        console.log(data);
    };


    return (
        <div className="playlist-item">
            <button onClick={fetchSongs} className="playlist-button">
                {playlist.images && (
                    <img src={playlist.images[0].url} alt={playlist.name} />
                )}
                <div style={{ color: 'white' }}>{playlist.name}</div>
            </button>
            {isOpen && (
                <div className="playlist-container">
                    <div className={`songTotal`}>總共{songTotal}首歌曲，點擊下一步即可幫你尋找你可能喜歡的歌曲！</div>
                    {songTotal > 0 ? (
                        <div className="songs-list">
                            {songs.map((song, index) => (
                                <div key={index} className="song-item">
                                    <img src={song.imageUrl} alt={song.name} />
                                    <div className="song-info">
                                        <p>{song.name}</p>
                                        <p>{song.artist}</p>
                                        <button onClick={() => togglePlay(song.uri)}
                                            className={`button ${playingUri === song.uri ? 'playing' : ''}`}>
                                            {playingUri === song.uri ? '取消' : '試聽'}
                                        </button>
                                        {playingUri === song.uri && SpotifyPlayer(song.uri)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                    {songTotal > 0 && (
                        <button onClick={() => handleNextStep(playlist.id)}
                            className={`button next-button`}>下一步
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
