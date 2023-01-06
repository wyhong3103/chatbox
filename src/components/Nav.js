import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';
import { getAuth, signOut } from 'firebase/auth';
import '../styles/Nav.css';

export const Nav = () => {
    const context = useContext(AccountContext);

    // Firebase Auth
    const auth = getAuth();

    const signOutFunc = () => {
        signOut(auth).then(
            () => {
                context.setStatus(false);
                context.setCurProf({});
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    }

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
                    <li onClick={signOutFunc}>
                        Sign Out
                    </li>
                </ul>
            </div>

        </nav>
    )
};