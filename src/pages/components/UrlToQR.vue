<template>
  <div>
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true"
      >网址转二维码</el-button
    >
    <el-dialog title="网址转二维码" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="请输入url" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 常用url保存 -->
        <el-form-item label="常用url" :label-width="formLabelWidth">
          <el-select v-model="form.save" placeholder="请选择">
            <el-option label="保存一" value="shanghai"></el-option>
            <el-option label="保存二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- <el-link>{{ get_qrcode_img }}</el-link> -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createQR(form.name)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    createQR(url) {
      console.log(url);
      this.get_qrcode_img =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + url;
      window.open(this.get_qrcode_img, "_blank");
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      get_qrcode_img: "",
      form: {
        url: "",
        save: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>
