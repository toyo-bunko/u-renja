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
            <span class="legend" @click="displayLegend('4')">連</span>
          </th>
          <th><span class="legend" @click="displayLegend('5')">箱</span></th>
          <th><span class="legend" @click="displayLegend('6')">段</span></th>
          <th><span class="legend" @click="displayLegend('7')">冊</span></th>
          <th><span class="legend" @click="displayLegend('8')">闕</span></th>
          <th>
            <span class="legend" @click="displayLegend('9')">函册次</span>
          </th>
          <th><span class="legend" @click="displayLegend('14')">經番</span></th>
          <th><span class="legend" @click="displayLegend('15')">通番</span></th>
          <th><span class="legend" @click="displayLegend('16')">枝番</span></th>
          <th>
            <span class="legend" @click="displayLegend('23')">千字文</span>
          </th>
          <th>
            <span class="legend" @click="displayLegend('25')">經典名稱</span>
          </th>
          <th>
            <span class="legend" @click="displayLegend('27')">卷次等</span>
          </th>
          <th><span class="legend" @click="displayLegend('31')">丁數</span></th>
          <th>
            <span class="legend" @click="displayLegend('58')">卷末附録</span>
          </th>
          <th><span class="legend" @click="displayLegend('46')">刊記</span></th>
          <th><span class="legend" @click="displayLegend('51')">圖像</span></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in items" :key="index">
          <td>{{ $utils.formatArrayValue(obj['連']) }}</td>
          <td>{{ Number($utils.formatArrayValue(obj['箱'])) }}</td>
          <td>{{ $utils.formatArrayValue(obj['段']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['冊']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['闕']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['函册次']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['經番']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['通番']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['枝番']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['千字文']) }}</td>
          <td>
            {{ $utils.formatArrayValue(obj['經典名稱']) }}

            <a
              v-for="(item, key3) in obj.images"
              :key="key3"
              target="_blank"
              :href="
                item
                  .split('https://static.toyobunko-lab.jp/u-renja')
                  .join(baseUrl)
              "
            >
              <img
                width="24px"
                src="https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH.png"
              />
            </a>
          </td>
          <td>{{ $utils.formatArrayValue(obj['卷次等']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['丁數']) }}</td>
          <td>
            {{ $utils.formatArrayValue(obj['卷末附録_facet'], ' ') }}
          </td>
          <td>{{ $utils.formatArrayValue(obj['刊記']) }}</td>
          <td>{{ $utils.formatArrayValue(obj['圖像']) }}</td>
          <td>
            <nuxt-link
              :to="
                localePath({
                  name: 'item-id',
                  params: {
                    id: obj.objectID,
                  },
                })
              "
              >{{ $t('more') }}
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>

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
<style>
.legend {
  cursor: pointer;
}
</style>
