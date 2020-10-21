import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [])

    const postItems = posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))

    return (
        <div>
            <h1>Posts</h1>
            { postItems }
        </div>
    )
}

export default connect(null, { fetchPosts })(Posts);
