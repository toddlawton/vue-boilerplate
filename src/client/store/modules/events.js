/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

import {
  SET_LOADING,
} from '../mutation-types';

const state = {
  loading: false,
};

const mutations = {
  [SET_LOADING](state, loading) {
    state.loading = loading || false;
  },
};

export default {
  state,
  mutations,
};
