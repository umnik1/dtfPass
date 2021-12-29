<template lang="pug">
  <el-container>
        <el-card class="full" shadow="none" style="border: none;">
            <div v-if="!check_token">
            <center>
                <b>Введите свой токен, чтобы получить информацию по своему профилю</b>
                <br><br>
                <el-input placeholder="Token" v-model="token"></el-input>
                <br>
                <br>
                <el-button @click="getProfile()" type="success">Готово</el-button>
                <br>
                <br>
                <a href="https://www.notion.so/API-dd3f2ae5a4bc4a7fbeb4598f86eb37aa#7734c1a41c834da5b7425eac905f39ba" target="_blank">Как получить токен?</a>
            </center>
            </div>
            <div v-else>
              <el-row :gutter="20">
                <el-col :span="8"><el-avatar shape="square" :src="profile.avatar_url" style="width: auto;height: 100px;"></el-avatar></el-col>
                <el-col :span="16">
                  <h3><a :href="'https://dtf.ru/u/' + profile.id" target="_blank" style="color: #409eff;text-decoration: none;">{{ profile.name }}</a></h3>
                      <el-divider></el-divider>
                  <p class="f13"><b>Подписчиков:</b> {{ profile.subscribers_count }}</p>
                  <p class="f13"><b>Рейтинг:</b> {{ profile.karma }}</p>
                  <p class="f13"><b>Постов:</b> {{ profile.counters.entries }}</p>
                  <p class="f13"><b>Комментариев:</b> {{ profile.counters.comments }}</p>
                  <p class="f13"><b>Закладок:</b> {{ profile.counters.favorites }}</p>
                </el-col>
              </el-row>
                <el-divider></el-divider>
                <center>
                  <a :href="'https://dtf.ru/u/' + profile.id + '/drafts'" target="_blank" style="margin-right: 10px;"><el-button type="info">Открыть Черновики</el-button></a>

                  <a href="https://dtf.ru/bookmarks" target="_blank"><el-button type="primary">Открыть Закладки</el-button></a>
                </center>


            </div>
            <el-alert v-if="error" title="Мы не смогли найти вас, возможно вы ввели неправильный токен." type="error" style="margin-top: 20px;"></el-alert>
        </el-card>
  </el-container> 
</template>
<script>
import axios from "axios";
export default {
  name: "Settings",
  data: () => ({
    check_token: false,
    token: "",
    profile: "",
    error: false
  }),
  created() {
    chrome.storage.local.get(["dtf_token"], result => {
      if (result.dtf_token && result.dtf_token !== "") {
        this.token = result.dtf_token;
        this.check_token = true;
        this.getProfile();
      } else {
        this.check_token = false;
      }
    });
  },
  methods: {
    getProfile() {
      axios
        .get("https://api.dtf.ru/v1.8/user/me", {
          headers: {
            "X-Device-Token": this.token,
            "User-Agent":
              "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0"
          }
        })
        .then(response => {
          if (response.data.result.id) {
            this.profile = response.data.result;
            this.check_token = true;
            chrome.storage.local.set({ dtf_token: this.token }, () => {
              console.log("Recorded");
            });
            console.log(this.profile);
          } else {
            this.error = true;
          }
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        });
    }
  }
};
</script>
<style scoped>
.f13 {
  font-size: 13px;
}
.full {
  width: 100%;
}
.ct {
  text-align: center;
  display: block;
}
.pt-10 {
  padding-top: 10px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

.el-container {
  width: 400px;
  height: 400px;
}

.box-card {
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

#login {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
