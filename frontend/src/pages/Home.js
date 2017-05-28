import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
      .get('http://localhost:8080/posts')
      .then(function(result) {
        _this.setState({
          posts: result.data
        });
      })
  }

  render() {
    return (
      <div>
        {this.state.posts.map(function(post) {
          return (
            <div key={post.id}>
              {post.subject}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
