<template>
  <div class="tabbar">
    <ul>
      <li v-for="(item, index) in tabBar" :key="index" @click="goTabBar(item.path)"
        :class="{active:message == item.path}">
        <img :src="message==item.path ? item.icon_active : item.icon" />
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      selected: String
    },
    data() {
      return {
        message: this.selected,
        tabBar: [
          {
            title: "首页",
            path: "",
            icon: require("../../images/tabBar/home.png"),
            icon_active: require("../../images/tabBar/home-open.png")
          },
          {
            title: "分类",
            path: "fenlei",
            icon: require("../../images/tabBar/fenlei.png"),
            icon_active: require("../../images/tabBar/fenlei-open.png")
          },
          {
            title: "看图",
            path: "look",
            icon: require("../../images/tabBar/look.png"),
            icon_active: require("../../images/tabBar/look-open.png")
          },
          {
            title: "我的",
            path: "my",
            icon: require("../../images/tabBar/my.png"),
            icon_active: require("../../images/tabBar/my-open.png")
          }
        ]
      };
    },
    methods: {
      goTabBar(path) {
        if (path != this.message) {
          this.$router.push(`/${path}`);
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.95rem;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      background-color: #fff;

      li {
        display: flex;
        flex-direction: column;
        justify-content: cneter;
        width: 100%;
        text-align: center;
        border-top: 1px solid #a7a5a5;
        font-size: 0.1rem;

        img {
          width: 1.2rem;
          height: 1.2rem;
          margin: 5px auto 0px;
        }

        &.active {
          color: #292929;
          font-weight: bold;
        }
      }
    }
  }
</style>