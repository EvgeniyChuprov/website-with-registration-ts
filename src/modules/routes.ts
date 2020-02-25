import { routes as searchRoutes } from './Search/routes';
import { routes as profileRoutes } from './Profile/routes';
// import { routes as registrationRoutes } from './Registration/routes';

export const routes = {
  ...searchRoutes,
  ...profileRoutes,
  // ...registrationRoutes,
};
