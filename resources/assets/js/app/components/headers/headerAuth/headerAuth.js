/* ============
 * Dashboard menu
 * ============
 *
 * This is the header component.
 */

// import authService from './../../services/auth';
import { mapGetters } from 'vuex';

export default {

    computed: {
      ...mapGetters({
       // account: 'account',
      }),

      // username() {
      //   if (this.account.firstName !== undefined) {
      //     return `${this.account.firstName} ${this.account.lastName}`;
      //   }
      //   return '';
      // },
      //
      // email() {
      //   if (this.account.email !== undefined) {
      //     return `${this.account.email}`;
      //   }
      //   return '';
      // },
      //
      // avatar() {
      //   const avatar = this.account.avatar;
      //   if (avatar !== undefined && avatar.url !== undefined) {
      //     return avatar.url;
      //   }
      //   return false;
      // },
  },

  mounted() {
  },

  methods: {
    /**
     * This method will logout the user.
     */
    logout() {
     //authService.logout();
    },
  },
  created() {
  }
};
