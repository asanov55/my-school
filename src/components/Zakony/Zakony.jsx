import React from 'react';
import './Zakony.scss';

export const Zakony = () => {
  const zakony = [
    {
      title: 'КОНСТИТУЦИЯ КЫРГЫЗСКОЙ РЕСПУБЛИКИ',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Закон об образовании КР',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Конвенция о правах ребенка',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Закон о статусе учителя',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение об общеобразовательном учреждении',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение о довоенной подготовке',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение об ИГА (Алтын тамга)',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Временное положение об ИГА 2019-2020',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение об ОРТ 2006',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение об ОРТ 2019',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Указ Президента по обеспечению качества образования',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение о ведомственных наградах',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Порядок ведения трудовых книжек',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Устав ЦКПРОН КР',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'Положение о профсоюзе КР',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'ТРУДОВОЙ КОДЕКС КЫРГЫЗСКОЙ РЕСПУБЛИКИ',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'ЗАКОН КЫРГЫЗСКОЙ РЕСПУБЛИКИ об охране труда',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
    {
      title: 'ЗАКОН КЫРГЫЗСКОЙ РЕСПУБЛИКИ о профсоюзной организации',
      src: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakon-ob-obrazovanii-230321.pdf',
    },
  ];
  return (
    <div className="zakony">
      <div className="zakony__title">
        <h2>ЗАКОНЫ И ПОСТАНОВЛЕНИЯ ПРАВИТЕЛЬСТВА КР</h2>
        <img
          src="https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/zakony-kr-250x250.jpg"
          alt="img"
        />
      </div>
      <div className="zakony__href">
        {zakony.map((zakon, index) => (
          <a href={zakon.src} key={index} target="_blank">
            {zakon.title}
          </a>
        ))}
      </div>
    </div>
  );
};
