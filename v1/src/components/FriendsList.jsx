import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const FriendsList = ({ friends }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
            {/* Your main content */}
            <Typography variant="h4">Main Content</Typography>
        {/* Add your main content here */}
      </Grid>
      <Grid item xs={4}>
        {/* Friends List */}
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Friends List
          </Typography>
          <List>
            {friends.map((friend, index) => (
              <ListItem key={index}>
                <ListItemText primary={friend.name} secondary={friend.status} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FriendsList;
