import { routes as searchRoutes } from './Search/routes';
import { routes as profileRoutes } from './Profile/routes';
import { routes as registration } from './Registration/routes';
import { routes as signUp } from './SignUp/routes';
import { routes as signIn } from './SingIn/routes';

export const routes = {
  ...searchRoutes,
  ...profileRoutes,
  ...registration,
  ...signUp,
  ...signIn,
};
