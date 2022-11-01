import Articles from "./Articles";
import Issues from "./Issues";
import './App.css';
import React, { lazy, Suspense } from "react";
import SideBar from "./SideBar";
import { Route, Routes, useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

function errorBoundaryFallback(sendEventHandler) {
    return ({ error }) => {
        console.warn(error)
    };
}

function App() {
    return (
        <ErrorBoundary FallbackComponent={errorBoundaryFallback} >
            <div className="App">
                <SideBar></SideBar>
                <Routes>
                    <Route element={<Articles/>} path={'articles/*'}/>
                    <Route element={<Issues/>} path={'issues/*'}/>
                </Routes>
            </div>
        </ErrorBoundary>

    );
}

export default App;
