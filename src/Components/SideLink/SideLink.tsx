// SideLink.tsx
import React from 'react';
import './SideLink.css';

interface SideLinkProps {
  imgSrc: string;
  label: string;
}

const SideLink: React.FC<SideLinkProps> = ({ imgSrc, label }) => (
  <div className="side-link">
    <img src={imgSrc} alt={label} />
    <span>{label}</span>
  </div>
);

export default SideLink;
