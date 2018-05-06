/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';
import auth from './app/services/auth';
import 'element-ui/lib/theme-default/index.css';
// import 'bootstrap/dist/css/bootstrap.css';

/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Axios from 'axios';
const logoutErrors = [
 401
];

Axios.defaults.headers.common.Accept = 'application/json';
Axios.interceptors.response.use(
    response => response,
    (error) => {

        if(error.response.status === 401) {
            auth.logout();
        }

        /**
         * If response is unauthorized and it is not a request retry from auth service.
         */
        if (error.response.status === 401 && error.response.request.responseURL.indexOf('retry=1') === -1) {
        const errorCode = error.response.data.error.code;
          /**
           * If error should log user out.
           */
          if (logoutErrors.indexOf(errorCode) >= 0) {
            }


      }
      return Promise.reject(error);
    });
Axios.interceptors.request.use((config) => {
  if (localStorage.getItem('id_token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
  }
  return config;
}, error => Promise.reject(error));
Vue.$http = Axios;

/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 * Stylus is used for this boilerplate.
 *
 * If you don't want to use Stylus, that's fine!
 * Replace the stylus directory with the CSS preprocessor you want.
 * Require the entry point here & install the webpack loader.
 *
 * It's that easy...
 *
 * http://stylus-lang.com/
 */
require('./assets/stylus/app.styl');

/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync';
import store from './app/store';

store.dispatch('checkAuthentication');
store.dispatch('getAccount', {});

/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router';
import routes from './app/routes';
import routeMidlleware from './app/route-middleware';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});

router.beforeEach(routeMidlleware.beforeEach);

VuexRouterSync.sync(store, router);

Vue.router = router;

/* ============
 * Element User Interface
 * ============
 *
 * Vue.js UI components.
 *
 * http://element.eleme.io/#/en-US
 */
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
  router,
};
