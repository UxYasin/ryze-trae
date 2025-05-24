import React, { useState, useEffect } from 'react'; // Added useEffect for potential future use
import './HomeScreen.css';
import PostCard from '../components/PostCard';
import FAB from '../components/FAB'; // Import FAB
import CreatePostModal from '../components/CreatePostModal'; // Import CreatePostModal

// Sample post data (remains the same for now)
const samplePostsData = [
  { id: 1, username: "NatureLover", caption: "Beautiful sunset! #nofilter #nature #sunset" },
  { id: 2, username: "FoodieAdventures", caption: "Just tried this amazing pasta. So delicious! #food #pasta #italiancuisine" },
  { id: 3, username: "TechGuru", caption: "New gadget review coming soon! Stay tuned. #tech #gadgets #review" },
  { id: 4, username: "FitnessFanatic", caption: "Morning workout done! Feeling energized. #fitness #health #motivation" },
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
      // avatarUrl: "path/to/default_avatar.png", // PostCard has its own placeholder
      // imageUrl: null, // PostCard has its own placeholder
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
