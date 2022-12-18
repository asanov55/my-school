import React, { useState } from 'react';

import styles from './Navigation.module.scss';
import kg from './images/kg.png';
import ru from './images/ru.png';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const items = [
    {
      id: 1,
      route: '#',
      head: 'Школа',
    },
    { id: 2, route: 'news', head: 'Новости' },
    { id: 3, route: 'for-students', head: 'Ученикам' },
    { id: 4, route: 'for-parents', head: 'Родителям' },
    { id: 5, route: 'gallery', head: 'Галерея' },
    {
      id: 6,
      route: 'methodological-service',
      head: 'Учебно-методическая служба',
    },
    { id: 7, route: 'accreditation', head: 'Аккредитация' },
    { id: 8, route: 'legal-framework', head: 'Нормативно-правовая база' },
    // { id: 9, route: 'more', head: 'Еще' },
  ];
  const hoverItems = [
    { link: 'О нас', route: 'about-us' },
    { link: 'Сотрудники', route: 'staff' },
    { link: 'Отличники', route: 'excellent-students' },
    { link: 'Гордимся', route: 'proud' },
    { link: 'Расписание', route: 'timetable' },
    { link: 'Контакты', route: 'contacts' },
  ];
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.navigation__items}>
          <div className={styles.navigation__left_site}>
            {items.map((item) => (
              <div key={item.id}>
                <Link className={styles.links} to={`/${item.route}`}>
                  {item.head}
                </Link>
              </div>
            ))}
            <span className={styles.links} onClick={() => setActive(!active)}>
              Еще
              <svg
                className={styles.drop__down}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="#fff" />
              </svg>
            </span>
          </div>

          <div className={styles.navigation__rigth_site}>
            <img src={kg} width={17} height={11} alt="kg" />
            <img src={ru} width={17} height={11} alt="ru" />
          </div>
        </div>
      </div>
      <div className={active ? styles.active : styles.act}>
        {hoverItems.map((item, index) => (
          <div className={styles.activeLinks} key={index}>
            <Link to={`/${item.route}`}>{item.link}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
