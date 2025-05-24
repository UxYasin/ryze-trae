import React from 'react';
// Removed import './FAB.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FAB = ({ onClick }) => {
  return (
    <Fab
      color="primary" // Uses theme.palette.primary.main (our green)
      aria-label="add post"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: 30, // MUI theme.spacing(2) is 16px, theme.spacing(4) is 32px. 30 is fine.
        right: 30,  // theme.spacing(4) would be 32px.
        zIndex: (theme) => theme.zIndex.fab // Use MUI's zIndex scale
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default FAB;
