<template>
  <Content :items="bh">
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <ul class="my-5">
        <li v-for="(item, key) in menu" :key="key" class="mb-2">
          <template v-if="item.to">
            <nuxt-link :to="item.to">{{ item.label }}</nuxt-link>
          </template>
          <template v-else>
            <a :href="item.href">{{ item.label }}</a>
          </template>
        </li>
      </ul>
    </v-container>
  </Content>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Content from '~/components/layouts/Content.vue'

@Component({
  components: {
    Content,
  },
})
export default class Page extends Vue {
  get title(): any {
    return this.$t('about_')
  }

  head() {
    return {
      title: this.title,
    }
  }

  baseUrl: any = process.env.BASE_URL

  get bh(): any[] {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  menu: any[] = [
    {
      label: 'はじめに', // ・凡例
      // href: this.baseUrl + '/はじめに・凡例.pdf',
      to: this.localePath({ name: 'page-slug', params: { slug: 'about' } }),
    },
    {
      label: '現在の酉蓮社における収蔵状況',
      href: this.baseUrl + '/現在の酉蓮社における収蔵状況.pdf',
    },

    {
      label: '『大正新脩大蔵経』底本・校本DB',
      href: process.env.db,
    },
  ]
}
</script>
