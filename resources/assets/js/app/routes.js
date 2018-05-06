/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import headerGuest from './components/headers/headerGuest/headerGuest.vue';
import footerGuest from './components/footers/footerGuest/footerGuest.vue';


const BasicLayout = (resolve) => {
  require.ensure(['./layouts/basic/basic.vue'], () => {
  resolve(require('./layouts/basic/basic.vue'));
  }, 'basic-layout');
};

const AuthLayout = (resolve) => {
  require.ensure(['./layouts/auth/auth.vue'], () => {
  resolve(require('./layouts/auth/auth.vue'));
  }, 'auth-layout');
};

const Home = (resolve) => {
  require.ensure(['./pages/Home/home.vue'], () => {
  resolve(require('./pages/Home/home.vue'));
  }, 'home');
};

const Login = (resolve) => {
  require.ensure(['./pages/Auth/Login/login.vue'], () => {
  resolve(require('./pages/Auth/Login/login.vue'));
  }, 'login');
};

const Register = (resolve) => {
  require.ensure(['./pages/Auth/Register/register.vue'], () => {
  resolve(require('./pages/Auth/Register/register.vue'));
  }, 'register');
};

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '',
    components: {
      default: BasicLayout,
      'header' : headerGuest,
      'footer' : footerGuest
    },
    children: [
      // Home
      {
        path: '/home',
        name: 'home',
        components: {
          default: Home,
        },
        meta: {
          auth: true,
        },
      },
    ]
  },
  //Auth 
  {
    path: '/auth',
    components: {
      default: AuthLayout,
    },
    children: [
      // Login
      {
        path: '/login',
        name: 'login',
        components: {
          default: Login,
        },
      },
      // Register
      {
        path: '/register',
        name: 'register',
        components: {
          default: Register,
        },
      },
    ]
  },

  {
    path: '/*',
    redirect: '/login',
  },
];
