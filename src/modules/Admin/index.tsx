import React from 'react';

import { withFirebase } from '../../services/Firebase';
// import { withAuthorization } from '../../services/Session';
// import * as ROLES from '../../constants/roles';

interface IProps {
  firebase: {
    users(): firebase.database.Reference;
  }
}

interface IState {
  users: [],
  loading: boolean,
}

interface IUser {
  uid: string,
  email: string,
  username: string,
}

class AdminPage extends React.Component<IProps> {
  public state: IState = {
    users: [],
    loading: false,
  };

  componentDidMount() {
    const { firebase } = this.props;

    this.setState({ loading: true });

    firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    const { firebase } = this.props;
    firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        <p>
          The Admin Page is accessible by every signed in admin user.
        </p>
        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }: {users: any}) => (
  <ul>
    {users.map((user: IUser) => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong>
          {user.uid}
          <br />
        </span>
        <span>
          <strong>E-Mail:</strong>
          {user.email}
          <br />
        </span>
        <span>
          <strong>Username:</strong>
          {user.username}
          <br />
        </span>
        <hr />
      </li>
    ))}
  </ul>
);

// // const condition = (authUser: {} | null) =>
// //   authUser && !!authUser.roles[ROLES.ADMIN];
// const condition = (authUser: any) =>
//   authUser && authUser.roles.includes(ROLES.ADMIN);
//   console.log(1234, withAuthorization(withFirebase(AdminPage)))
// // const Admin = withAuthorization(condition, withFirebase(AdminPage));

// const Admin = withAuthorization(condition(withFirebase(AdminPage)))(AdminPage);

// const Admin = withAuthorization(condition, withFirebase(AdminPage));
const Admin = withFirebase(AdminPage);

export { Admin };
