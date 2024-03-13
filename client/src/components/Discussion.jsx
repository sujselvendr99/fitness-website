import React from 'react'
import SidebarChat from './SidebarChat';
import Chat from './Chat';
import '../discussion.scss';

function Discussion() {
    return (
        <div className = 'discussion'>
            <div className = "container">
                <SidebarChat />
                <Chat />
            </div>
        </div>
    )
}
export default Discussion;