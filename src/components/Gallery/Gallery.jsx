import React from 'react';
import './Gallery.scss';
import zvonok from './img/zvonok.jpeg';

export const Gallery = () => {
  const gallery = [
    {
      img: zvonok,
      title: 'выставка детских поделок «очумелые ручки» 2019-2020',
      date: '24.10.2021',
    },
    {
      img: zvonok,
      title: 'выставка детских поделок «очумелые ручки» 2019-2020',
      date: '24.10.2021',
    },
    {
      img: zvonok,
      title: 'выставка детских поделок «очумелые ручки» 2019-2020',
      date: '24.10.2021',
    },
  ];
  return (
    <div className="gallery">
      <head>
        <title>ГАЛЕРЕЯ</title>
      </head>
      <h2 className="title">ГАЛЕРЕЯ</h2>
      <div className="cards">
        {gallery.map((galler, index) => (
          <div key={index} className="card">
            <img src={galler.img} alt="img" />
            <p>{galler.title}</p>
            <span>{galler.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
