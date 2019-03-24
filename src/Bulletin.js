import React from 'react';
import Post from './Post';
import { db } from './App';

export default class Bulletin extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    // fetch all posts from firebase
    try {
      let postsArr = [];
      await db
        .collection('posts')
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            let postDetails = { id: doc.id, data: doc.data() };
            console.log(doc.id, ' => ', doc.data());
            postsArr.push(postDetails);
          });
        });
      this.setState({ posts: postsArr });
    } catch (error) {
      console.log(error);
    }
    console.log('posts fetched:', this.state.posts);
  }

  render() {
    return (
      <div className="bulletin">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post.data} />
        ))}
      </div>
    );
  }
}
