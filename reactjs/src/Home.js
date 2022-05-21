import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

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