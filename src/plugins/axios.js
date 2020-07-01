"use strict";

import Vue from 'vue';
import axios from 'axios';
import Store from '@/store'

const token = Store.state.login.token ? Store.state.login.token: ''

let config = {
  baseURL: process.env.VUE_APP_APIURL || "",
  Authorization: 'Bearer ' + token,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

export const httpClient = axios.create(config);

Plugin.install = function(Vue, options) {
  Vue.axios = httpClient;
  window.axios = httpClient;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return httpClient;
      }
    },
    $axios: {
      get() {
        return httpClient;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
