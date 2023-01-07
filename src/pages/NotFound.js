import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

export const NotFound = () => {
    
    const chatBubble = require('../assets/chatBubble.png');
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/chatbox/');
    }

    return(
        <div className="not-found-cont">
            <h1>
                Chat Box <img className="not-found-icon" src={chatBubble} alt="Chat Bubble"/>
            </h1>
            <h3>
                Page not found! Go back to <button onClick={toHome}>Home</button>
            </h3>
        </div>
    )
};