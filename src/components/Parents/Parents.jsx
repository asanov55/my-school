import React from 'react';
import style from './Parents.module.scss';

const Parents = () => {
  const parents = [
    {
      name: 'Психологические особенности мальчиков и девочек подростков',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Памятка родителям о физическом наказании',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Компьютерная зависимость у подростков',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Подростковый возраст',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Профилактика асоциального поведения у подростков',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Иммунитет на пять',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Как уберечь ребенка от наркотиков',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'Насвай и последствия его потребления',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'профилактика насилия видеоролик мвд',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
    {
      name: 'профилактика экстремизма видеоролик мвд',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/podrostkovyy-vozrast.pdf',
    },
  ];

  document.title = 'Parents';
  return (
    <div className={style.parents}>
      <div className={style.parent}>
        <h2>ИНФОРМАЦИЯ ДЛЯ РОДИТЕЛЕЙ</h2>
        <img
          src="	https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/r8-250x156.jpg"
          alt="img"
        />
      </div>
      <div className={style.vajno}>
        {parents.map((parent, index) => (
          <div key={index} className={style.href}>
            <a className={style.a} href={parent.src} target="_blank">
              {parent.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parents;
