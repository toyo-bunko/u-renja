<template>
  <div>
    <v-container v-if="apiResult">
      <h2 class="text-center my-5">
        {{ $t('詳細情報') }}
      </h2>
      <table
        border="1"
        style="border-collapse: collapse;"
        width="100%"
        class="my-2"
      >
        <template v-for="(obj, index) in apiResult">
          <tr v-if="obj.label !== '卷末附録_facet'" :key="index">
            <th>{{ obj.label }}</th>
            <td>{{ $utils.formatArrayValue(obj.value, ' ') }}</td>
          </tr>
        </template>
      </table>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ShareButtons from '~/components/common/ShareButtons.vue'

@Component({
  components: {
    ShareButtons,
  },
})
export default class Search extends Vue {
  kFields: string[] = [
    '標準名称',
    '巻',
    '国',
    '時代',
    '年',
    '刊写者',
    '刊写形態',
    '関与者',
    '関与形態',
  ]

  hFields: string[] = ['国', '所蔵者']

  apiResult: any = null

  uri: string = ''
  url: string = ''
  title: string = ''
  id: string = ''

  async asyncData(context: any) {
    const itemId = `${context.params.id}`
    const uri = process.env.BASE_URL + '/iiif/' + itemId + '/manifest.json'
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

    return {
      id: itemId,
      apiResult,
      uri,
      title: itemId,
    }
  }

  /*
  get satUrl(): string {
    const data = this.data
    return (
      'https://21dzk.l.u-tokyo.ac.jp/SAT2018/' +
      data['基本情報-経典番号'] +
      '_.' +
      ('00' + data['SAT頭出し用']['開始巻']).slice(-2) +
      '.' +
      ('0000' + data['SAT頭出し用']['ページ']).slice(-4) +
      data['SAT頭出し用']['段'] +
      ('00' + data['SAT頭出し用']['行']).slice(-2) +
      '.html'
    )
  }
  */

  get twitterUrl() {
    return (
      'https://twitter.com/intent/tweet?url=' + this.url + '&text=' + this.title
    )
  }

  get facebookUrl() {
    return 'https://www.facebook.com/sharer/sharer.php?u=' + this.url
  }

  get pocketUrl() {
    return 'http://getpocket.com/edit?url=' + this.url
  }

  head() {
    return {
      title: this.$t('詳細情報') + ': ' + this.title,
    }
  }
}
</script>
