import React from 'react'
import MyButton from './UI/button/MyButton'

const Postitem = (props) => {
  return (
     <div className="post">
      <div className="post__content">
        <strong>{props.number} {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => props.remove(props.post)}>udalit</MyButton>
      </div>
     </div>
  )
}

export default Postitem


