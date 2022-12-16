import React from "react";
import './ChatListItem.css'

export default function ChatList () {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=2000" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name"> Bonkay Hello World</div>
                    <div className="chatListItem--date"></div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros mi, ultricies eu congue id, posuere sed urna. Nam rhoncus nunc lorem, bibendum pretium velit tempus non. Duis dictum nunc eu vestibulum mollis. Cras sed rhoncus nisl. Sed sit amet lorem risus. Etiam condimentum odio nibh, sit amet luctus turpis tristique porttitor. Cras nec convallis orci, vitae tincidunt dolor. Phasellus rhoncus ex at leo pharetra porta. Suspendisse eu libero a velit tincidunt sagittis. Praesent faucibus ultrices condimentum. Aenean sed dignissim leo. Pellentesque sit amet velit volutpat, tempor ligula in, iaculis ex.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}