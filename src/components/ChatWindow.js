import React, {useState, useEffect, useRef} from 'react';
import './ChatWindow.css';

import MessageItem from './MessageItem.js';

import Api from "../Api.js"


import SearchIcon from '@mui/icons-material/Search';
//import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
//import CloseIcon from '@mui/icons-material/Close';
//import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
//import MicIcon from '@mui/icons-material/Mic';

//Future STT implementation and message reading TTS
//import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
//import PauseCircleIcon from '@mui/icons-material/PauseCircle';
//import StopCircleIcon from '@mui/icons-material/StopCircle';

export default function ChatWindow({user, data}) {

    const text = useRef();
    
    const [list, setList] = useState([]);

    //messages
    useEffect(()=>{
        
        let unSub = Api.getMessages(user.email, data.email)
        setList([unSub]);
    },[])
    
    //chat scroll
    useEffect(() => {
        if(text.current.scrollHeight > text.current.offsetHeight) {
            text.current.scrollTop = text.current.scrollHeight - text.current.offsetHeight
        }
    }, [list])

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src={data.profpic} alt="" />
                    <div className="chatWindow--name">{data.name}</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>

                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div ref={text} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            <div className="chatWindow--footer">
                <div className="chatWindow--pre">

                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input"
                        type="text"
                        placeholder='Digite uma mensagem.'
                    />

                </div>
                <div className="chatWindow--pos">
                    <div className="chatWindow--btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>


                    <div className="chatwindow--btn">
                        <InsertEmoticonIcon style={{color:'#919191}}
                    </div>
*/