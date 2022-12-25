import React from 'react';
import './Sotrudniki.scss';

const Sotrudniki = () => {
  const teachers = [
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
    {
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2022/10/alimbekova-a.i.-4.png',
      name: 'Алимбекова Анаргуль Исраиловна',
      job: 'Директор школы',
    },
  ];
  return (
    <div className="sotrudniki">
      <h2>СОТРУДНИКИ</h2>
      <div className="sotrudniki__items">
        {teachers.map((teacher, index) => (
          <div className="sotrudniki__item" key={index}>
            <img src={teacher.img} alt="img" />
            <h3>{teacher.name}</h3>
            <h4>{teacher.job}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sotrudniki;
