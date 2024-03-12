import React from 'react'

function SearchChat() {

  return (
    <div className = 'search'>
      <div className = "searchForm">
        <input type = "text" placeholder = "Find a question" />
      </div>
      <div className = "questions">
        <div className = "questionInfo">
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default SearchChat