<template>
  <div>
    <table
      border="1"
      style="border-collapse: collapse"
      width="100%"
      class="my-2"
    >
      <thead>
        <tr>
          <th>
            <template v-if="!flg1">
              <v-tooltip bottom>
                <template #activator="{ on }">
                  <span class="legend" v-on="on" @click="flg1 = !flg1">▶︎</span>
                </template>
                <span>クリックすると、「分類」を表示します</span>
              </v-tooltip>
            </template>
            <template v-else>
              <span class="legend" @click="flg1 = !flg1">◀︎</span>
              <span class="legend" @click="displayLegend('1')">分類</span>
            </template>
          </th>
          <th><span class="legend" @click="displayLegend('2')">函册</span></th>
          <th><span class="legend" @click="displayLegend('3')">經番</span></th>
          <th><span class="legend" @click="displayLegend('4')">通番</span></th>
          <th>
            <span class="legend" @click="displayLegend('5')"
              >經典名稱・卷數</span
            >
          </th>
          <th>
            <span class="legend" @click="displayLegend('6')">譯著者</span>
          </th>
          <th><span class="legend" @click="displayLegend('7')">版式</span></th>
          <th><span class="legend" @click="displayLegend('8')">刊記</span></th>
          <th><span class="legend" @click="displayLegend('9')">備考</span></th>
          <th>
            <span class="legend" @click="displayLegend('10')">寸法</span>
            <template v-if="!flg2">
              <v-tooltip bottom>
                <template #activator="{ on }">
                  <span style="cursor: pointer" v-on="on" @click="flg2 = !flg2">
                    ▶︎
                  </span>
                </template>
                <span>クリックすると、「寸法(備考)」を表示します</span>
              </v-tooltip>
            </template>
          </th>
          <th v-if="flg2">
            <span style="cursor: pointer" @click="flg2 = !flg2">◀︎</span>
            <span style="cursor: pointer" @click="displayLegend('11')"
              >寸法（備考）</span
            >
          </th>
          <th>
            <span class="legend" @click="displayLegend('12')"
              >大正藏採録状況</span
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in items" :key="index">
          <td>
            {{ flg1 ? bunrui(obj) : '' }}
          </td>
          <td>{{ tana(obj) }}</td>
          <td>{{ $utils.formatArrayValue(obj['經番']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['通番']) }}</td>

          <td>
            <span
              v-html="highlight($utils.formatArrayValue(obj['經典名稱・卷數']))"
            ></span>
            <template v-if="obj.images && obj.images.length > 0">
              <template v-for="(item2, key2) in obj.images">
                <span v-if="item2" :key="key2" class="mx-1">
                  <v-tooltip bottom>
                    <template #activator="{ on }">
                      <span v-on="on">
                        <template v-if="item2.id">
                          <a
                            :href="`${item2.id
                              .split('https://static.toyobunko-lab.jp/u-renja')
                              .join(baseUrl)}`"
                            target="_blank"
                          >
                            <img
                              width="24px"
                              :src="baseUrl + '/img/iiif-logo.webp'"
                            />
                          </a>
                        </template>
                        <!-- 複数の値の場合 -->
                        <template v-else>
                          <a @click="clickIcon(item2)">
                            <img
                              width="24px"
                              :src="baseUrl + '/img/iiif-logo.webp'"
                            />
                          </a>
                        </template>
                      </span>
                    </template>
                    <span>{{ item2.label }}の画像を開く</span>
                  </v-tooltip>
                </span>
              </template>
            </template>
          </td>
          <td v-html="highlight($utils.formatArrayValue(obj['譯著者']))"></td>
          <td v-html="highlight($utils.formatArrayValue(obj['版式']))"></td>
          <td v-html="highlight($utils.formatArrayValue(obj['刊記']))"></td>
          <td v-html="highlight($utils.formatArrayValue(obj['備考']))"></td>
          <td>
            {{ size(obj) }}
          </td>
          <td v-if="flg2">
            {{ $utils.formatArrayValue(obj['寸法（備考）']) }}
          </td>
          <td>
            <template v-if="obj.related && obj.related[0] != ''">
              <p
                v-for="(item, key) in obj.related"
                :key="key"
                class="mb-0 pb-0"
              >
                <a
                  :href="`https://static.toyobunko-lab.jp/taishozo/search?main%5Bquery%5D=${item['大正藏經典番號']}`"
                  target="_blank"
                  >{{ item.大正藏經典番號 }}{{ item.大正藏採録種別 }}({{
                    item.大正藏脚注テキスト標準名称
                  }})</a
                >
              </p>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <div class="pa-4">
          <p>
            SAT大蔵経データベース研究会作成の「酉蓮社所蔵
            万暦版大蔵経（嘉興蔵）」サイトに移動します。<br />
            下記よりご覧になりたい部分をクリックしてください。
          </p>

          <ul>
            <li v-for="(item, key3) in images" :key="key3">
              <a :href="item.id" target="_blank">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            {{ $t('close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog4legend" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          書名目録 凡例
        </v-card-title>

        <div class="pa-4">
          <v-simple-table>
            <template #default>
              <tbody>
                <tr>
                  <td>項目名</td>
                  <td>{{ legend['項目名'] }}</td>
                </tr>
                <tr>
                  <td>説明</td>
                  <td>{{ legend['説明'] }}</td>
                </tr>
                <tr>
                  <td>例</td>
                  <td v-html="legend['例'].split('\n').join('<br />')"></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog4legend = false">
            {{ $t('close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'

@Component({
  components: {
    ResultOption,
  },
})
export default class FullTextSearch extends Vue {
  baseUrl: any = process.env.BASE_URL
  @Prop({})
  items!: any[]

  flg1: boolean = false
  flg2: boolean = false

  dialog: boolean = false

  dialog4legend: boolean = false

  images: any[] = []
  title: string = ''

  bunrui(obj: any) {
    return (
      this.$utils.formatArrayValue(obj['分類(1)']) +
      ' ' +
      (obj['分類(2)'] ? this.$utils.formatArrayValue(obj['分類(2)']) : '') +
      (obj['分類(3)'] ? ' ' + this.$utils.formatArrayValue(obj['分類(3)']) : '')
    )
  }

  tana(obj: any) {
    return (
      this.$utils.formatArrayValue(obj['函册']) +
      (obj['函册(to)'] && obj['函册(to)'][0] !== ''
        ? '~' + this.$utils.formatArrayValue(obj['函册(to)'])
        : '') +
      (obj['函册(闕)'] ? this.$utils.formatArrayValue(obj['函册(闕)']) : '')
    )
  }

  size(obj: any) {
    // console.log({ obj })
    if (!this.$utils.formatArrayValue(obj['寸法(縦）'])) {
      return ''
    }
    return (
      (this.$utils.formatArrayValue(obj['寸法(縦）']) || '') +
      '×' +
      (this.$utils.formatArrayValue(obj['寸法(横)']) || '') +
      '(' +
      (this.$utils.formatArrayValue(obj['寸法（計測箇所）']) || '') +
      ')'
    )
  }

  status(obj: any) {
    const results = []

    for (let i = 1; i < 5; i++) {
      const label = i === 1 ? '大正藏經典番號' : '大正藏經典番号'

      const value = obj[label + '(' + i + ')']

      if (!value || !this.$utils.formatArrayValue(value)) {
        continue
      }
      results.push(
        '<a href="https://static.toyobunko-lab.jp/taishozo/search?main[query]=' +
          this.$utils.formatArrayValue(value) +
          '" target="_blank">' +
          this.$utils.formatArrayValue(value) +
          this.$utils.formatArrayValue(obj['大正藏採録種別(' + i + ')']) +
          '(' +
          this.$utils.formatArrayValue(
            obj['大正藏脚注テキスト標準名称(' + i + ')']
          ) +
          ')' +
          '</a>'
      )
    }
    return results.join('<br/>')
  }

  highlight(text: string) {
    const keyword: any = this.$route.query['main[query]']
    if (!keyword) {
      return text
    }

    let keywords = keyword
    if (typeof keyword !== 'object') {
      keywords = [keyword]
    }

    const keywordsWithItaiji = []

    const synonym: any = process.env.both

    for (let keyword of keywords) {
      const words = keyword.split('')
      for (const word of words) {
        if (synonym[word]) {
          keyword = keyword.split(word).join(`(${synonym[word].join('|')})`)
        }
      }
      keywordsWithItaiji.push(keyword)
    }

    const uuidMap: any = {}

    let result = text

    for (const keyword of keywordsWithItaiji) {
      const regexp = new RegExp(keyword, 'g')
      result = result.replace(regexp, function (match) {
        const uuid = getUniqueStr()
        uuidMap[uuid] = '<em>' + match + '</em>'
        return uuid
      })
    }

    for (const uuid in uuidMap) {
      result = result.replace(uuid, uuidMap[uuid])
    }
    return result
  }

  clickIcon(value: any) {
    this.dialog = true
    this.images = value.value
    this.title = value.label
  }

  legends: any = process.env.legendIndex
  legend: any = {}

  displayLegend(index: string) {
    // console.log({ index }, this.legends)
    // console.log({ index })

    this.dialog4legend = true
    this.legend = this.legends[index]
  }
}

function getUniqueStr() {
  const strong: number = 1000
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  )
}
</script>
<style>
.legend {
  cursor: pointer;
}
</style>
