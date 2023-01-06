import '../styles/Login.css';

export const Login = () => {
    
    const googleIcon = require('../assets/google.png');

    return(
        <div className="login-cont">
            <h1>Chat Box</h1>
            <div className="login-box">
                <h3>Please sign in with your google account to continue.</h3>
                <button>
                    <div className="img-box">
                        <img src={googleIcon} alt="Google Icon"/>
                    </div>
                    <span>Sign In</span>
                </button>
            </div>
        </div>
    )
};