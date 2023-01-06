import '../styles/Room.css';
import { useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Nav } from "../components/Nav";
import { Message } from "../components/Message";
import { AccountContext } from '../context/AccountContext';


export const Room = () => {
    // use Context later
    const isSignedIn = useContext(AccountContext).isSignedIn;
    const [message, setMessage] = useState([]);
    const [inp, setInp] = useState("");
    const { id } = useParams();

    //retrieve message from room with id

    return(
        <div>
            {
                isSignedIn ?
                
                <div className="room-cont">
                    <Nav/>

                    <div className="room-flex">
                        <div className='room-details'>
                            <h3>
                                Current Room : {id}
                            </h3>
                        </div>

                        <div className="chat-box">
                            <div className="msg-cont">
                                {
                                    message.map((msg) => {
                                        return (
                                            <Message msg={
                                                {
                                                    ...msg,
                                                    // according to authentication ID
                                                    isSelf : true
                                                }
                                            }/>
                                        )
                                    })
                                }
                            </div>
                    
                            <div className="inp-cont">
                                <textarea value={inp} onChange={(e) => setInp(e.target.value)}/>
                                <button className="send-btn">
                                    Send
                                </button>
                            </div>
                    
                        </div>
                    </div>
                </div>
                
                :
                
                <Navigate to="/login"/>

            }
        </div>
    )

};
