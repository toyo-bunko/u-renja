<template>
  <div>
    <v-navigation-drawer v-model="drawer" :temporary="true" app>
      <v-list>
        <v-list-item
          v-for="(item, key) in menu"
          :key="key"
          :to="item.to"
          :href="item.href"
          link
        >
          <v-list-item-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <span>{{ $t(item.label) }}</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="primary" dark>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        <nuxt-link
          :to="localePath({ name: 'index' })"
          style="color: inherit; text-decoration: inherit"
        >
          {{ $t('酉蓮社（旧増上寺報恩蔵）蔵嘉興版大蔵経目録データベース') }}
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="!isMobile">
        <template v-for="(item, key) in menu">
          <template v-if="item.tooltip">
            <v-tooltip :key="key" bottom>
              <template #activator="{ on, attrs }">
                <v-btn
                  class="ma-1"
                  text
                  depressed
                  :to="item.to"
                  :href="item.href"
                  exact
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon v-if="item.icon" class="mr-1">{{ item.icon }}</v-icon>
                  {{ $t(item.label) }}
                </v-btn>
              </template>
              {{ item.tooltip }}
            </v-tooltip>
          </template>
          <template v-else>
            <v-btn
              :key="key"
              class="ma-1"
              text
              depressed
              :to="item.to"
              :href="item.href"
              exact
            >
              <v-icon v-if="item.icon" class="mr-1">{{ item.icon }}</v-icon>
              {{ $t(item.label) }}
            </v-btn>
          </template>
        </template>
      </template>

      <v-menu offset-y>
        <template #activator="{ on }">
          <v-btn icon depressed btn v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item :to="switchLocalePath('ja')">
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item :to="switchLocalePath('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  drawer: boolean = false

  menu: any[] = [
    {
      label: 'about_',
      to: this.localePath({ name: 'about' }),
    },
    {
      label: '所在',
      to: this.localePath({ name: 'tree' }),
      tooltip:
        '現在の酉蓮社における収蔵場所から、酉蓮社本の絞り込みができます。',
    },
    {
      label: '書名目録',
      to: this.localePath({ name: 'search-slug' }),
      tooltip:
        '酉蓮社本の書名目録です。もっと詳しい情報をご覧になりたい方は、「詳細目録」をお使いください。',
    },
    {
      label: '詳細目録',
      to: this.localePath({
        name: 'search-slug',
        params: { slug: 'advanced' },
      }),
      tooltip:
        '酉蓮社本の詳細目録です。書名のリストや情報をご覧になりたい方は、「書名目録」をお使いください。',
    },
    {
      label: 'category',
      to: this.localePath({ name: 'category' }),
    },

    /*
    {
      label: 'はじめに・凡例',
      href: this.baseUrl + '/はじめに・凡例.pdf',
    },
    */
    {
      label: 'dataset',
      to: this.localePath({ name: 'page-slug', params: { slug: 'dataset' } }),
    },
  ]

  get isMobile() {
    if (['xs', 'sm'].includes(this.$vuetify.breakpoint.name)) {
      return true
    } else {
      return false
    }
  }
}
</script>
