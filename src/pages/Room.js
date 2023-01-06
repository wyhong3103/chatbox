import '../styles/Room.css';
import { useState, useContext, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Nav } from "../components/Nav";
import { Message } from "../components/Message";
import { AccountContext } from '../context/AccountContext';
import { addDoc, collection, query, orderBy, getFirestore, onSnapshot } from 'firebase/firestore';

export const Room = () => {
    const messagesEndRef = useRef(null)
    const context = useContext(AccountContext);
    const isSignedIn = context.isSignedIn;
    const curProf = context.currentProfile;

    /*
        Each message's structure
        {
            name,
            profileURL,
            content,
            id - message id,
            uid,
        }
    */

    const [message, setMessage] = useState([]);
    const [inp, setInp] = useState("");
    const { id } = useParams();

    // Firebase Firestore
    const db = getFirestore();

    const getMessages = (querySnapshot) => {
        const messageTemp = [];

        querySnapshot.forEach(
            (doc) => {
                messageTemp.push({
                    ...doc.data(),
                    id : doc.id
                });
            }
        )

        return messageTemp;
    }

    const sendMsg = async () => {
        if (inp.trim() === "") return;
        setInp("");
        addDoc(collection(db, 'room', id, 'message'), {
            name : curProf.name,
            profileURL : curProf.profileURL,
            content : inp,
            uid : curProf.uid,
            timestamp : Date.now()
        })
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey){
            e.preventDefault();
            sendMsg();
        }
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }


    // Subscribe when mounted, and unsubscribe when unmounted
    useEffect(
        () => {
            const q = query(collection(db, 'room', id, 'message'), orderBy('timestamp'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                setMessage(getMessages(querySnapshot));
            });

            return () => {
                unsubscribe()
            }
        }
    , [])

    useEffect(
        () => {
            scrollToBottom();
        }
    , [message])


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
                                            <Message key={msg.id} msg={
                                                {
                                                    ...msg,
                                                    isSelf : msg.uid === curProf.uid
                                                }
                                            }/>
                                        )
                                    })
                                }
                                <div ref={messagesEndRef}/> 
                            </div>
                    
                            <div className="inp-cont">
                                <textarea 
                                    value={inp} 
                                    onChange={(e) => setInp(e.target.value)} 
                                    onKeyDown={(e) => handleKeyPress(e)}
                                    maxLength="20000"
                                />
                                <button className="send-btn" onClick={sendMsg}>
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
