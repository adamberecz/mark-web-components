import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue';
import { createWebComponent } from 'vue-web-component-wrapper';
import styles from '@vueform/vueform/dist/vueform.css?raw';
import Vueform from '@vueform/vueform';
import vueformConfig from './../vueform.config';
import MyForm from './components/MyForm.vue';

createWebComponent({
  rootComponent: MyForm,
  elementName: 'my-form',
  plugins: {
    install(Vue) {
      Vue.use(Vueform, vueformConfig);
    },
  },
  cssFrameworkStyles: styles,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  disableStyleRemoval: true,
  disableShadowDOM: true,
  props: {
    // Define the props that the custom element will accept
    productId: String,
    siteId: String,
    // Submit url
    url: String,
    // Submit authorization token
    t: String,
  },
});
