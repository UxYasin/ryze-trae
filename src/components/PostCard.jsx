import React from 'react';
import './PostCard.css';

// Example structure for props (can be used later)
// const defaultPost = {
//   username: "User Name",
//   avatarUrl: "path/to/avatar.jpg", // For future use
//   imageUrl: "path/to/image.jpg",   // For future use
//   caption: "This is a sample post caption. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// };

const PostCard = ({ post /* = defaultPost */ }) => {
  // Using placeholder data directly in JSX for now
  const placeholderPost = {
    username: "PlaceholderUser",
    caption: "This is a placeholder caption for the post. It's quite engaging!",
  };

  const currentPost = post || placeholderPost;

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-avatar"></div>
        <span className="username">{currentPost.username}</span>
      </div>
      <div className="post-image-placeholder">
        <span>Post Image</span>
      </div>
      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <div className="post-caption">
        <p>{currentPost.caption}</p>
      </div>
    </div>
  );
};

export default PostCard;
