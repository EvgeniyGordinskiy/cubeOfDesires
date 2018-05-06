import {
  GET_ACCOUNT,
  RESET_PROFILE,
} from './../../mutation-types';

export default {
  [GET_ACCOUNT](state, account) {
    if (Object.keys(account).length !== 0) {
      localStorage.setItem('account', JSON.stringify(account));
      state.account = account;
    } else {
      state.account = JSON.parse(localStorage.getItem('account'));
    }
  },

  [RESET_PROFILE](state) {
    state.account = {};
    localStorage.removeItem('account');
  },
};
