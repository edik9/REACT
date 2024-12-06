import React, { useState} from 'react';
import './styles/App.css'
import Postitem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "что-то", body: "mda"},
    {id: 2, title: "oi", body: "mda"},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title= "SPISOK POSTOVV"/>
        : <h1 style={{textAlign: 'center'}}>Posti ne naideni</h1>
      }
      
    </div>
  );
}

export default App;
