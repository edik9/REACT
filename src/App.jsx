import React, { useState } from 'react';
import './styles/App.css'
import Postitem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "что-то", body: "mda"},
    {id: 2, title: "oi", body: "mda"},
  ])
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="NAZVANIE POSTA"/>
        <input type="text" placeholder="OPISANIE POSTA"/>
        <MyButton>sozdati post</MyButton>
      </form>
      <PostList posts={posts} title={"SPISOK POSTOVV"}/>
    </div>
  );
}

export default App;
