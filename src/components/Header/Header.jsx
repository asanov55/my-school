import React from 'react';
import { useState } from 'react';
import './Header.scss';

function Header() {
  const [popup, setPopup] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="logo__content">
          <div className="logo">
            <img
              src="	https://27.edubish.kg/wp-content/uploads/sites/188/2018/08/logotip-250x214.png"
              alt="logo"
            />
          </div>
          <div className="sosh">
            <h1>СОШ №27</h1>
            <p>Средняя общеобразовательная школа №27</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
