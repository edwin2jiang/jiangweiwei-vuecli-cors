<template>
  <div class="container">
    <button @click="fetchJD" class="purple-btn">发起请求 京东云</button>
    &nbsp;
    &nbsp;
    &nbsp;
    <button @click="fetchJH" class="blue-btn">发起请求 聚合数据</button>
    <div>
      <h2>结果1</h2>
      <textarea cols="30" rows="10" ref="dom1"></textarea>
    </div>
    <div>
      <h2>结果2</h2>
      <textarea cols="30" rows="10" ref="dom2"></textarea>
    </div>
    <br />
    <div class="text">tips1: 随便点个按钮, 发送请求吧, 已代理接口</div>
    <div class="text">tips2: 如果出现错误, 可能是每天的免费额度超过了.</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      jdUrl: "/jdcloud/he/freeweather?city=beijing&appkey=b673f097ec5e03e127a07ae8a2270af6",
      jhUrl: "/juhe/todayOnhistory/queryEvent.php?date=1%2F1&key=e7719ce19dd8f1a24ad95a6b4937ee33"
    }
  },
  methods: {
    fetchJD() {
      axios(this.jdUrl).then((res) => {
        console.log(res)
        this.$refs.dom1.innerText = JSON.stringify(res.data);
      })
    },
    fetchJH() {
      axios(this.jhUrl).then((res) => {
        console.log(res)
        this.$refs.dom2.innerText = JSON.stringify(res.data);
      })
    }
  },
  mounted() {
    // fetch(this.url).then(data=>{
    //   console.log(data)
    // })
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.purple-btn {
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 19px;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;
  &:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }
  &:active {
    position: relative;
    top: 1px;
  }
}

.blue-btn {
  // box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  border: none;
  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
  &:active {
    position: relative;
    top: 1px;
  }
}

.text {
  font-size: 1.6rem;
}
</style>
