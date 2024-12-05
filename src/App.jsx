import React, { useState} from 'react';
import './styles/App.css'
import Postitem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "что-то", body: "mda"},
    {id: 2, title: "oi", body: "mda"},
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }
  
  return (
    <div className="App">
      <form>
        <MyInput 
          value={post.title} 
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="NAZVANIE POSTA"
        />
        <MyInput 
          value={post.body} 
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="OPISANIE POSTA"/>
        <MyButton onClick={addNewPost}>sozdati post</MyButton>
      </form>
      <PostList posts={posts} title={"SPISOK POSTOVV"}/>
    </div>
  );
}

export default App;
