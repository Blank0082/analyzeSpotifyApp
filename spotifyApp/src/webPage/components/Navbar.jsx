import React from 'react';
import { Link } from 'react-router-dom';
import '../css/script.css';
import logo from "../img/logo.jpg";
export default function Navbar({ showRecommended }) {
    return (
        <nav>
            <div className="logo-container">
                <img alt="" className="logo_img" src={logo}></img>
                <Link to="/login" className="btn_style">登入</Link>
                {showRecommended && <button className="btn_style" onClick={showRecommended}>已推薦歌曲</button>}
                <Link to="/playlists" className="btn_style">推薦歌曲</Link>
                <Link to="/" className="btn_style">首頁</Link>
            </div>
        </nav>
    );
}