import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { WrapperNavigations } from '../../features/Navigations';
import { WrapperLanding } from '../../modules/Landing';
import { WrapperSignUp } from '../../modules/SignUp';
import { WrapperSingIn } from '../../modules/SingIn';
import { WrapperHome } from '../../modules/Home';
import { ResetPassword } from '../../modules/ResetPassword';
import { Admin } from '../../modules/Admin';
import * as ROUTES from '../../constants/routes';
import './style.scss';

const App = () => (
  <Router>
    <div>
      <div className="app__navigation">
        <WrapperNavigations />
      </div>
      <hr />
      <div className="app__content">
        {/* <Route exact path={ROUTES.LANDING} component={Landing} /> */}
        <Route exact path={ROUTES.LANDING} render={() => <WrapperLanding />} />
        <Route exact path={ROUTES.HOME} component={WrapperHome} />
        <Route exact path={ROUTES.SING_UP} component={WrapperSignUp} />
        <Route exact path={ROUTES.SING_IN} component={WrapperSingIn} />
        <Route exact path={ROUTES.RESET} component={ResetPassword} />
        <Route exact path={ROUTES.ADMIN} component={Admin} />
      </div>
    </div>
  </Router>
);

export { App };

// class App extends React.Component {
//   componentDidMount() {
//     console.log(this.props)
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <div className="app__navigation">
//             <WrapperNavigations />
//           </div>
//           <hr />
//           <div className="app__content">
//             {/* <Route exact path={ROUTES.LANDING} component={Landing} /> */}
//             <Route exact path={ROUTES.LANDING} render={() => <WrapperLanding />} />
//             <Route exact path={ROUTES.HOME} render={() => <WrapperHome />} />
//             <Route
//               exact
//               path={ROUTES.SING_UP}
//               render={() => <WrapperSignUp />}
//             />
//             <Route
//               exact
//               path={ROUTES.SING_IN}
//               render={() => <WrapperSingIn />}
//             />
//             <Route exact path={ROUTES.RESET} render={() => <ResetPassword />} />
//           </div>
//         </div>
//       </Router>
//     )
//   }
// }

// <Route exact path={ROUTES.LANDING} render={() => <WrapperLanding />} />
// <Route exact path={ROUTES.HOME} render={() => <WrapperHome />} />
// <Route
//   exact
//   path={ROUTES.SING_UP}
//   render={() => <WrapperSignUp  />}
// />
// <Route
//   exact
//   path={ROUTES.SING_IN}
//   render={() => <WrapperSingIn  />}
// />
// <Route exact path={ROUTES.RESET} render={() => <ResetPassword />} />
// render={()=><Home user={user}/>}

// const putStateToProps = (state: any) => {
//   const { authorized } = state.root;
//   return {
//     authorized,
//   };
// };

// const WrapperApp = connect(putStateToProps)(App);

// export { WrapperApp };
