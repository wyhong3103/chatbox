import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Lobby } from './pages/Lobby';
import { Login } from './pages/LogIn';
import { Room } from './pages/Room';
import './styles/General.css';
import { AccountContext } from './context/AccountContext';
import { useState } from 'react';

export const App = () => {
    
    const [isSignedIn, ,setIsSignedIn] = useState(false);
    const [currentProfile, ,setCurrentProfile] = useState({});

    return(
        <div className='main'>
            <AccountContext.Provider value ={
                {
                    isSignedIn, currentProfile
                }
            }>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/login"
                            element={<Login setSigned={setIsSignedIn} setCurProfile={setCurrentProfile}/>}
                        />
                        <Route
                            path="/"
                            element={<Lobby setSigned={setIsSignedIn} setCurProfile={setCurrentProfile}/>}
                        />
                        <Route
                            path="/room/:id"
                            element={<Room setSigned={setIsSignedIn} setCurProfile={setCurrentProfile}/>}
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