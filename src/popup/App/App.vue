<template>
  <!-- Tabs -->
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="常用链接">
        <settings />
      </el-tab-pane>
      <el-tab-pane label="常用工具">
        <common-tools />
      </el-tab-pane>
      <el-tab-pane label="角色管理">
        <user-manage />
      </el-tab-pane>
      <el-tab-pane label="待办事项">
        <todo-list> </todo-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TodoList from "@/pages/TodoList.vue";
import Settings from "@/pages/Settings.vue";
import CommonTools from "@/pages/CommonTools.vue";
import UserManage from "@/pages/UserManage.vue";
export default {
  name: "app",
  components: {
    Settings,
    CommonTools,
    TodoList,
    UserManage
  },
  data() {}
};
</script>
