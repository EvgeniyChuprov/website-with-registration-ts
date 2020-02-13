import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ROUTES from '../../constants/routes';
import './style.scss';

interface IProps {
  authorized: boolean;
}

class Navigations extends React.Component<IProps> {
  componentDidMount() {
    console.log(12313);
  }

  render() {
    const { authorized } = this.props;
    return (
      <ul className="navigations">
        {authorized && (
          <li>
            <Link to={ROUTES.HOME}>
              <span className="navigations__element">
                Домашнаяя страница
              </span>
            </Link>
          </li>
        )}
        <li>
          <Link to={ROUTES.LANDING}>
            <span className="navigations__element">
              Главная страница
            </span>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.SING_UP}>
            <span className="navigations__element">
              Страница регистрации
            </span>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.SING_IN}>
            <span className="navigations__element">
              Старница входа
            </span>
          </Link>
        </li>
      </ul>
    );
  }
}


const putStateToProps = (state: any) => {
  const { authorized } = state;
  return {
    authorized,
  };
};

const WrapperNavigations = connect(putStateToProps)(Navigations);

export { WrapperNavigations };
