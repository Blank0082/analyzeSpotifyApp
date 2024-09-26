import React from 'react';
import Navbar from "./components/Navbar";
export default function Home() {
    return (
        <div className="home">
            <div className="background_container"></div>
            <div className="title">
                <Navbar/>
                <p className="first_p">享受您的音樂，立即登入</p>
            </div>
        </div>
    )
}