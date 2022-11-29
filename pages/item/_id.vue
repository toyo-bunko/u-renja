<template>
  <Content :items="bh" class="mb-10">
    <v-container v-if="apiResult">
      <h2 class="text-center my-5">
        {{ $t('詳細情報') }}
      </h2>
      <table
        border="1"
        style="border-collapse: collapse"
        width="100%"
        class="my-2"
      >
        <template v-for="(field, index) in fields">
          <tr :key="index">
            <th width="30%">
              <span class="legend" @click="displayLegend(`${index + 1}`)">{{
                field
              }}</span>
            </th>
            <td>{{ $utils.formatArrayValue(apiResult[field], ' ') }}</td>
          </tr>
        </template>
      </table>
    </v-container>

    <v-dialog v-model="dialog4legend" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          詳細目録 凡例
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
                  <td>
                    <template v-if="legend['例']">
                      <span
                        v-html="String(legend['例']).split('\n').join('<br />')"
                      ></span>
                      <!--
                      -->
                    </template>
                  </td>
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
  </Content>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ShareButtons from '~/components/common/ShareButtons.vue'
import Content from '~/components/layouts/Content.vue'

@Component({
  components: {
    ShareButtons,
    Content,
  },
})
export default class Search extends Vue {
  fields: string[] = [
    '分類(1)',
    '分類(2)',
    '分類(3)',
    '連',
    '箱',
    '段',
    '冊',
    '闕',
    '函册次',
    '表紙の函次(書入)',
    '表紙等(備考)',
    '函(種別通番)',
    '函(通番)',
    '經番',
    '通番',
    '枝番',
    '寸法(1)',
    '寸法(2)',
    '計測箇所(1)',
    '計測箇所(2)',
    '題簽',
    '題簽(備考)',
    '千字文',
    '千字文(備考)',
    '經典名稱',
    '經典名稱（備考）',
    '卷次等',
    '卷次等(根拠)',
    '卷次等(備考)',
    '卷次(譯著者)',
    '丁數',
    '丁數(備考)',
    '本文(備考)',
    '本文(書入等）',
    '匡郭の形状(異版のみ)',
    '界線・行款(異版のみ)',
    '版心(異版のみ)',
    '版心(補刻記等)',
    '版心(備考)',
    '附點・首書・科文等',
    '卷末附録(1)',
    '卷末附録(2)',
    '卷末附録(3)',
    '卷末附録(4)',
    '卷末附録(備考)',
    '刊記',
    '刊記(西暦年)',
    '刊記(備考)',
    '卷末墨丁',
    '卷末墨丁(所在)',
    '圖像',
    '圖像(所在)',
    '圖像(圖柄)',
    '圖像(丁裏)',
    '圖像(備考)',
    '印記',
    '印記(備考)',
  ]

  apiResult: any = null

  uri: string = ''
  url: string = ''
  title: string = ''
  id: string = ''

  async asyncData(context: any) {
    const itemId = `${context.params.id}`
    const uri = process.env.BASE_URL + '/data/item/' + itemId + '/manifest.json'
    /*
    const apiResult = await context.$axios
      .get(uri)
      .then((response: any) => {
        const apiResult = response.data.metadata
        return apiResult
      })
      .catch((error: any) => {
        // eslint-disable-next-line
        console.error(error)
      })
      */
    const apiResult_ = await import(
      `~/static/api/advanced/items/${itemId}/manifest.json`
    )

    const metadata = apiResult_.default.metadata
    const item: any = {}

    for (const obj of metadata) {
      item[obj.label] = obj.value
    }

    return {
      id: itemId,
      apiResult: item,
      uri,
      title: itemId,
    }
  }

  head() {
    return {
      title: this.$t('詳細情報') + ': ' + this.title,
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
        text: this.$t('詳細目録'),
        disabled: false,
        to: this.localePath({
          name: 'search-slug',
          params: { slug: 'advanced' },
        }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  legends: any = process.env.legendAdvanced
  legend: any = {}

  dialog4legend: boolean = false

  displayLegend(index: string) {
    // console.log({ index }, this.legends)
    // console.log({ index })

    this.dialog4legend = true
    this.legend = this.legends[index]
  }
}
</script>
