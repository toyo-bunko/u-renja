<template>
  <div>
    <v-footer dark class="py-5">
      <v-container>
        <v-row>
          <v-col v-for="(item2, key) in map" :key="key" cols="6" :md="3">
            <h3>
              {{
                key === 'about_'
                  ? $t('酉蓮社（旧増上寺報恩蔵）蔵嘉興版大蔵経目録データベース')
                  : $t(key)
              }}
            </h3>

            <div v-for="(item, key2) in item2" :key="key2" class="mt-2">
              <template v-if="item.to">
                <nuxt-link
                  style="color: white; font-size: smaller"
                  depressed
                  :to="localePath(item.to)"
                  exact
                  >{{ $t(item.label) }}
                  <template v-if="item.target">
                    <v-icon class="ml-1">mdi-exit-to-app</v-icon>
                  </template></nuxt-link
                >
              </template>
              <template v-else>
                <a
                  style="color: white; font-size: smaller"
                  depressed
                  :href="item.href"
                  :target="item.target || null"
                  exact
                  >{{ $t(item.label) }}
                  <template v-if="item.target">
                    <v-icon class="ml-1">mdi-exit-to-app</v-icon>
                  </template></a
                >
              </template>
            </div>
            <!--
            <template v-if="item.to">
              <nuxt-link
                style="color: white; font-size: smaller"
                depressed
                :to="localePath(item.to)"
                exact
                >{{ $t(item.label) }}
                <template v-if="item.target">
                  <v-icon class="ml-1">mdi-exit-to-app</v-icon>
                </template></nuxt-link
              >
            </template>
            <template v-else>
              <a
                style="color: white; font-size: smaller"
                depressed
                :href="item.href"
                :target="item.target || null"
                exact
                >{{ $t(item.label) }}
                <template v-if="item.target">
                  <v-icon class="ml-1">mdi-exit-to-app</v-icon>
                </template></a
              >
            </template>
            -->
          </v-col>

          <v-col cols="6" :md="3">
            <h3>{{ $t('language') }}</h3>
            <div class="mt-2">
              <template v-if="$i18n.locale !== 'en'">
                <nuxt-link
                  style="color: white; font-size: smaller"
                  :to="switchLocalePath('en')"
                >
                  English
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link
                  style="color: white; font-size: smaller"
                  :to="switchLocalePath('ja')"
                >
                  日本語
                </nuxt-link>
              </template>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="false">
          <v-col v-for="(item, key) in menu" :key="key" cols="12" :md="3">
            <template v-if="item.to">
              <nuxt-link
                style="color: white; font-size: smaller"
                depressed
                :to="localePath(item.to)"
                exact
                >{{ $t(item.label) }}
                <template v-if="item.target">
                  <v-icon class="ml-1">mdi-exit-to-app</v-icon>
                </template></nuxt-link
              >
            </template>
            <template v-else>
              <a
                style="color: white; font-size: smaller"
                depressed
                :href="item.href"
                :target="item.target || null"
                exact
                >{{ $t(item.label) }}
                <template v-if="item.target">
                  <v-icon class="ml-1">mdi-exit-to-app</v-icon>
                </template></a
              >
            </template>
          </v-col>
          <v-col cols="12" :md="3">
            <template v-if="$i18n.locale !== 'en'">
              <nuxt-link
                style="color: white; font-size: smaller"
                :to="switchLocalePath('en')"
              >
                English
              </nuxt-link>
            </template>
            <template v-else>
              <nuxt-link
                style="color: white; font-size: smaller"
                :to="switchLocalePath('ja')"
              >
                日本語
              </nuxt-link>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <v-footer :dark="true" style="background-color: black">
      <v-container>
        <p class="text-center my-5">
          <small>
            本データベースはJSPS科研費<a
              class="mx-1"
              href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-18K00073/"
              >18K00073</a
            >、<a
              class="mx-1"
              href="https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-21H04345/"
              >21H04345</a
            >の助成による成果の一部です。
          </small>
        </p>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Footer extends Vue {
  footer: any = process.env.footer

  menu: any = process.env.menu

  map: any = {}

  created() {
    const menu: any = this.menu
    const map: any = {
      about_: {},
      tools: {},
      links: {},
    }
    for (const item of menu) {
      const type = item.type
      if (map[type]) {
        map[type][item.weight] = item
      }
    }
    this.map = map
  }
}
</script>
