import React from 'react';

export default function LikedSongItem({ song }) {
    return (
        <div className="liked-song-item">
            <div className="song-cover">
                <img src={song.album.images[0].url} alt={song.name} />
            </div>
            <div className="song-info">
                <h4>{song.name}</h4>
                <p>{song.artists.map(artist => artist.name).join(', ')}</p>
            </div>
        </div>
    );
}