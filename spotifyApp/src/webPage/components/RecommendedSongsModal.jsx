import React, { useState, useEffect } from 'react';
import SpotifyPlayer from "./SpotifyPlayer";
import "../css/RecommendedSongsModal.css";

export default function RecommendedSongsModal({ isOpen, onClose }) {
    const [recommendedSongs, setRecommendedSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const storedSongs = JSON.parse(sessionStorage.getItem('recommendedSongs') || '[]');
            setRecommendedSongs(storedSongs);
        }
    }, [isOpen]);

    const handlePrevious = () => {
        setCurrentSongIndex((prev) => (prev > 0 ? prev - 1 : recommendedSongs.length - 1));
    };

    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev < recommendedSongs.length - 1 ? prev + 1 : 0));
    };
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={onClose}>關閉</button>
            <div className="songs-container">
                {recommendedSongs.length > 0 ? (
                    <>
                        <div>已推薦{recommendedSongs.length}首歌曲，目前在第{currentSongIndex + 1}首歌曲。</div>
                        <SpotifyPlayer uri={recommendedSongs[currentSongIndex]} />
                        <div className="navigation-buttons">
                            <button onClick={handlePrevious}>上一首</button>
                            <button onClick={handleNext}>下一首</button>
                        </div>
                    </>
                ) : <div>目前沒有推薦任何歌曲，請先選擇你的播放清單。</div>}
            </div>
        </div>
    );

}