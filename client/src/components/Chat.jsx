import React from 'react'
import Messages from "./MessagesChat"
import Input from "./InputChat"

function Chat() {
  return (
    <div className = 'chat'>
      <div className="chatInfo">
        <span>Best way to lose weight?</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat