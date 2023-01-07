import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { AccountContext } from '../context/AccountContext';
import '../styles/Lobby.css';

export const Lobby = () => {
    // Context
    const context = useContext(AccountContext);
    const isSignedIn = context.isSignedIn;

    // Navigator
    const navigate = useNavigate();

    // Input State
    const [keyword, setKeyword] = useState("");

    const toRoom = () => {
        navigate(`/chatbox/room/${keyword}`);
    }

    // Trigger navigation when enter is pressed and
    // only when keyword doesn't just consist of whitespace
    const handleKeyPress = (key) => {
        if (keyword.trim() === "") return;
        if (key === "Enter"){
            toRoom();
        }
    }

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
                                    onKeyDown={(e) => handleKeyPress(e.key)}
                                    id="keyword-inp"
                                />
                            </label>
                            <button className='enter-btn' onClick={toRoom}>
                                Enter
                            </button>
                        </div>
                    </div>
                </div>

                :

                <Navigate to="/chatbox/login"/>
            }
        </div>
    ) 
};