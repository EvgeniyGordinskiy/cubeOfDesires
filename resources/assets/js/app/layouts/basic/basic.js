/* ============
 * Basic Layout
 * ============
 *
 * This is the layout for the authenticated user.
 */

import { mapGetters } from 'vuex';
import Header from './../../components/headers/headerGuest/headerGuest.vue';

export default {
  data() {
    return {

    };
  },

  methods: {
    logout() {
    //  authService.logout();
    },
  },
  components: {
    // headerv: this.headerComponent,
  },
};
