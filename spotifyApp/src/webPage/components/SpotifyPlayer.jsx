import React from 'react';

export default function SpotifyPlayer(data) {
    const embedUrl = `https://open.spotify.com/embed/track/${data.uri.split(':')[2]}`;
    return (
        <iframe title="Spotify Music Player" src={embedUrl} allowtransparency="true"></iframe>
    );
};