import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';
import '../styles/Nav.css';

export const Nav = () => {
    const context = useContext(AccountContext);

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
                    {/* Might change later according to auth state change*/}
                    <li onClick={
                        () => {
                            context.setStatus(false);
                            context.setCurProf({});
                        }
                    }>
                        Sign Out
                    </li>
                </ul>
            </div>

        </nav>
    )
};