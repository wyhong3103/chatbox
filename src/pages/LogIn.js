import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import '../styles/Login.css';

export const Login = () => {
    const chatBubble = require('../assets/chatBubble.png');
    const googleIcon = require('../assets/google.png');
    
    // Context
    const context = useContext(AccountContext);
    const isSignedIn = context.isSignedIn;
    
    // Navigator
    const navigate = useNavigate();

    // A temporary state to trigger navigation
    const [isSignedInTemp, setIsSignedInTemp] = useState(isSignedIn);
    
    // Firebase Auth
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signIn = () => {
        signInWithPopup(auth, provider).then(
            (result) => {
                context.setStatus(true);
                setIsSignedInTemp(true);
                context.setCurProf(
                    {
                        name : result.user.displayName,
                        profileURL : result.user.photoURL,
                        uid : result.user.uid
                    }
                );
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    // React hook to trigger navigation if signed in
    useEffect(() => {
        if (isSignedInTemp){
            navigate('/');
        }
    }, [isSignedInTemp])

    return(
        <div className="login-cont">
            <h1>Chat Box <img className='login-icon' src={chatBubble} alt='Chat Bubble'/></h1>
            <div className="login-box">
                <h3>Please sign in with your google account to continue.</h3>
                <button>
                    <div className="img-box">
                        <img src={googleIcon} alt="Google Icon"/>
                    </div>
                    <span onClick={signIn}>Sign In</span>
                </button>
            </div>
        </div>
    )
};