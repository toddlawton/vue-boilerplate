import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import events from './modules/events';

const modules = {
  events,
};

Vue.use(Vuex);

// Merge in the default state for each store module
const defaultState = {};

Object.keys(modules).forEach((module) => {
  if (modules[module].state) {
    const moduleState = {};
    moduleState[module] = modules[module].state;
    Object.assign(defaultState, moduleState);
  }
});

const createStore = () => {
  const x = new Vuex.Store({
    defaultState,
    actions,
    getters,
    modules,
  });

  return x;
};

export { createStore };

export default createStore();
