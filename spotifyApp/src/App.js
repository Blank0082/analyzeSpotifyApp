import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import('./webPage/Home'));
const Login = lazy(() => import('./webPage/Login'));
const PlaylistSelector = lazy(() => import('./webPage/PlaylistSelector'));
const Callback = lazy(() => import('./webPage/Callback'));
const ErrorPage = lazy(() => import('./webPage/error/errorPage'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/playlists" element={<PlaylistSelector />} />
                <Route path="/callback" element={<Callback />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
}

export default App;