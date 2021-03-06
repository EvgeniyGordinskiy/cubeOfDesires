/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

// Auth
export const isAuthenticated = state => state.auth.authenticated;


// Profile
export const account = state => state.profile.account;