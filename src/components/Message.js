import '../styles/Message.css';

export const Message = ({msg}) => {
    /*
        msg = {
            name,
            profielUrl,
            content,
            isSelf
        }
    */
    return(
        <div className='msg-outerbox'>
            {
                msg.isSelf ?
                
                <div className="self-msg-box">
                    <div className="self-msg-content-box">
                        <div className="self-msg-content">
                            {msg.content}
                        </div>
                    </div>
                </div>

                :

                <div className="msg-box">
                    <div className="msg-box-left">
                        <div className="msg-pfp-box">
                            <img className="msg-pfp" src={msg.profileURL} alt={`${msg.name} Profile Pic`}/>
                        </div>
                    </div>
                    <div className="msg-box-right">
                        <p className="msg-name">{msg.name}</p>
                        <div className="msg-content-box">
                            <div className="msg-content">{msg.content}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )    
};