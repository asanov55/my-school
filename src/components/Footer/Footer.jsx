import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__head}>
        <div className={styles.head_width}>
          <Link>Админ-панель</Link>
          <Link>Образование за рубежом</Link>
          <div>
            <a className={styles.phone} href="tel:+996(312)663252">
              +996 (312) 663252
            </a>
            <p>г.Бишкек</p>
          </div>
        </div>
      </div>
      <div className={styles.footer__down}>
        <div className={styles.down__width}>
          <p>© 2022 – СОШ №27</p>
          <p>
            Сайт разработан и поддерживается <Link>EDUGATE</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
