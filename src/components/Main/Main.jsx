import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.scss';
// import CarouselApp from './Carousel';
import { MySwiper } from '../../UI/MySwiper';

function Main() {
  return (
    <div className="main">
      <MySwiper />
      {/* <CarouselApp /> */}
    </div>
  );
}

export default Main;
