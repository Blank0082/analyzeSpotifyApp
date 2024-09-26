import React, { createContext, useState, useEffect } from 'react';

export const SpotifyDataContext = createContext();

export const SpotifyDataProvider = ({ children }) => {
    const [spotifyData, setSpotifyData] = useState({
        playlists: [],
        likedSongsPlaylist: {
            id: 'liked-songs',
            name: 'Liked Songs',
            images: [{ url: 'path/to/default/image' }],
            songs: []
        }
    });

    // 提供更新 Spotify 数据的方法
    const fetchSpotifyData = async (token) => {
        try {
            const playlistsResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const likedSongsResponse = await fetch('https://api.spotify.com/v1/me/tracks', {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (!playlistsResponse.ok || !likedSongsResponse.ok) {
                throw new Error('Failed to fetch data');
            }

            const playlistsData = await playlistsResponse.json();
            const likedSongsData = await likedSongsResponse.json();

            setSpotifyData(prevData => ({
                ...prevData,
                playlists: playlistsData.items,
                likedSongsPlaylist: {
                    ...prevData.likedSongsPlaylist,
                    songs: likedSongsData.items.map(item => ({
                        name: item.track.name,
                        artist: item.track.artists.map(artist => artist.name).join(", "),
                        imageUrl: item.track.album.images[0].url
                    }))
                }
            }));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            fetchSpotifyData(token);
        }
    }, []);

    return (
        <SpotifyDataContext.Provider value={{ spotifyData, fetchSpotifyData }}>
            {children}
        </SpotifyDataContext.Provider>
    );
};
