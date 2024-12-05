import React from 'react'

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
        <button>udalit</button>
      </div>
     </div>
  )
}

export default Postitem


