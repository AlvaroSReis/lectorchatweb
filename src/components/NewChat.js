import React, {useEffect, useState} from 'react';
import "./NewChat.css";

import Api from '../Api.js';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NewChat({user, chatlist, show, setShow}) {
    const[list, setList] = useState([])

    useEffect(()=> {
        async function getList() {
            if(user != null) {
                let results = await Api.getContactList(user.email)
                setList(results);
            }
        }
        getList()
    }, [user])

    async function addNewChat(user2) {
        await Api.addNewChat(user, user2)
    }

    function handleClose () {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show? 0: -415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color:"#FFFFFF"}}/>
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>
                <div className="newChat--item" key={key}>
                    <img className="newChat--itemavatar" src={item.profpic}/>
                    <div className="newChat--itemname">{item.name}</div>
                </div>)}

            </div>
        </div>
    )
}