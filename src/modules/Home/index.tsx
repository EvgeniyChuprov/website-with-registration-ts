import React from 'react';

import { withAuthorization } from '../../services/Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = (authUser: {} | null) => !!authUser;

const Home = withAuthorization(condition)(HomePage);

export { Home };
