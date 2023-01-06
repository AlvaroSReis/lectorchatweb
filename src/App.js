//import logo from './logo.svg';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.css';

import Api from './Api.js';

import ChatListItem from './components/ChatListItem.js';
import ChatIntro from './components/ChatIntro.js';
import ChatWindow from './components/ChatWindow.js';
import NewChat from './components/NewChat.js';
import Login from './components/Login.js'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  // eslint-disable-next-line
  const [chatlist, setChatList] = useState([]);
  const [user, setUser] = useState(null)

  const [showNewChat, setShowNewChat] = useState(false)

  useEffect(() => {
    if( user !== null) {
      function getUserChats() {
        let unsub = Api.getContacts(user.email, setChatList);
        return unsub;
      }
      getUserChats()
    }
  }, [user])

  const [activeChat, setActiveChat] = useState({});

  function handleNewChat () {
    setShowNewChat(true);
  }

  async function handleLoginData(u) {
    let newUser = {
      email: u.email,
      name: u.displayName,
      profpic: u.photoURL,
    }
    await Api.addUser(newUser);
    setUser(newUser);
  }

  if(user === null) {
    return (<Login onReceive={handleLoginData}/>)
  }

  return (
    <div className="App">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.profpic} alt="" />
          <div className="header--buttons">
            <div onClick={handleNewChat} className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>

          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="procurar ou começar nova conversa" />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.email === chatlist[key].email}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.email !== undefined &&
          <ChatWindow
            user={user}
            data={activeChat}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}


export default App;
