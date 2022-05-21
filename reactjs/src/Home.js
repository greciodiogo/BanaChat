import React from 'react';
import './Home.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function Home() {
  return (
   <div className='home'>
      <div className='home__body'>
      <Sidebar/>
      <Chat/>
      </div>
   </div>
  );
}

export default Home;