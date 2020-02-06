import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigations = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Домашнаяя страница</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Главная страница</Link>
    </li>
    <li>
      <Link to={ROUTES.SING_UP}>Страница регистрации</Link>
    </li>
    <li>
      <Link to={ROUTES.SING_IN}>Старница входа</Link>
    </li>
  </ul>
);

export { Navigations };
