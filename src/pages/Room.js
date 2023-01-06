import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Nav } from "../components/Nav";
import { Message } from "../components/Message";


export const Room = () => {
    // use Context later
    let isSignedIn = true;
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

                    {/* Chat Box Details */}

                    <div className="room-left">


                    </div>

                    {/* Chat Box */}

                    <div className="room-right">
                        <div className="chat-box">

                            <div className="msg-cont">
                                {
                                    message.map((msg) => {
                                        return <Message msg={msg}/>
                                    })
                                }                                
                            </div>
                            
                            <div className="inp-cont">
                                <input value={inp} onChange={(e) => setInp(e.target.value)}/>
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
