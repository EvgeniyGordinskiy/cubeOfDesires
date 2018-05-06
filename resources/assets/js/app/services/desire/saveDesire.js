import Vue from 'vue';
import accountService from './../account';
import store from './../../store';

/**
 * When the request succeeds
 */
const success = (token, resolve) => {
};

/**
 * When the request fails
 */
const failed = (error, reject) => {
    return reject(error.response.data);
};

export default desire => (
    new Promise((resolve, reject) => {
        Vue.$http.post('api/desire', desire)
            .then((response) => {
                success(response.data, resolve);
            })
            .catch((error) => {
                failed(error, reject);
            });
    })
);
