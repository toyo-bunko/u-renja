<template>
  <Content :items="bh">
    <v-container class="my-5">
      <v-row class="mb-5">
        <v-col
          ><h2>{{ title }}</h2></v-col
        >
        <v-col class="text-right"
          ><v-btn class="primary" @click="search()"
            ><v-icon class="mr-1">mdi-magnify</v-icon>{{ $t('search') }}</v-btn
          ></v-col
        >
      </v-row>

      <div class="mb-2">
        <a
          href="https://static.toyobunko-lab.jp/u-renja/%E7%8F%BE%E5%9C%A8%E3%81%AE%E9%85%89%E8%93%AE%E7%A4%BE%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%8F%8E%E8%94%B5%E7%8A%B6%E6%B3%81.pdf"
          >現在の酉蓮社における収蔵場所</a
        >から、 酉蓮社本の絞り込みができます。
      </div>

      <div class="mb-2">
        <b>使用上の注意</b
        >：「連」と「箱」において複数の値をチェックした場合、検索条件が同じ層になるように、子階層を選択してください。
        <ul>
          <li class="mt-2">
            <v-chip label class="mr-2 success" small>良い例</v-chip>連「1,
            2」、箱「001<small>（連1が親）</small>,
            017<small>（連2が親）</small>」
          </li>
          <li class="mt-2">
            <v-chip label class="mr-2 error" small>悪い例</v-chip>連「1,
            2」、箱「001<small>（連1が親）</small>」：
            この場合、連2の子階層が指定されていないため、連2の条件は無視されます。
          </li>
        </ul>
      </div>

      <v-row>
        <v-col cols="12" sm="4">
          <v-card outlined flat>
            <v-card-title class="text-h5 text-center grey lighten-2">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">所在・連</span>
                </template>
                酉蓮社の収蔵場所の区画（1～7）
              </v-tooltip>
            </v-card-title>
            <div class="pa-5">
              <v-chip label class="mr-2" small>{{ $t('checked') }}</v-chip>
              {{ rs.join(', ') }}
            </div>

            <v-divider />
            <div class="text-center">
              <v-btn class="ma-2" @click="checkAll(items, 'rs')">{{
                $t('check all')
              }}</v-btn
              ><v-btn class="ma-2" @click="clearAll(items, 'rs')">{{
                $t('clear')
              }}</v-btn>
            </div>
            <v-divider />

            <v-list-item v-for="(item, key) in items" :key="key">
              <template>
                <v-list-item-action>
                  <v-checkbox v-model="rs" :value="key"></v-checkbox>
                  <!-- @change=";(h = ''), (k = [])" -->
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ key }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <template v-if="r === key">
                    <v-btn class="success" depressed @click="r = ''">
                      {{ $t('selected') }}
                    </v-btn>
                  </template>
                  <template v-else>
                    <v-btn @click="r = key">{{ $t('open') }}</v-btn>
                  </template>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card outlined flat>
            <v-card-title class="text-h5 text-center grey lighten-2">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">所在・箱</span>
                </template>
                箱の通し番号（001～111）<br />
                1 連に 16 箱を納める（第 7 連のみ 15 箱）
              </v-tooltip>
            </v-card-title>
            <div class="pa-5">
              <v-chip label class="mr-2" small>{{ $t('checked') }}</v-chip>
              {{ hs.join(', ') }}
            </div>
            <template v-if="r !== ''">
              <template>
                <v-divider />
                <div class="text-center">
                  <v-btn class="ma-2" @click="checkAll(items[r], 'hs')">{{
                    $t('check all')
                  }}</v-btn
                  ><v-btn class="ma-2" @click="clearAll(items[r], 'hs')">{{
                    $t('clear')
                  }}</v-btn>
                </div>
                <v-divider />
                <v-list-item
                  v-for="(item, key) in bbb(items[r])"
                  :key="`${item}-${key}`"
                >
                  <template>
                    <v-list-item-action>
                      <v-checkbox v-model="hs" :value="item"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <template v-if="h === item">
                        <v-btn class="success" depressed @click="h = ''">
                          {{ $t('selected') }}
                        </v-btn>
                      </template>
                      <template v-else>
                        <v-btn @click="h = item">{{ $t('open') }}</v-btn>
                      </template>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card outlined flat>
            <v-card-title class="text-h5 text-center grey lighten-2">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">所在・函</span>
                </template>
                函の通し番号（001～333）<br />
                1 箱は 3 段に分かれ、1 段につき 1 函ずつ納める
              </v-tooltip>
            </v-card-title>
            <div class="pa-5">
              <v-chip label class="mr-2" small>{{ $t('checked') }}</v-chip>
              {{ k.join(', ') }}
            </div>

            <template v-if="r !== '' && h !== ''">
              <v-divider />
              <div class="text-center">
                <v-btn class="ma-2" @click="checkAll(items[r][h], 'k')">{{
                  $t('check all')
                }}</v-btn
                ><v-btn class="ma-2" @click="clearAll(items[r][h], 'k')">{{
                  $t('clear')
                }}</v-btn>
              </div>
              <v-divider />
              <v-list-item
                v-for="(item, key) in items[r][h]"
                :key="`${item}-${key}`"
              >
                <template>
                  <v-list-item-action>
                    <v-checkbox v-model="k" :value="item"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn
                      v-if="images[`${item.replace('-', '_')}`]"
                      text
                      target="_blank"
                      :href="images[`${item.replace('-', '_')}`]"
                    >
                      <img
                        width="24px"
                        :src="baseUrl + '/img/iiif-logo.webp'"
                      />
                    </v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Content>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import Content from '~/components/layouts/Content.vue'

