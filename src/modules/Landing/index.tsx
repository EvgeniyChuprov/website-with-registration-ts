import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkAuthorization } from '../../firebase/checkAuthorization';
import { changeAuthorized } from '../../reducers/Authorized/actions';
import './style.scss';

interface IProps {
  changeAuthorized: (x: {}) => {},
}

class Landing extends React.Component<IProps> {
  componentDidMount() {
    const { changeAuthorized } = this.props;
    checkAuthorization(changeAuthorized);
  }

  render() {
    return (
      <div className="landing">
        <h1>Главная страница</h1>
        <p>Здесь все происходит</p>
      </div>
    );
  }
}

const putStateToProps = (state: any) => {
  const { authorized } = state.root;
  return {
    authorized,
  };
};

const putActionsToProps = (dispatch: any) => ({
  changeAuthorized: bindActionCreators(changeAuthorized, dispatch),
});

const WrapperLanding = connect(putStateToProps, putActionsToProps)(Landing);

export { WrapperLanding };
