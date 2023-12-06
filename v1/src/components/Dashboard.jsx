import React from 'react'
import MusicPlayerSlider from './MusicPlayerSlider'
import { styled, useTheme } from '@mui/system';
import Header from './Header'
import FriendsList from './FriendsList';
const friends = [
  { name: 'Friend 1', status: 'Online' },
  { name: 'Friend 2', status: 'Offline' },
  // Add more friends as needed
];
function Dashboard() {
  return (
    <>

        <Header />
        <div style={{ display : 'flex', flexDirection : 'row'}}>

        <MusicPlayerSlider />
        <FriendsList  friends={friends}/>

        </div>
      
    </>
  )
}

export default Dashboard