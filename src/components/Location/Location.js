import VueTypes from 'vue-types';

export default {
  name: 'Location',
  props: {
    image: VueTypes.string,
    city: VueTypes.string,
    tel: VueTypes.string,
  },
};
