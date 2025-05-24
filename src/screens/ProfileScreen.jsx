import React from 'react';
import './ProfileScreen.css';

const ProfileScreen = () => {
  // Placeholder data for the profile
  const userProfile = {
    name: "Your Name", // Or any placeholder
    bio: "This is a compelling bio about your lifestyle and interests. Keep it concise but engaging!",
    avatarUrl: "", // Using CSS placeholder for now
    impressionPercentage: 80, // Or any number
  };

  // Static data for the user's posts grid
  const userPosts = Array.from({ length: 9 }, (_, i) => ({ 
    id: i + 1, 
    placeholderText: `Post ${i + 1}` 
  }));

  return (
    <div className="profile-screen-container">
      <div className="profile-info-section">
        <div className="profile-avatar-placeholder">
          {/* In a real app, this would be an <img src={userProfile.avatarUrl} alt="User Avatar" /> */}
        </div>
        <div className="profile-text-details">
          <h2 className="profile-name">{userProfile.name}</h2>
          <p className="profile-bio">{userProfile.bio}</p>
          <p className="profile-impression">
            Your impression is <strong>{userProfile.impressionPercentage}%</strong>
          </p>
        </div>
      </div>
      <div className="profile-posts-grid">
        {userPosts.map(post => (
          <div key={post.id} className="profile-post-item">
            <span>{post.placeholderText}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// userPosts definition moved inside the component or passed as prop if component was reusable.
// For this subtask, defining it inside or just above the return as done is fine.

export default ProfileScreen;
