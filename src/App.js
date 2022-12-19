//import logo from './logo.svg';
// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem.js';
import ChatIntro from './components/ChatIntro.js';
import ChatWindow from './components/ChatWindow.js';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {
// eslint-disable-next-line
  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Teste Exemplo', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000'},
    {chatId: 2, title: 'Teste Exemplo', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000'},
    {chatId: 3, title: 'Teste Exemplo', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000'},
    {chatId: 4, title: 'Teste Exemplo', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000'}
  ]);
  
  
    const [activeChat, setActiveChat] = useState({});

  return (
    <div className="App">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000" alt=""/> 
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>

          </div>
        </header>
        <div className="search">
          <div className= "search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type="search" placeholder="procurar ou começar nova conversa"/>
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key)=>(
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={()=> setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;
