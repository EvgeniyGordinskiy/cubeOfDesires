import Vue from 'vue';
import { LOGOUT, CHECK_AUTHENTICATION, LOGIN, UPDATE_REFRESHING } from './../../mutation-types';

export default {
  [CHECK_AUTHENTICATION](state) {
    // eslint-disable-next-line
    state.authenticated = !!localStorage.getItem('id_token');
  },

  [LOGIN](state, token) {
    state.authenticated = true;
    localStorage.setItem('id_token', token);
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  [LOGOUT](state) {
    // eslint-disable-next-line
    state.authenticated = false;
    localStorage.removeItem('id_token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },

  [UPDATE_REFRESHING](state, value) {
    // eslint-disable-next-line
    state.refreshing = value;
  },
};
