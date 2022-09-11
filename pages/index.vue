<template>
  <div>
    <v-row class="mb-10">
      <v-col>
        <v-container>
          <div class="mb-5 pb-5 text-center">
            <img
              class="my-5"
              width="90"
              :src="baseUrl + '/img/「猶龍窟」印.png'"
            />
            <h2 class="mb-5">{{ $t(siteName) }}</h2>
            <p class="py-5" v-html="siteDesc"></p>

            <p>以下からお試しください。</p>

            <v-btn
              v-for="(item, key) in [
                {
                  label: '所在',
                  path: {
                    name: 'tree',
                  },
                },
                {
                  label: '書名目録',
                  path: {
                    name: 'search-slug',
                  },
                },
                {
                  label: '詳細目録',
                  path: {
                    name: 'search-slug',
                    params: { slug: 'advanced' },
                  },
                },
              ]"
              :key="key"
              rounded
              depressed
              class="ma-2"
              dark
              color2="primary"
              color="error"
              :to="localePath(item.path)"
            >
              {{ $t(item.label) }}
            </v-btn>
          </div>
        </v-container>
      </v-col>
      <v-col>
        <v-sheet color="grey">
          <v-img height="400" contain :src="slides[0]"></v-img>
        </v-sheet>
        <v-container>
          <p class="text-right">
            <v-chip class="text-right" label
              >酉蓮社本を収める経箱。1箱に3函を納める。</v-chip
            >
          </p>
        </v-container>
      </v-col>
    </v-row>

    <v-sheet color="grey lighten-3" class="">
      <v-container class="py-10">
        <div>
          <span class="text-h5 mr-2">{{ $t('news') }}</span>
          <nuxt-link :to="localePath({ name: 'news' })">{{
            $t('all')
          }}</nuxt-link>

          <News class="mt-4" />
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import News from '~/components/news/News.vue'

@Component({
  components: {
    News,
  },
})
export default class Page extends Vue {
  head() {
    return {
      titleTemplate: null,
    }
  }

  baseUrl: any = process.env.BASE_URL

  siteName: any = '酉蓮社（旧増上寺報恩蔵）蔵嘉興版大蔵経目録データベース'
  siteDesc: any =
    '酉蓮社（旧増上寺報恩蔵）蔵嘉興版大蔵経目録データベースへようこそ'

  slides: string[] = [process.env.BASE_URL + '/img/経箱画像.png']
}
</script>
