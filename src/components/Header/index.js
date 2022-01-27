import React from "react";
import './Header.css';

export default({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="img/netflix-logo.svg" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="img/user.png" alt="usuário" />
        </a>
      </div>
    </header>
  );
}