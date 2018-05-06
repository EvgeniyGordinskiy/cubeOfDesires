import Vue from 'vue';
import accountTransformer from './../../transformers/custom/accountSetup';
import accountService from './../account';
import store from './../../store';

const success = (token, resolve) => {
  store.dispatch('login', token.token);
  accountService.find().then(() => {
    Vue.router.push({
      name: 'home',
    });
    resolve();
  });
};

const failed = (errors, reject) => {
  reject(errors);
};

export default user => (
  new Promise((resolve, reject) => {
    Vue.$http
      .post('api/auth/register', user)
      .then((response) => {
        success(response.data, resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  })
);
