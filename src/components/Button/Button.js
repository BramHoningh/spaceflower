import VueTypes from 'vue-types';

export default {
  name: 'Button',
  props: {
    title: VueTypes.string,
    type: VueTypes.string.def('primary'),
  },
  computed: {
    getIcon() {
      return this.type === 'primary' ? 'arrow-white' : 'arrow-black';
    },
  },
};
