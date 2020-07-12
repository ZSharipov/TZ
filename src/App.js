import React, { useState } from "react";
import PostList from "./Post/PostList";
import AddPost from "./Post/AddPost";
import ViewPost from "./Post/ViewPost";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "POST_1",
      author: "Author_1",
      description: "description_1",
    },
    {
      id: 2,
      title: "POST_2",
      author: "Author_2",
      description: "description_2",
    },
    {
      id: 3,
      title: "POST_3",
      author: "Author_3",
      description: "description_3",
    },
  ]);

  function addPost(title, author, description) {
    setPosts(
      posts.concat([
        {
          id: Date.now(),
          title: title,
          author: author,
          description: description,
        },
      ])
    );
  }

  return (
    <div className="wrapper">
      <Router>
        <Link to="/">
          <h1>Posts</h1>
        </Link>
        <div>
          <Switch>
            <Route
              path="/add-post"
              render={() => <AddPost onCreate={addPost} />}
            />
            <Route
              path="/post/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <ViewPost id={id} />;
              }}
            />
            <Route path="/" render={() => <PostList posts={posts} />} exact />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
