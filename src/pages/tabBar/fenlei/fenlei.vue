<template>
  <div class="hello">
    <el-tabs tab-position="left" style="width: 72px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

    <tabBar :selected="selected"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../../../components/tabBar/tabBar";
  import { axiosGet } from "../../../../utils/request";
  import { createNamespacedHelpers } from "vuex";
  const { mapActions: listActions } = createNamespacedHelpers("dictlist");
  export default {
    name: "HelloWorld",
    data() {
      return {
        selected: "fenlei",
        tabPosition: 'left'
      };
    },
    created() {
      axiosGet("/llj/shop/goods/list", {}).then(res => {
        this.saveData(res);
      });
    },
    methods: {
      ...listActions({
        saveData: "saveData"
      }),

      goList() {
        this.$router.push("/list");
      }
    },
    components: {
      tabBar
    }
  };
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>