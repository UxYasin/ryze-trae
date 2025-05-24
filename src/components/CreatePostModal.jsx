import React, { useState, useEffect } from 'react';
// Removed import './CreatePostModal.css';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText'; // Optional
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // For layout of media buttons

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [postText, setPostText] = useState('');

  // Clear post text when modal opens, if desired
  useEffect(() => {
    if (isOpen) {
      setPostText('');
    }
  }, [isOpen]);

  const handleInternalSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (postText.trim() === '') {
      alert('Post content cannot be empty.'); // Simple validation
      return;
    }
    onSubmit(postText); // Call the onSubmit prop passed from HomeScreen
    // setPostText(''); // Already handled by useEffect on isOpen
    onClose(); // Close modal after submission
  };

  // No need to return null if !isOpen, Dialog handles its own visibility via the 'open' prop.

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose} 
      PaperProps={{ 
        component: 'form', 
        onSubmit: handleInternalSubmit 
      }}
      fullWidth
      maxWidth="sm" // Consistent width
    >
      <DialogTitle>Create New Post</DialogTitle>
      <DialogContent>
        {/* Optional: 
        <DialogContentText sx={{ mb: 2 }}>
          Share your thoughts with the community!
        </DialogContentText> 
        */}
        <TextField
          autoFocus
          margin="dense"
          id="postText"
          // label="What's on your mind?" // Placeholder is often preferred for multiline
          placeholder="What's on your mind?"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          inputProps={{ maxLength: 500 }}
          variant="outlined" // Standard MUI text field style
        />
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          {/* Placeholder media buttons */}
          <Button size="small" variant="outlined" component="label">
            Add Photo
            {/* <input type="file" hidden accept="image/*" /> */}
          </Button>
          <Button size="small" variant="outlined" component="label">
            Add Video
            {/* <input type="file" hidden accept="video/*" /> */}
          </Button>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: '16px 24px' }}> {/* Standard MUI Dialog padding */}
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="contained">Post</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostModal;
