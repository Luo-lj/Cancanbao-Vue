<template>
  <div>
    <div>list</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: listState } = createNamespacedHelpers("dictlist");
export default {
  data() {
    return {};
  },
  computed: {
    ...listState({
      listData: "listData"
    })
  },
  created() {
    console.log("来到list页面", this.listData);
  },
  watch: {
      $router: function(){
          window.scrollTo(0, 0);
      }
  }
};
</script>

<style scoped>
</style>