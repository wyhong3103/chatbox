import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Nav } from '../components/Nav';

export const Lobby = () => {
    // use Context later
    const [keyword, setKeyword] = useState("");
    let isSignedIn = true;

    return(
        <div>
            {
                isSignedIn ?
                <div>
                    <Nav/>
                    <div className='lobby-cont'>
                        <label htmlFor='keyword-inp'>
                            Enter a keyword to join a chat box.
                            <input 
                                value={keyword} 
                                onChange={(e) => setKeyword(e.target.value)}
                                id="keyword-inp"
                            />
                        </label>
                    </div>
                </div>

                :

                <Navigate to="/login"/>
            }
        </div>
    ) 
};