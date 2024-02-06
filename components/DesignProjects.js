// DesignProjects.js

import React from 'react';

const designProjects = [
  {
    title: 'Banner Design',
    imageUrl: '/img/psd/banner.jpg',
    svgUrl: '/img/svg/photoshop.svg',
    details: '#React #NextJs #Tailwind',
    link: 'https://example.com/banner',
  },
  {
    title: 'Coffee Banner Design',
    imageUrl: '/img/psd/coffie_banner.jpg',
    svgUrl: '/img/svg/photoshop.svg',
    details: '#React #NextJs #Tailwind',
    link: 'https://example.com/coffee-banner',
  },
  {
    title: 'Coffee Banner Design',
    imageUrl: '/img/psd/valentines.jpg',
    svgUrl: '/img/svg/photoshop.svg',
  },
  {
    title: 'Coffee Banner Design',
    imageUrl: '/img/psd/marketing.jpg',
    svgUrl: '/img/svg/photoshop.svg',
  },
  // Add more design projects as needed
];

const DesignSection = ({ activeContent }) => {
  return (
    <>
      {designProjects.map((project, index) => (
        <li key={index} className={`design ${activeContent('design')}`}>
          <div className="list_inner_psd">
            <div className="image">
              <img src="/img/thumbs/1-1.jpg" alt="image" />
              <div className="main" data-img-url={project.imageUrl} />
            </div>
            <div className="overlay" />
            <img className="svg" src={project.svgUrl} alt="image" />
            <div className="details">
              <span>{project.details}</span>
              <h3>{project.title}</h3>
            </div>
            <a className="iknow_tm_full_link" href={project.link} target="_blank" />
          </div>
        </li>
      ))}
    </>
  );
};

export default DesignSection;