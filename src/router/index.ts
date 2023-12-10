import TextConverterVue from '@/views/TextConverter.vue'


export default [
  {
    path: '/:locale?',
    name: 'index',
    component: TextConverterVue,
  },
]
