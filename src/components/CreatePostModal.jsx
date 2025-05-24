import React, { useState, useEffect } from 'react';
import './CreatePostModal.css';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [postText, setPostText] = useState('');

  useEffect(() => {
    // Optional: Clear post text when modal is opened or closed
    // if (!isOpen) {
    //   setPostText('');
    // }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleSubmit = () => {
    if (postText.trim() === '') {
      alert('Post content cannot be empty.'); // Or some other user feedback
      return;
    }
    onSubmit(postText);
    setPostText(''); // Clear text after submission
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Close on overlay click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking content */}
        <button className="modal-close-btn" onClick={onClose}>X</button>
        <h2>Create Post</h2>
        <textarea
          className="modal-textarea"
          value={postText}
          onChange={handleTextChange}
          placeholder="What's on your mind?"
          maxLength={500}
        />
        <div className="modal-media-actions">
          <button className="modal-add-media-btn">Add Photo</button>
          <button className="modal-add-media-btn">Add Video</button>
        </div>
        <button className="modal-post-btn" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal;
