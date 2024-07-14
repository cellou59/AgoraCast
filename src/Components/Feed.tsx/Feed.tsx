import React from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;  
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  time: string;
}

const cards: CardProps[] = [
  { id:1 ,thumbnail: thumbnail1, title: 'Best channel to learn that help you to be a web developer', channel: 'Greastack', views: '10k views', time: '2 days ago' },
  { id:2 ,thumbnail: thumbnail2, title: 'Advanced React Techniques', channel: 'Code Evolution', views: '8k views', time: '3 days ago' },
  { id:3 ,thumbnail: thumbnail3, title: 'JavaScript Best Practices', channel: 'JS Mastery', views: '12k views', time: '1 week ago' },
  { id:4 ,thumbnail: thumbnail4, title: 'CSS Grid and Flexbox', channel: 'DesignCourse', views: '15k views', time: '4 days ago' },
  { id:5 ,thumbnail: thumbnail5, title: 'Web Development Tools', channel: 'Traversy Media', views: '20k views', time: '5 days ago' },
  { id:6 ,thumbnail: thumbnail6, title: 'Backend Development with Node.js', channel: 'Academind', views: '25k views', time: '6 days ago' },
  { id:7 ,thumbnail: thumbnail7, title: 'Full-Stack Development Guide', channel: 'The Net Ninja', views: '30k views', time: '1 week ago' },
  { id:8 ,thumbnail: thumbnail8, title: 'Understanding TypeScript', channel: 'Maximilian', views: '18k views', time: '3 days ago' },
];

const Card: React.FC<CardProps> = ({ id,thumbnail, title, channel, views, time }) => (
  <Link to={`video/20/${id}`} className='card'>
    <img src={thumbnail} alt={title} />
    <h2>{title}</h2>
    <h3>{channel}</h3>
    <p>{views} &bull; {time}</p>
  </Link>
);

const Feed: React.FC = () => {
  return (
    <div className='feed'>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={card.id}
          thumbnail={card.thumbnail}
          title={card.title}
          channel={card.channel}
          views={card.views}
          time={card.time}
        />
      ))}
    </div>
  );
}

export default Feed;
