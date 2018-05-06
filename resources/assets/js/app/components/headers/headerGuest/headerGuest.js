/* ============
 * Dashboard menu
 * ============
 *
 * This is the header component.
 */

import authService from './../../../services/auth';
import { mapGetters } from 'vuex';

export default {

    computed: {
      ...mapGetters({
       account: 'account',
      }),

      username() {
        if (this.account.name !== undefined) {
          return this.account.name;
        }
        return '';
      },

      email() {
        if (this.account.email !== undefined) {
          return this.account.email;
        }
        return '';
      },

      avatar() {
        return false;
      },
  },

  mounted() {
  },

  methods: {
    /**
     * This method will logout the user.
     */
    logout() {
     authService.logout();
    },
  },
};
