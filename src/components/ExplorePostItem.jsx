import React from 'react';
import './ExplorePostItem.css';

const ExplorePostItem = ({ post }) => {
  // Default/placeholder post data if no post prop is provided
  const defaultPost = {
    id: 'default-explore-id',
    thumbnailUrl: 'var(--secondary-color)', // Use CSS variable as placeholder color
    username: "PlaceholderUser",
    caption: "This is a placeholder caption for an explore item. It's very engaging and describes the content."
  };

  const currentPost = post || defaultPost;

  return (
    <div className="explore-post-item">
      <div 
        className="explore-post-thumbnail" 
        style={{ backgroundColor: currentPost.thumbnailUrl.startsWith('var(') ? currentPost.thumbnailUrl : undefined }}
      >
        {/* If thumbnailUrl is a real URL, an <img> tag would be used here.
            For now, if it's not a CSS variable, it's ignored (or could be an image URL).
            If it's a CSS variable, it's used as background.
            Alternatively, one could render placeholder text:
            <span>Thumbnail</span> 
        */}
      </div>
      <div className="explore-post-details">
        <p className="explore-post-username">{currentPost.username}</p>
        <p className="explore-post-caption">{currentPost.caption}</p>
      </div>
    </div>
  );
};

export default ExplorePostItem;
