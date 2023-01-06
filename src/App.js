import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Lobby } from './pages/Lobby';
import { Login } from './pages/LogIn';
import { Room } from './pages/Room';
import './styles/General.css';

export const App = () => {
    return(
        <div className='main'>
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
        </div>
    )
};