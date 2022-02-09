<template>
  <div id="comp-container">
    <div class="new-hea">
      <p class="news-top-head">Find News As Per Your Interest.</p>
    </div>
    <div class="search-box">
      <div class="search-bar">
        <input
          type="text"
          placeholder="Enter article Topics"
          class="search"
          v-model="search"
        />
      </div>
      <div class="select-country">
        <select class="select" v-model="Country">
          <option value="#">Select Categories ..</option>
          <option value="in">india</option>
        </select>
      </div>
    </div>
    <button class="searchBtn" @click="fetchNews">search</button>
    <div v-if="flag" class="news-list">
      <div v-for="(news, index) in news" :key="index" class="news">
        <div class="news-title">
          <p class="n-title">{{ news.title }}</p>
        </div>
        <div class="news-image">
          <img :src="news.urlToImage" alt="" class="image" />
        </div>
        <hr />
        <div class="new-body">
          <p class="n-description">{{ news.description }}</p>
        </div>
        <div class="read-more">
          <p>Read More</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data: function () {
    return {
      api_key: "6eb544e5b72246fd9d4b21c45d45e240",
      url_base: "https://newsapi.org/v2/everything",
      search: "",
      src: "",
      news: [],
      flag: false,
    };
  },
  methods: {
    fetchNews() {
      fetch(
        `${this.url_base}?q=${this.search}&${this.Country}&sortBy=popularity&apiKey=${this.api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResult);
    },
    setResult(result) {
      this.news = result.articles;
      this.flag = true;
    },
  },
};
</script>
<style scoped>
#comp-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  background-image: url("https://cliply.co/wp-content/uploads/2020/01/401911130_THINKING_FACE_BG_400.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.search-box {
  display: flex;
}
.search {
  display: flex;
  text-align: center;
  width: 304px;
  height: 42px;
  border: 1px groove;
  border-radius: 9px;
  margin-right: 33px;
  margin-top: 38px;
  box-shadow: 0px 4px 10px 6px dimgrey;
}
.news-top-head {
  color: black;
  font-size: 73px;
  text-shadow: 10px 10px 12px #4a1a08;
  font-family: cursive;
  letter-spacing: 5px;
}
.select {
  width: 304px;
  height: 45px;
  text-align: center;
  border: 1px groove;
  border-radius: 9px;
  margin-right: 33px;
  margin-top: 38px;
  box-shadow: 0px 4px 10px 6px dimgrey;
}
.searchBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 40px;
  margin-top: 23px;
  border: 1px groove;
  border-radius: 14px;
  background-color: rgb(6, 56, 6);
  font-size: 22px;
  font-family: monospace;
  color: white;
  margin-bottom: 24px;
}
.news-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 0px groove transparent;
  width: 1312px;
  border-radius: 7px;
  margin-top: 42px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 16px 15px #460c50;
  background-color: transparent;
}
.news {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid;
  border-radius: 7px;
  width: 327px;
  margin-top: 20px;
  box-shadow: 0px 0px 12px 9px #3e3939;
  margin-bottom: 20px;
  z-index: 9999;
}
.news-title {
  margin: 0px;
}
.n-title {
  display: flex;
  text-align: center;
  font-size: 21px;
  font-family: cursive;
}
.n-description {
  display: flex;
  text-align: center;
  font-size: 19px;
  font-family: ui-monospace;
}
.image {
  height: 131px;
  width: 277px;
  border-radius: 11px;
  margin-bottom: 22px;
}
hr {
  height: 2px;
  width: 317px;
  border-radius: 14px;
  border: 1px groove;
  background-color: black;
  margin-top: -16px;
}
.news-heading {
  display: flex;
  padding: 0px;
  margin: 0px;
  font-family: sans-serif;
  font-size: 38px;
}
.read-more {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 293px;
  height: 28px;
  margin-bottom: 11px;
  background-color: green;
  color: white;
  font-family: monospace;
  font-size: 18px;
  border-radius: 13px;
}
</style>
