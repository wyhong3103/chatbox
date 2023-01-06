export const Message = ({msg}) => {
    /*
        msg = {
            name,
            profielUrl,
            content
        }
    */
    return(
        <div className="msg-box">
            <img className="msg-pfp" src={msg.profileUrl} alt={`${msg.name} Profile Pic`}/>
            <p className="msg-name">{msg.name}</p>
            <div className="msg-content">
                {msg.content}
            </div>
        </div>
    )    
};