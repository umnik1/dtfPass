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
          <el-radio-group v-model="download" size="small" class="ct">
            <el-radio-button label="Включено"></el-radio-button>
            <el-radio-button label="Выключено"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="11">
          <p class="pt-10"><b>Разедитель постов</b></p>
        </el-col>
        <el-col :span="14">
          <el-radio-group v-model="download" size="small" class="ct">
            <el-radio-button label="Включено"></el-radio-button>
            <el-radio-button label="Выключено"></el-radio-button>
          </el-radio-group>
          <small class="ct">(Все посты / Блоги / Подсайты)</small>
        </el-col>
      </el-row>
    </el-card>
  </el-container> 
</template>
<script>
  import axios from 'axios'

  export default {
    data: () => ({
      email: '',
      password: '',
      loading: false,
      incrorect: false,
      loggined: false,
      user_id: '',
      token: '',
      profile: '',
      hd: '',
      download: ''
    }),
    computed: {
    },
    created () {
      chrome.storage.local.get(['hd'], (result) => {
        if (result.hd) {
          this.hd = 'Включено'
        } else {
          this.hd = 'Выключено'
        }
      })
    },
    mounted () {
      //
    },
    methods: {
      setSetting (type) {
        let val = ''
        if (this[type] === 'Включено') {
          val = true
        } else {
          val = false
        }

        chrome.storage.local.set({[type]: val}, () => {
          console.log('Recorded')
        })
      },
      login () {
        this.loading = true
        axios.post('http://manabrain.io/ext/login', {
          email: this.email, password: this.password
        })
          .then(response => {
            this.loading = false
            if (response.data === 'error') {
              this.incrorect = true
            } else {
              this.user_id = response.data.id
              this.token = response.data.token
              console.log(this.token)
              chrome.storage.local.set({user_id: this.user_id}, () => {
                console.log('Loggined')
              })
              chrome.storage.local.set({token: this.token}, () => {
                console.log('Tokenized')
              })
              this.loggined = true
            }
          })
          .catch(e => {
            console.log(e)
          })
      },
      tab () {
        chrome.tabs.create({ url: 'http://manabrain.io/' })
      }
    }
  }
</script>
<style lang="scss">
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