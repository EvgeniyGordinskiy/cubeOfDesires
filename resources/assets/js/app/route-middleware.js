import store from './store';
/**
 * Perform actions before each route
 * @param  {[type]}   to   route to be accessed
 * @param  {[type]}   from route coming from
 * @param  {Function} next resolves the hook, must be called
 * @return {Function}        [description]
 */
const beforeEach = (to, from, next) => {
  /**
   * Authenticated routes.
   */
  if (to.matched.some(record => record.meta.auth)) {
    /**
     * If user is not authenticated, redirect to home.
     */
    if (!store.state.auth.authenticated) {
      return next({
        name: 'login',
      });
    }
  }

  if(store.state.auth.authenticated && to.name === 'login') {
    return next({
      name: from.name,
    });
  }
    /**
     * Let user through.
     */
  return next();
};

export default {
  beforeEach,
};
