import '../styles/Room.css';
import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Nav } from "../components/Nav";
import { Message } from "../components/Message";
import { AccountContext } from '../context/AccountContext';
import { addDoc, collection, query, orderBy, getFirestore, onSnapshot } from 'firebase/firestore';

export const Room = () => {
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

    const sendMsg = async () => {
        setInp("");
        addDoc(collection(db, 'room', id, 'message'), {
            name : curProf.name,
            profileURL : curProf.profileURL,
            content : inp,
            uid : curProf.uid,
            timestamp : Date.now()
        })
    }


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
                            </div>
                    
                            <div className="inp-cont">
                                <textarea value={inp} onChange={(e) => setInp(e.target.value)}/>
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
