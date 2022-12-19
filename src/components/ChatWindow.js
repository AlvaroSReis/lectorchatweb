import React, {useState} from 'react';
import './ChatWindow.css';

import MessageItem from './MessageItem.js';

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

export default function ChatWindow() {
    
    const [list, setList] = useState([{},{},{}]);

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000" alt="" />
                    <div className="chatWindow--name">Teste Exemplo</div>
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
            <div className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
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