@Component({
  components: {
    Content,
  },
})
export default class Page extends Vue {
  get title(): any {
    return '所在'
  }

  head() {
    return {
      title: this.title,
    }
  }

  get bh(): any[] {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t(this.title),
      },
    ]
  }

  r: string = ''
  h: string = ''

  rs: string[] = []
  hs: string[] = []
  k: string[] = []

  baseUrl: any = process.env.BASE_URL

  items: any = {}

  images: string[] = []

  async mounted() {
    let index: any = await axios.get(process.env.BASE_URL + '/data/tree.json')
    index = index.data
    this.items = index

    let images: any = await axios.get(
      process.env.BASE_URL + '/data/tree_iiif.json'
    )
    images = images.data
    this.images = images

    if (Object.prototype.hasOwnProperty.call(sessionStorage, 'search-params')) {
      const params = JSON.parse(
        (sessionStorage as any).getItem('search-params')
      )
      this.rs = params.rs
      this.hs = params.hs
      this.k = params.k
    }
  }

  checkAll(arr: any, type: string) {
    let values: any = []
    switch (type) {
      case 'rs':
        values = this.rs
        break
      case 'hs':
        values = this.hs
        break
      case 'k':
        values = this.k
        break
    }
    const keys = type === 'k' ? arr : Object.keys(arr)
    const x = new Set(keys)
    const y = new Set(values)
    const union: any = new Set([...x, ...y])
    switch (type) {
      case 'rs':
        this.rs = Array.from(union)
        break
      case 'hs':
        this.hs = Array.from(union)
        break
      case 'k':
        this.k = Array.from(union)
        break
    }
  }

  clearAll(arr: any, type: string) {
    let values: any = []
    switch (type) {
      case 'rs':
        values = this.rs
        break
      case 'hs':
        values = this.hs
        break
      case 'k':
        values = this.k
        break
    }
    const keys = type === 'k' ? arr : Object.keys(arr)
    const x = new Set(values)
    const y = new Set(keys)
    const difference: any = new Set([...x].filter((e) => !y.has(e)))
    switch (type) {
      case 'rs':
        this.rs = Array.from(difference)
        break
      case 'hs':
        this.hs = Array.from(difference)
        break
      case 'k':
        this.k = Array.from(difference)
        break
    }
  }

  bbb(data: any) {
    const keys = Object.keys(data)
    keys.sort()
    return keys // items
  }

  get aaa() {
    if (this.items[this.r]) {
      const data = this.items[this.r]
      const keys = Object.keys(data)
      keys.sort()
      return keys
    } else {
      return []
    }
  }

  ccc(data: any) {
    const keys = Object.keys(data)
    keys.sort()
    // return keys // items
    console.log(keys.sort())

    const map = []
    for (const key of keys) {
      map.push({
        label: key,
        value: data[key],
      })
    }
    return map
  }

  search() {
    const query: any = {}

    const rs = this.rs
    if (rs.length > 0) {
      for (let i = 0; i < rs.length; i++) {
        query[`main[refinementList][連][${i}]`] = rs[i]
      }
    }

    const hs = this.hs
    if (hs.length > 0) {
      for (let i = 0; i < hs.length; i++) {
        query[`main[refinementList][箱][${i}]`] = hs[i]
      }
    }

    const k = this.k
    if (k.length > 0) {
      for (let i = 0; i < k.length; i++) {
        query[`main[refinementList][函册次][${i}]`] = k[i]
      }
    }

    const map: any = {
      rs,
      hs,
      k,
    }

    sessionStorage.setItem('search-params', JSON.stringify(map)) // 👈 sessionStorageへ保存 ・・・ ②

    this.$router.push(
      this.localePath({
        name: 'search-slug',
        params: { slug: 'advanced' },
        query,
      })
    )
  }
}
</script>
