import React, {useState, useEffect, useCallback} from 'react';
import Navbar from "./components/Navbar";
import PlaylistItem from "./components/PlaylistItem";
import {useNavigate} from "react-router-dom";
import RecommendedSongsModal from "./components/RecommendedSongsModal";

export default function PlaylistSelector() {
    const navigate = useNavigate();
    const [playlists, setPlaylists] = useState([]);
    const [openPlaylistId, setOpenPlaylistId] = useState(null);
    const [playingUri, setPlayingUri] = useState(null);
    const token = localStorage.getItem('access_token');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const fetchPlaylists = useCallback(() => {
        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    navigate('/login');
                    localStorage.removeItem('token');
                    throw new Error('Unauthorized');
                } else {
                    throw new Error('Failed to fetch playlists');
                }
            })
            .then(data => setPlaylists(data.items))
            .catch(error => {
                console.error(error);
                setPlaylists(null);
            });
    }, [token, navigate]);

    const handleToggle = (playlistId) => {
        setOpenPlaylistId(openPlaylistId === playlistId ? null : playlistId);
    };

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }
        fetchPlaylists();
        const intervalId = setInterval(fetchPlaylists, 600000);
        return () => clearInterval(intervalId);
    }, [token, navigate, fetchPlaylists]);

    return (<div>
        <Navbar showRecommended={openModal}/>
        <div className="list-container">
            <h2>Your Playlists</h2>
            點擊圖片選擇你的音樂清單。
            {playlists && playlists.length > 0 ? (playlists.map(
                playlist => (<PlaylistItem
                    key={playlist.id}
                    playlist={playlist}
                    token={token}
                    isOpen={playlist.id === openPlaylistId}
                    onToggle={handleToggle}
                    playingUri={playingUri}
                    setPlayingUri={setPlayingUri}
                />))) : (<div>No playlists found.</div>)}
        </div>
        <RecommendedSongsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
    </div>);
}