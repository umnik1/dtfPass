<template lang="pug">
  <el-container>
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Посты" name="first">
      <el-card shadow="always" class="full">
        <center><small>Вставляйте ID пользователей, чтобы скрыть их посты из ленты.</small></center>
        <el-divider></el-divider>
        <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
          <o>{{ tag }}</o>
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Добавить пользователя</el-button>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="Комментарии" name="second">Комментарии</el-tab-pane>
  </el-tabs>

  </el-container> 
</template>
<script>
export default {
  name: "Blacklist",
  data: () => ({
    dynamicTags: ["Tag 1", "Tag 2", "Tag 3"],
    inputVisible: false,
    inputValue: "",
    activeName: "first"
  }),
  created() {
    //
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
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        console.log(_);
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
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
.el-container {
  width: 400px;
  height: 400px;
}
.el-tag + .el-tag {
  margin-left: 10px;
  margin-bottom: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.full {
  width: 100%;
}
</style>
