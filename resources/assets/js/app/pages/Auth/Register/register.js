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
        name: {
          value: '',
          type: 'text',
          label: 'Name',
          placeholder: 'Name'
        },
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
        password_confirmation: {
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
    register() {
      this.form.loading = true;
      auth.register(this.form.data())
          .then((resp) => {
          })
          .catch((errors) => {
            this.form.loading = false;
            this.form.recordErrors(errors.errors);
          });
    },
  },

  components: {
    formv: Formvue,
  },
};
