import React from 'react'
import NavbarChat from "./NavbarChat"
import SearchChat from "./SearchChat"
import QuestionsChat from "./QuestionsChat"

function SidebarChat() {
  return (
    <div className = 'sidebar'>
        <NavbarChat/>
        <SearchChat/>
        <QuestionsChat/>
        </div>
  )
}

export default SidebarChat