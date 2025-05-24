import React, { useState, useEffect } from 'react'; // Added useEffect for potential future use
import './HomeScreen.css';
import PostCard from '../components/PostCard';
import FAB from '../components/FAB'; // Import FAB
import CreatePostModal from '../components/CreatePostModal'; // Import CreatePostModal

// Sample post data with engagement counts
const samplePostsData = [
  { id: 1, username: "NatureLover", caption: "Beautiful sunset! #nofilter #nature #sunset", likes: 150, comments: 32, shares: 15 },
  { id: 2, username: "FoodieAdventures", caption: "Just tried this amazing pasta. So delicious! #food #pasta #italiancuisine", likes: 220, comments: 55, shares: 20 },
  { id: 3, username: "TechGuru", caption: "New gadget review coming soon! Stay tuned. #tech #gadgets #review", likes: 300, comments: 75, shares: 50 },
  { id: 4, username: "FitnessFanatic", caption: "Morning workout done! Feeling energized. #fitness #health #motivation", likes: 180, comments: 40, shares: 10 },
];

const HomeScreen = () => {
  const [posts, setPosts] = useState(samplePostsData);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Handlers for modal and post creation
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = (postText) => {
    const newPost = {
      id: Date.now(), // Generate a unique ID
      username: "CurrentUser", // Placeholder username
      caption: postText, // The text from the modal
      likes: 0, // Initialize likes for new post
      comments: 0, // Initialize comments for new post
      shares: 0, // Initialize shares for new post
      // avatarUrl and imageUrl will use placeholders from PostCard
    };

    setPosts(prevPosts => [newPost, ...prevPosts]); // Add new post to the beginning of the array

    // Modal is closed by its own onSubmit handler after calling this function
    // (which in turn calls handleCloseModal from CreatePostModal's perspective)
  };

  // In a real app, you might fetch posts:
  // useEffect(() => {
  //   // fetchPosts().then(data => setPosts(data));
  // }, []);

  return (
    // Use React.Fragment or a div if you need a wrapper that doesn't interfere with layout
    <> 
      <div className="home-screen-container">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <FAB onClick={handleOpenModal} />
      <CreatePostModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreatePost}
      />
    </>
  );
};

export default HomeScreen;
