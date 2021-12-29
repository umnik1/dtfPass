<template>
  <!-- Tabs -->
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="Профиль">
        <profile />
      </el-tab-pane>
      <el-tab-pane label="Настройки">
        <settings />
      </el-tab-pane>
      <el-tab-pane label="Чёрный список">
        <blacklist />
      </el-tab-pane>
    </el-tabs>
    <p><center><b>DTFPass</b> by <a href="https://dtf.ru/u/52199" target="_blank" style="color: #409eff;">Maksim Chingin</a></center></p>
  </div>
</template>

<script>
import Settings from "@/pages/Settings.vue";
import Profile from "@/pages/Profile.vue";
import Blacklist from "@/pages/Blacklist.vue";
export default {
  name: "app",
  components: {
    Settings,
    Profile,
    Blacklist
  },
  data() {}
};
</script>
