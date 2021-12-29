<template lang="pug">
  <el-container>
   <el-tabs v-model="activeName" class="full" @tab-click="handleClick">
    <el-tab-pane label="Посты" name="first">
      <el-card shadow="always" class="full">
        <center><small>Вставляйте ID пользователей, чтобы скрыть их <b>посты</b> из ленты.</small></center>
        <el-divider></el-divider>
        <el-tag :key="tag" v-for="tag in dynamicTagsPosts" closable :disable-transitions="false" @close="handleClose(tag, 'post')">
          <o>{{ tag }}</o>
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Добавить пользователя</el-button>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="Комментарии" name="second">
      <el-card shadow="always" class="full">
        <center><small>Вставляйте ID пользователей, чтобы скрыть их <b>комментарии</b> из ленты.</small></center>
        <el-divider></el-divider>
        <el-tag :key="tag" v-for="tag in dynamicTagsComments" closable :disable-transitions="false" @close="handleClose(tag, 'comment')">
          <o>{{ tag }}</o>
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirmComment" @blur="handleInputConfirmComment">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Добавить пользователя</el-button>
      </el-card>
    </el-tab-pane>
  </el-tabs>

  </el-container> 
</template>
<script>
export default {
  name: "Blacklist",
  data: () => ({
    dynamicTagsPosts: [],
    dynamicTagsComments: [],
    inputVisible: false,
    inputValue: "",
    activeName: "first"
  }),
  created() {
    chrome.storage.local.get(["postBlack"], result => {
      if (result.postBlack) {
        this.dynamicTagsPosts = result.postBlack;
      }
    });
    chrome.storage.local.get(["commentBlack"], result => {
      if (result.commentBlack) {
        this.dynamicTagsComments = result.commentBlack;
      }
    });
  },
  methods: {
    saveBlacklist(type) {
      if (type === "postBlack") {
        chrome.storage.local.set({ [type]: this.dynamicTagsPosts }, () => {
          console.log("Recorded");
        });
      } else {
        chrome.storage.local.set({ [type]: this.dynamicTagsComments }, () => {
          console.log("Recorded");
        });
      }
    },

    handleClose(tag, type) {
      if (type === "post") {
        this.dynamicTagsPosts.splice(this.dynamicTagsPosts.indexOf(tag), 1);
        this.saveBlacklist("postBlack");
      } else {
        this.dynamicTagsComments.splice(
          this.dynamicTagsComments.indexOf(tag),
          1
        );
        this.saveBlacklist("commentBlack");
      }
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
        this.dynamicTagsPosts.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
      this.saveBlacklist("postBlack");
    },

    handleInputConfirmComment() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTagsComments.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
      this.saveBlacklist("commentBlack");
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
