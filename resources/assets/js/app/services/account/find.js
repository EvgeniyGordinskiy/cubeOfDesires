import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (account, resolve) => {
  store.dispatch('getAccount', account.data);
  resolve(account.data);
};

// When the request fails
const failed = (error, reject) => {
  reject(error);
};

export default () => (
  new Promise((resolve, reject) => {
    Vue.$http.get('api/account')
            .then((response) => {
              success(response.data, resolve);
            })
            .catch((error) => {
              failed(error, reject);
            });
  })
);
