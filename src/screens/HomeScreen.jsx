import React, { useState } from 'react';
import './HomeScreen.css';
import PostCard from '../components/PostCard'; // Adjust path as necessary

// Sample post data
const samplePostsData = [
  { 
    id: 1, 
    username: "NatureLover", 
    caption: "Beautiful sunset! #nofilter #nature #sunset",
    // avatarUrl: "path/to/avatar1.jpg", 
    // imageUrl: "path/to/image1.jpg" 
  },
  { 
    id: 2, 
    username: "FoodieAdventures", 
    caption: "Just tried this amazing pasta. So delicious! #food #pasta #italiancuisine",
    // avatarUrl: "path/to/avatar2.jpg", 
    // imageUrl: "path/to/image2.jpg" 
  },
  { 
    id: 3, 
    username: "TechGuru", 
    caption: "New gadget review coming soon! Stay tuned. #tech #gadgets #review",
    // avatarUrl: "path/to/avatar3.jpg", 
    // imageUrl: "path/to/image3.jpg" 
  },
  { 
    id: 4, 
    username: "FitnessFanatic", 
    caption: "Morning workout done! Feeling energized. #fitness #health #motivation",
    // avatarUrl: "path/to/avatar4.jpg", 
    // imageUrl: "path/to/image4.jpg" 
  },
];

const HomeScreen = () => {
  const [posts, setPosts] = useState(samplePostsData);

  // In a real app, you might fetch posts:
  // useEffect(() => {
  //   // fetchPosts().then(data => setPosts(data));
  // }, []);

  return (
    <div className="home-screen-container">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomeScreen;
