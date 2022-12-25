import React from 'react';
import './Students.scss';

const Students = () => {
  const excelent = [
    {
      title: 'ОТЛИЧНИКИ 2020-2021',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/otlichniki-2020-2021.docx',
    },
    {
      title: 'ОТЛИЧНИКИ 2019-2020',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/otlichniki-2020-2021.docx',
    },
    {
      title: 'ОТЛИЧНИКИ 2017-2018',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/otlichniki-2020-2021.docx',
    },
    {
      title: 'ОТЛИЧНИКИ 2016-2017',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/otlichniki-2020-2021.docx',
    },
    {
      title: 'АТТЕСТАТЫ С ОТЛИЧИЕМ 5 лет 16-21',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/otlichniki-2020-2021.docx',
    },
    {
      title: 'СВИДЕТЕЛЬСТВА с отличием 16-21',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/otlichniki-2020-2021.docx',
    },
  ];
  return (
    <div className="students">
      <h2>ОТЛИЧНИКИ</h2>
      {excelent.map((ee, index) => (
        <div className="student" key={index}>
          <a className="student__a" href={ee.src}>
            {ee.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Students;
