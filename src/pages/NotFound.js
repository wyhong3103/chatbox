import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

export const NotFound = () => {
    
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }

    return(
        <div className="not-found-cont">
            <h3>
                Page Not Found!
            </h3>
            <h3>Go back to <button onClick={toHome}>Home</button></h3>
        </div>
    )
};