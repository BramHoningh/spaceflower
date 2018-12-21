import VueTypes from 'vue-types';

export default {
  name: 'Intro',
  props: {
    title: VueTypes.string,
    subTitle: VueTypes.string,
    description: VueTypes.string,
  },
};
