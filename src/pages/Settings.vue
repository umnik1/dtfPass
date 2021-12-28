<template lang="pug">
  <el-container>
        <el-card shadow="always">
          <el-row>
            <el-col :span="11">
              <p><b>HD изображения</b></p>
            </el-col>
            <el-col :span="14">
              <el-radio-group @change="setSetting('hd')" v-model="hd" size="small" class="ct">
                <el-radio-button label="Включено"></el-radio-button>
                <el-radio-button label="Выключено"></el-radio-button>
              </el-radio-group>
            </el-col>
            <el-col :span="11">
              <p class="pt-10"><b>Скачивание изображений</b></p>
            </el-col>
            <el-col :span="14">
              <el-radio-group @change="setSetting('download')" v-model="download" size="small" class="ct">
                <el-radio-button label="Включено"></el-radio-button>
                <el-radio-button label="Выключено"></el-radio-button>
              </el-radio-group>
            </el-col>
            <el-col :span="11">
              <p class="pt-10"><b>Разедитель постов</b></p>
            </el-col>
            <el-col :span="14">
              <el-radio-group @change="setSetting('splitter')" v-model="splitter" size="small" class="ct">
                <el-radio-button label="Включено"></el-radio-button>
                <el-radio-button label="Выключено"></el-radio-button>
              </el-radio-group>
              <small class="ct">(Все посты / Блоги / Подсайты)</small>
            </el-col>
            <el-col :span="15">
              <p class="pt-10"><b>Отображение кол-ва закладок</b></p>
            </el-col>
            <el-col :span="14">
              <el-radio-group @change="setSetting('bookmarks')" v-model="bookmarks" size="small" class="ct">
                <el-radio-button label="Включено"></el-radio-button>
                <el-radio-button label="Выключено"></el-radio-button>
              </el-radio-group>
              <small class="ct">(Внутри поста)</small>
            </el-col>
          </el-row>
        </el-card>
  </el-container> 
</template>
<script>
export default {
  name: "Settings",
  data: () => ({
    activeName: "first",
    email: "",
    password: "",
    loading: false,
    incrorect: false,
    loggined: false,
    user_id: "",
    token: "",
    profile: "",
    hd: "",
    download: "",
    splitter: "",
    bookmarks: ""
  }),
  created() {
    chrome.storage.local.get(["hd"], result => {
      if (result.hd) {
        this.hd = "Включено";
      } else {
        this.hd = "Выключено";
      }
    });
    chrome.storage.local.get(["download"], result => {
      if (result.download) {
        this.download = "Включено";
      } else {
        this.download = "Выключено";
      }
    });
    chrome.storage.local.get(["splitter"], result => {
      if (result.splitter) {
        this.splitter = "Включено";
      } else {
        this.splitter = "Выключено";
      }
    });
    chrome.storage.local.get(["bookmarks"], result => {
      if (result.bookmarks) {
        this.bookmarks = "Включено";
      } else {
        this.bookmarks = "Выключено";
      }
    });
  },
  methods: {
    setSetting(type) {
      let val = "";
      if (this[type] === "Включено") {
        val = true;
      } else {
        val = false;
      }

      chrome.storage.local.set({ [type]: val }, () => {
        console.log("Recorded");
      });
    }
  }
};
</script>
<style scoped>
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
