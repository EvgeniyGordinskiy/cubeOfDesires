/* ============
 * Login User
 * ============
 *
 * This is the page for logging user in.
 */

import auth from './../../../services/auth';
import Forms from './../../../utils/forms/forms';
import Formvue from './../../../components/form/form.vue';

export default {
  data() {
    return {
      form: new Forms({
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          placeholder: 'Email'
        },
        password: {
          value: '',
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        },
      }),
    };
  },

  methods: {
    /**
     * Logs the user in
     */
    login() {
      this.form.loading = true;
      auth.login(this.form.data())
          .catch((errors) => {
            this.form.loading = false;
            if(!('email' in errors.error) && !('password' in errors.error) && 'message' in errors.error) {
              {
                errors.error['email'] = [];
                errors.error['email'].push(errors.error.message);
              }
            }
            this.form.recordErrors(errors.error);
          });
    },
  },

  components: {
    formv: Formvue,
  },
};
