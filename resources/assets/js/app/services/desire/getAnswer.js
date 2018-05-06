import Vue from 'vue';

/**
 * When the request succeeds
 */
const success = (data, resolve) => {
    resolve(data.answer);

};

/**
 * When the request fails
 */
const failed = (error, reject) => {
    return reject(error.response.data);
};

export default user => (
    new Promise((resolve, reject) => {
        Vue.$http.get('api/desire')
            .then((response) => {
                success(response.data, resolve);
            })
            .catch((error) => {
                failed(error, reject);
            });
    })
);
