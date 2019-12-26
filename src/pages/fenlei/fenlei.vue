<template>
  <div class="hello">
      分类
    <tabBar :selected="selected"></tabBar>
  </div>
</template>

<script>
import tabBar from "../../components/tabBar/tabBar";
import { axiosGet } from "../../../utils/request";
import { createNamespacedHelpers } from "vuex";
const { mapActions: listActions } = createNamespacedHelpers("dictlist");
export default {
  name: "HelloWorld",
  data() {
    return {
      selected: "fenlei"
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
