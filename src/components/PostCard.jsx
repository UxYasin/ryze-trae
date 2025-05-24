import React, { useState, useEffect } from 'react';
// Removed import './PostCard.css';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia'; // For image placeholder
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const PostCard = ({ post }) => {
  // Default/placeholder post data if no post prop is provided
  const defaultPost = {
    id: 'default-post-id',
    username: "Placeholder User",
    caption: "This is a placeholder post. It's quite engaging!",
    likes: 0,
    comments: 0,
    shares: 0,
    // avatarUrl: "", // Can be added if needed
    // imageUrl: "", // Can be added if needed
  };

  const currentPost = post || defaultPost;
  const { username, caption, likes, comments, shares, id: postId } = currentPost;

  // Local state for like count and liked status
  const [likeCount, setLikeCount] = useState(likes !== undefined ? likes : 0);
  const [isLiked, setIsLiked] = useState(false);

  // Effect to reset local state if the post prop changes
  useEffect(() => {
    setLikeCount(likes !== undefined ? likes : 0);
    setIsLiked(false);
  }, [postId, likes]); // Depend on postId and initial likes from props

  // Updated formatCountText to only return the count for MUI Typography
  const formatCountText = (count, labelSingular, labelPlural) => {
    // The label part can be handled by context or i18n in a real app
    // For this version, we'll just return the count.
    // The MUI Typography will handle the label text.
    return count; 
  };
  // Simplified version for just the count, label will be static in JSX
  const getCount = (count) => (count !== undefined ? count : 0);


  const handleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;
    setLikeCount(newLikeCount);
    console.log(`Toggled like for post ID: ${postId}, new like count: ${newLikeCount}`);
  };

  const handleComment = () => {
    console.log(`Comment button clicked for post ID: ${postId}`);
  };

  const handleShare = () => {
    console.log(`Share button clicked for post ID: ${postId}`);
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mb: 2 }}> {/* Centered with mx: 'auto' */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="recipe">
            {username ? username.charAt(0).toUpperCase() : 'U'}
          </Avatar>
        }
        title={username || "Unknown User"}
        subheader="September 14, 2023" // Placeholder timestamp
      />
      {/* Optional: Image/Media area */}
      <CardMedia
        component="div"
        sx={{
          height: 300,
          backgroundColor: 'grey.300', // Placeholder color
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" color="text.secondary">Post Image Placeholder</Typography>
      </CardMedia>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-around', borderTop: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            {isLiked ? <FavoriteIcon sx={{ color: 'error.main' }} /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="caption" color="text.secondary">
            {getCount(likeCount)} Like{getCount(likeCount) !== 1 ? 's' : ''}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <IconButton aria-label="comment" onClick={handleComment}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary">
            {getCount(comments)} Comment{getCount(comments) !== 1 ? 's' : ''}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <IconButton aria-label="share" onClick={handleShare}>
            <ShareIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary">
            {getCount(shares)} Share{getCount(shares) !== 1 ? 's' : ''}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
