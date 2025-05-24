import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './PostCard.css';

const PostCard = ({ post }) => {
  // Default/placeholder post data if no post prop is provided
  const defaultPost = {
    id: 'default-post-id', // Add a default ID for logging purposes if post is undefined
    username: "PlaceholderUser",
    caption: "This is a placeholder caption. Engage with this post!",
    likes: 0,
    comments: 0,
    shares: 0,
  };

  const currentPost = post || defaultPost;

  // Local state for like count and liked status
  const [likeCount, setLikeCount] = useState(currentPost.likes !== undefined ? currentPost.likes : 0);
  const [isLiked, setIsLiked] = useState(false);

  // Effect to reset local state if the post prop changes (e.g., in a list with changing items)
  useEffect(() => {
    setLikeCount(currentPost.likes !== undefined ? currentPost.likes : 0);
    setIsLiked(false); // Reset liked status when post changes
  }, [currentPost.id, currentPost.likes]); // Depend on post.id and initial likes

  // Helper to format counts, e.g., "1 Like", "5 Likes"
  const formatCountText = (count, singular, plural) => {
    return `${count} ${count === 1 ? singular : plural}`;
  };

  const handleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;
    setLikeCount(newLikeCount);
    console.log(`Toggled like for post ID: ${currentPost.id}, new like count: ${newLikeCount}`);
  };

  const handleComment = () => {
    console.log(`Comment button clicked for post ID: ${currentPost.id}`);
  };

  const handleShare = () => {
    console.log(`Share button clicked for post ID: ${currentPost.id}`);
  };

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
        <div className="action-item">
          {/* Add 'liked' class to button if isLiked is true */}
          <button className={`action-btn like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            <span className="icon-placeholder">{isLiked ? '♥' : '♡'}</span>
          </button>
          <span className="action-counter">
            {formatCountText(likeCount, "Like", "Likes")}
          </span>
        </div>
        <div className="action-item">
          <button className="action-btn comment-btn" onClick={handleComment}>
            <span className="icon-placeholder">💬</span>
          </button>
          <span className="action-counter">
            {formatCountText(currentPost.comments !== undefined ? currentPost.comments : 0, "Comment", "Comments")}
          </span>
        </div>
        <div className="action-item">
          <button className="action-btn share-btn" onClick={handleShare}>
            <span className="icon-placeholder">↪️</span>
          </button>
          <span className="action-counter">
            {formatCountText(currentPost.shares !== undefined ? currentPost.shares : 0, "Share", "Shares")}
          </span>
        </div>
      </div>
      <div className="post-caption">
        <p>{currentPost.caption}</p>
      </div>
    </div>
  );
};

export default PostCard;
