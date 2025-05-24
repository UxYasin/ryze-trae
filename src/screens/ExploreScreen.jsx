import React from 'react';
import './ExploreScreen.css';
import ExplorePostItem from '../components/ExplorePostItem'; // Import ExplorePostItem

const ExploreScreen = () => {
  // Static Data for Explore Posts
  const trendingPosts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    thumbnailUrl: `var(--secondary-color)`, // Default placeholder, can be made dynamic if needed
    // To use distinct placeholder colors as suggested in optional step:
    // thumbnailUrl: `placeholder_color_${(i % 3) + 1}`,
    username: `User${i + 1}`,
    caption: `This is trending post #${i + 1} with an engaging caption that might be a bit longer to see how it wraps or truncates!`
  }));

  return (
    <div className="explore-screen-container">
      {/* Removed initial placeholder text "Explore Screen" */}
      <div className="explore-grid">
        {trendingPosts.map(post => (
          <ExplorePostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ExploreScreen;
