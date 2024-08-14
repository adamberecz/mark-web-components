// vueform.config.js

import en from '@vueform/vueform/locales/en'
import vueform from '@vueform/vueform/dist/vueform'
import axios from 'axios'

axios.defaults.headers.post = {
  // 'Content-Type': 'application/json'
  // ADD Authorization bearer token here
}

export default {
  theme: vueform,
  locales: { en },
  locale: 'en',
}