import TextConverterVue from '@/views/TextConverter.vue'
import type { RouteRecordRaw } from 'vue-router'


export default [
  {

    path: '/:locale?',
    name: 'index',
    component: TextConverterVue,
  },
] as RouteRecordRaw[]
