import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import '../styles/Login.css';

export const Login = () => {
    const context = useContext(AccountContext);
    const isSignedIn = context.isSignedIn;

    // A temporary state to trigger navigation
    const [isSignedInTemp, setIsSignedInTemp] = useState(isSignedIn);

    const googleIcon = require('../assets/google.png');
    
    // Navigator
    const navigate = useNavigate();
    
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

    useEffect(() => {
        if (isSignedInTemp){
            navigate('/');
        }
    }, [isSignedInTemp])

    return(
        <div className="login-cont">
            <h1>Chat Box</h1>
            <div className="login-box">
                <h3>Please sign in with your google account to continue.</h3>
                <button>
                    <div className="img-box">
                        <img src={googleIcon} alt="Google Icon"/>
                    </div>
                    {/* Might change later according to auth state change*/}
                    <span onClick={signIn}>Sign In</span>
                </button>
            </div>
        </div>
    )
};