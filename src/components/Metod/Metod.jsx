import React from 'react';
import './Metod.scss';

export const Metod = () => {
  const ucheba = [
    {
      title: 'Декада естественно-научного цикла 2017-2018',
      p: 'Декада была открыта 5 марта 2018 года. В этот день в фойе школы на втором этаже открылась выставка газет посвященных международному женскому дню 8 марта. На выставке были размещены газеты, подготовленные учащимися с 5 по 11 класс. Тема выставки «Женщина – вечная загадка».',
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/e1-250x187.jpg',
    },
    {
      title: 'Декада естественно-научного цикла 2018-2019',
      p: 'Декада была открыта 11 марта 2019 года. В этот день  в 11.00 проходила эко лекция для учащихся  8 классов. Декада проходила накануне праздника «Нооруз». Учащиеся 8-А класса  разработали проект «Инновационные технологии изготовления тротуарной плитки в условиях средней общеобразовательной школы №27».  Дети 7В  класса выполнили макет «Школа будущего». Работа выполнялась  в соответствии с планом работы управления образования.',
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/10/shkola-buduschego-188x250.jpg',
    },
    {
      title: 'Декада естественно-научного цикла 2019-2020',
      p: 'с 13  по 22   ноября  2019 года.  Декада проходила под девизом «От предмета —  к науке!». В программе: 1) две выставки  темы «Скажем «Нет!» загрязнению воздуха!» и «Природа родного края» с учащимися 2-11 кл (отв.Зубова Н.В.). 2) открытое мероприятие  по ИХТ– викторина «Виды и жанры изобразительного искусства». 3) игра-соревнование «Формула здоровья», (отв.Бронникова К.О.). 4) игра « Посвящение в химики» (отв.Кудобаева А.Б.). 5) спартакиада по волейболу «Быстрее! Выше! Сильнее!» 7-е кл (отв.Махмудов А.И.). 6) кинолекторий  «По страницам Красной книги  Кыргызстана» (отв.Бронникова К.О.)',
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/ents-dekada-19_20-250x141.jpg',
    },
    {
      title: 'Декада естественно-научного цикла 2020-2021',
      p: 'Декада прошла с 9  по 19   марта 2021 года. Основная тема декады «30 лет независимости Кыргызстана». В программе: 1) открытое мероприятие «Кыргызские игры» (отв. Мазикина О.А., Махмудов А.И., Карымшаков Н.А., Дуйшенбаев Д.Д.). 2) проект по технологии «Что такое Робототехника» уч 7 кл. Усубалиев Т. (отв. Мазикина О.А.). 3) выставка  рисунков «Расцветай мой Кыргызстан» (отв. Зубова Н.В.). 4) олимпиада по биологии в онлайн-формате посредством WhatsApp, classroom 7-8-е кл.(отв.Бронникова К.О., Эркинбекова А.Э.)',
      img: 'https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/ents-dekada-20_21.jpg-188x250.png',
    },
  ];

  const pdf = [
    {
      name: 'Отчет ШМО ЕНЦ 17-18',
      src: '',
    },
  ];
  return (
    <div className="Metod">
      <div className="metod__title">
        <h1>ШМО ЕСТЕСТВЕННО-НАУЧНОГО ЦИКЛА</h1>
        <img
          src="https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/ents-emblema-250x231.jpg"
          alt="img"
        />
      </div>
      <a
        href="https://27.edubish.kg/wp-content/uploads/sites/188/2021/11/ents-stranitsa-1.pdf"
        target="_blank"
      >
        О предметах естественно-научного цикла
      </a>
      <div className="metod__items">
        {ucheba.map((item, index) => (
          <div className="metod__item" key={index}>
            <h2>{item.title}</h2>
            <div className="metod_">
              <p>{item.p}</p>
              <img src={item.img} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};