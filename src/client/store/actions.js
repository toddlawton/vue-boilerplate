import * as type from './mutation-types';

export const setLoadingState = ({ commit }, isLoading) => {
  commit(type.SET_LOADING, isLoading);
};
