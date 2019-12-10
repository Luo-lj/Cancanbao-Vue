<template>
  <div class="hello">
    <button @click="goList">list</button>
  </div>
</template>

<script>
import { axiosGet } from "../../utils/request";
import { createNamespacedHelpers } from "vuex";
const { mapActions: listActions } = createNamespacedHelpers("dictlist");
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
