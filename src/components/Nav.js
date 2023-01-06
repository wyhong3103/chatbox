import '../styles/Nav.css';

export const Nav = () => {
    return(
        <nav>
            <div className="nav-left">
                <h1 className="title">
                    ChatBox
                </h1>
            </div>
            <div className="nav-right">
                <ul>
                    <li>
                        Lobby
                    </li>
                    <li>
                        Sign Out
                    </li>
                </ul>
            </div>

        </nav>
    )
};