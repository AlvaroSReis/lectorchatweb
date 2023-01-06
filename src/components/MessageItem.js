import React, { useEffect } from "react";
import "./MessageItem.css"

export default function MessageItem ({data, user}) {

    return (
        <div className="messageLine"
        style={{
            justifyContent: user.email === data.sender ? "flex-end" : "flex-start"
        }}>
            <div className="messageItem" 
            style= {{
                backgroundColor: user.email === data.sender ? "#A2DCF7" : " #FFFFFF"
            }}
            >
                <div className="messageText">
                {data.text}
                </div>
            </div>
        </div>
    )
}