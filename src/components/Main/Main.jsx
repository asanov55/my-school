import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.scss';
import CarouselApp from './Carousel';

function Main() {
  //   const [item, setItem] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get('http://127.0.0.1:8000/api/posts/')
  //       .then(({ data }) => {
  //         setItem(data);
  //         console.log(item);
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(console.log('loading...'));
  //   }, []);
  return (
    <div className="main">
      <CarouselApp />
      {/* {item.map((item) => item.id)} */}
    </div>
  );
}

export default Main;
