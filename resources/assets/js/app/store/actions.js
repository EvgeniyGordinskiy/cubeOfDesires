/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */
import * as types from './mutation-types';

// Auth
export const login = ({ commit }, token) => {
  commit(types.LOGIN, token);
};

export const logout = ({ commit }) => {
  commit(types.RESET_PROFILE);
  commit(types.LOGOUT);
};

export const checkAuthentication = ({ commit }) => {
  commit(types.CHECK_AUTHENTICATION);
};

// Profile
export const getAccount = ({ commit }, account) => {
  commit(types.GET_ACCOUNT, account);
};


