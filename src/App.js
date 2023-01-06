import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Lobby } from './pages/Lobby';
import { Login } from './pages/LogIn';
import { Room } from './pages/Room';
import './styles/General.css';
import { AccountContext } from './context/AccountContext';
import { useState } from 'react';
import './firebase/firebase';

export const App = () => {
    
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [currentProfile, setCurrentProfile] = useState({});

    const setStatus = (bool) => {
        setIsSignedIn(bool);
    }

    const setCurProf = (prof) => {
        setCurrentProfile(prof);
    }

    return(
        <div className='main'>
            <AccountContext.Provider value ={
                {
                    isSignedIn, currentProfile, setStatus, setCurProf
                }
            }>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/login"
                            element={<Login/>}
                        />
                        <Route
                            path="/"
                            element={<Lobby/>}
                        />
                        <Route
                            path="/room/:id"
                            element={<Room/>}
                        />
                        {/*
                            404 Not Found Page
                        */}
                    </Routes>
                </BrowserRouter>
            </AccountContext.Provider>
        </div>
    )
};