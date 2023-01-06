import React from "react";
import './ChatListItem.css'

export default function ChatList ({onClick, active, data}) {
    return (
        <div className={`chatListItem ${active?'active':''}`}
        onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.profpic} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name"> {data.name}</div>
                    <div className="chatListItem--date"></div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}