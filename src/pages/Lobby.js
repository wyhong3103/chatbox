import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Nav } from '../components/Nav';
import '../styles/Lobby.css';

export const Lobby = () => {
    // use Context later
    const [keyword, setKeyword] = useState("");
    let isSignedIn = true;

    return(
        <div className='main-cont'>
            {
                isSignedIn ?
                <div className='main-cont'>
                    <Nav/>
                    <div className='lobby-cont'>
                        <div className="lobby-flex">
                            <label htmlFor='keyword-inp'>
                                <h3>Enter a keyword to join the chat box.</h3>
                                <input
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    id="keyword-inp"
                                />
                            </label>
                            <button className='enter-btn'>
                                Enter
                            </button>
                        </div>
                    </div>
                </div>

                :

                <Navigate to="/login"/>
            }
        </div>
    ) 
};