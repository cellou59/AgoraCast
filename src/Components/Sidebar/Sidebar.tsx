// Sidebar.tsx
import React from 'react';
import './Sidebar.css';

import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';

import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

import SideLink from '../SideLink/SideLink';
import SubscribedLink from '../SubscribedLink/SubscribedLink';

const sidebarLinks = [
  { imgSrc: home, label: 'Home' },
  { imgSrc: game_icon, label: 'Games' },
  { imgSrc: automobiles, label: 'Automobiles' },
  { imgSrc: sports, label: 'Sports' },
  { imgSrc: entertainment, label: 'Entertainment' },
  { imgSrc: tech, label: 'Technology' },
  { imgSrc: music, label: 'Music' },
  { imgSrc: blogs, label: 'Blogs' },
  { imgSrc: news, label: 'News' },
];

const subscribedLinks = [
  { imgSrc: jack, label: 'PewDieDie' },
  { imgSrc: simon, label: 'MrBeast' },
  { imgSrc: tom, label: 'Justin Bieber' },
  { imgSrc: megan, label: '5-minute Crafts' },
  { imgSrc: cameron, label: 'Nas daily' },
];

const Sidebar: React.FC = ({sidebarOpen} : {sidebarOpen: boolean}) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "":"small-sidebar"}`}>
      <div className="shortcut-links">
        {sidebarLinks.map((link, index) => (
          <SideLink key={index} imgSrc={link.imgSrc} label={link.label} />
        ))}
        <hr />
        <div className="subscribed-list">
          <h3 className='side-link'>Subscribed</h3>
          {subscribedLinks.map((link, index) => (
            <SubscribedLink key={index} imgSrc={link.imgSrc} label={link.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
