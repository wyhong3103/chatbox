import { Link } from 'react-router-dom';
import '../styles/Nav.css';

export const Nav = () => {
    return(
        <nav>
            <div className="nav-left">
                <h1 className="title">
                    Chat Box
                </h1>
            </div>
            <div className="nav-right">
                <ul>
                    <li>
                        <Link to="/">
                            Lobby
                        </Link>
                    </li>
                    <li>
                        Sign Out
                    </li>
                </ul>
            </div>

        </nav>
    )
};