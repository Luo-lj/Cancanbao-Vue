<template>
  <div class="hello">
    <div class="block">
      <el-carousel height="200px">
        <el-carousel-item v-for="item in bannerData" :key="item.id">
          <img :src="item.picUrl" style="width: 100%;height:200px;display:block;" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="most-box">
      <div class="most-content most-l" data-id="001">
        <div class="most-warp">
          <div class="most-text">最受欢迎</div>
          <div class="most-text">人气厨师</div>
          <div class="most-top">TOP 10</div>
        </div>
        <img class="most-img" src="../../../images/shejishi/huanyin-1.jpg" />
      </div>
      <div class="most-content most-r">
        <div class="most-active" data-id="002">
          <div class="most-warp-r">
            <div class="most-text">最受欢迎</div>
            <div class="most-text">人气厨师</div>
            <div class="most-top">TOP 10</div>
          </div>
          <img class="most-img" src="../../../images/shejishi/huanyin-2.jpg" />
        </div>
        <div class="most-talent" data-id="003">
          <div class="most-warp-r">
            <div class="most-text">最受欢迎</div>
            <div class="most-text">人气厨师</div>
            <div class="most-top">TOP 10</div>
          </div>
          <img class="most-img" src="../../../images/shejishi/huanyin-3.jpg" />
        </div>
      </div>
    </div>

    <div class="home-warp">
      <div class="home-head">
        <div class="home-title">精选好货</div>
        <div class="home-tips">猜你喜欢的口味</div>
      </div>
      <div class="home-content">
        <div class="product-item" v-for="item in recommendProduct" :key="item.id" data-id="item.id">
          <div class="img-warp">
            <img :src="item.pic"></img>
          </div>
          <div class="home-item">
            <div class="item-title">{{item.name}}</div>
            <div class="home-tips">收藏</div>
          </div>
          <div class="home-tips item-tips">{{item.characteristic}}</div>
        </div>
      </div>
    </div>

    <tabBar :selected="selected"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../../../components/tabBar/tabBar";
  import { axiosGet } from "../../../../utils/request";
  import {
    getBanner,
    goods
  } from '../../../../utils/apiData.js';
  import { createNamespacedHelpers } from "vuex";
  const {
    mapState: goodState,
    mapGetters: goodGetters,
    mapActions: goodActions
  } = createNamespacedHelpers("goodList")
  export default {
    name: "HelloWorld",
    data() {
      return {
        selected: "", //导航选项
        bannerData: [], // banner列表
        recommendData: [], // 推荐商品数据
      };
    },
    computed: {
      ...goodState({
        allProduct: state => {
          return state.allProduct
        },
        recommendProduct: state => {
          return state.recommendProduct
        }
      }),
      ...goodGetters({
        recommendProduct: "recommendProduct"
      })

    },
    created() {
      getBanner().then(res => {
        this.bannerData = res;
      })

      goods().then(res => {
        this.commitAllProduct(res);
      })

    },
    methods: {
      ...goodActions({
        commitAllProduct: "commitAllProduct"
      }),

      // 去列表
      goList() {
        this.$router.push("/list");
      },

      //获取值
      getInputValue() {
        // this.setUserInfo(this.input)
        this.$store.dispatch('setUserInfo', '你好')
        console.log('this.listData ===>>>', this.listData)
        console.log('this.inputValue ===>>>', this.inputValue)
      },

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

  .demo-autocomplete {
    margin-top: 20px;
  }

  .most-box {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .most-content {
    width: 50%;
    height: 100%;
    position: relative;
  }

  .most-content .most-img,
  .most-active .most-img,
  .most-talent .most-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .most-warp {
    padding: 20px;
    position: absolute;
    z-index: 2;
  }

  .most-warp .most-text {
    color: #64576f;
    text-align: left;
  }

  .most-warp-r {
    padding-top: 10px;
    padding-left: 15px;
    position: absolute;
    z-index: 2;
  }

  .most-warp-r .most-text {
    color: #c1767c;
    text-align: left;
  }

  .most-l {
    background: #eee;
    margin: 0 5px 0 10px;
  }

  .most-r {
    margin: 0 10px 0 5px;
  }

  .most-active {
    background: #eee;
    height: calc(50% - 5px);
    margin-bottom: 10px;
    position: relative;
  }

  .most-talent {
    background: #eee;
    height: calc(50% - 5px);
    position: relative;
  }

  .most-talent .most-text {
    color: #794e43;
    text-align: left;
  }

  .most-text {
    font-size: 14px;
    font-weight: bold;
  }

  .most-top {
    width: 60px;
    height: 17px;
    line-height: 17px;
    font-size: 12px;
    margin-top: 10px;
    background: #fff;
    border-radius: 20px;
    padding-left: 5px;
    text-align: left;
  }

  .home-warp {
    padding-bottom: 50px;
    margin-top: 20px;
  }

  .home-head {
    padding: 0 10px;
    text-align: left;
  }

  .home-title {
    position: relative;
    padding-left: 10px;
    font-size: 18px;
    line-height: 36px;
  }

  .home-title::after {
    content: ' ';
    position: absolute;
    width: 4px;
    height: 18px;
    background: red;
    left: 0;
    top: 9px;
  }

  .home-tips {
    font-size: 14px;
    line-height: 14px;
    color: #999;
  }

  .img-warp,
  .img-warp img {
    width: 100%;
    height: 240px;
  }

  .home-item {
    display: flex;
    padding: 10px 10px 0 10px;
  }

  .home-item .item-title {
    flex: 1;
    font-size: 14px;
  }

  .item-tips {
    padding: 0 10px;
  }

  .product-item {
    padding: 10px 0;
    text-align: left;
  }
</style>