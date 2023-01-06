export const Login = () => {
    
    const googleIcon = require('../assets/google.png');

    return(
        <div className="login-cont">
            <h3>Please sign in with your google account to continue.</h3>
            <button>
                <img src={googleIcon} alt="Google Icon"/>
                <span>Sign In</span>
            </button>
        </div>
    )
};