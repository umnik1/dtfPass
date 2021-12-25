<template>
  <div>
    <!-- 使用了Popover弹出框组件 -->
    <el-popover
      placement="bottom"
      title="我的IP地址"
      width="200"
      trigger="click"
      v-model="visible"
    >
      <p>{{ my_ip_addr }}</p>
      <el-button slot="reference">查询IP</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  created: function() {
    this.getMyIp();
  },
  methods: {
    getMyIp() {
      this.$http
        .get("http://pv.sohu.com/cityjson?ie=utf-8")
        .then(response => {
          console.log(response);
          this.my_ip_addr = response.data.replace("var returnCitySN = ", "");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      visible: false,
      my_ip_addr: "0"
    };
  }
};
</script>
