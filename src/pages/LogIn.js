import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';
import '../styles/Login.css';

export const Login = () => {
    const context = useContext(AccountContext);
    const isSignedIn = context.isSignedIn;
    // A temporary state to trigger navigation
    const [isSignedInTemp, setIsSignedInTemp] = useState(isSignedIn);
    const googleIcon = require('../assets/google.png');
    const navigate = useNavigate();

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
                    <span onClick={
                        () => {
                            context.setStatus(true);
                            setIsSignedInTemp(true);
                            context.setCurProf({
                                name : "test",
                                profileUrl : "https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg",
                                id : "1"
                            })
                        }
                    }>Sign In</span>
                </button>
            </div>
        </div>
    )
};