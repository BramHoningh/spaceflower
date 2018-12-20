import VueTypes from 'vue-types';

export default {
  name: 'ArticleItem',
  props: {
    title: VueTypes.string,
    description: VueTypes.string,
    image: VueTypes.string,
    isDark: VueTypes.bool.def(false),
  },
};
