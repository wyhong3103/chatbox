import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NotFound } from './pages/NotFound';
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
                            path="/chatbox/login"
                            element={<Login/>}
                        />
                        <Route
                            path="/chatbox/"
                            element={<Lobby/>}
                        />
                        <Route
                            path="/chatbox/room/:id"
                            element={<Room/>}
                        />
                        <Route
                            path="/chatbox/*"
                            element={<NotFound/>}
                        />
                    </Routes>
                </BrowserRouter>
            </AccountContext.Provider>
        </div>
    )
};