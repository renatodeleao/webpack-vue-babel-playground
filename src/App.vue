<template>
  <main>
    <h1>Hello {{test}}</h1>
    <h2>Look ma some async stuff working on IE</h2>
    <div v-if="loading">loading</div>
    <div v-else>
      <h3>Fetched user</h3>
      <p>name: <strong>{{user.name}}</strong></p>
      <p>name: <strong>{{user.bio}}</strong></p>
    </div>

    <!-- <ul v-scroll-spy-active v-scroll-spy-link>
      <li data-scroll-spy-el>
        <a data-scroll-spy-link>Menu 1</a>
      </li>
      <li data-scroll-spy-el>
        <a data-scroll-spy-link>Menu 2</a>
      </li>
      <li data-scroll-spy-el>
        <a data-scroll-spy-link>Menu 3</a>
      </li>
    </ul>

    <div v-scroll-spy>
      <div style="min-height: 400px" data-scroll-spy-section>
          <h1>Header 1</h1>
          <p>Content</p>
      </div>
      <div style="min-height: 400px" data-scroll-spy-section>
          <h1>Header 2</h1>
          <p>Content</p>
      </div>
      <div style="min-height: 400px" data-scroll-spy-section>
          <h1>Header 3</h1>
          <p>Content</p>
      </div>
    </div> -->
  </main>
</template>

<script>
import axios from "axios";
import request from "utils/request";

export default {
  name: "App",
  data(){
    return {
      test: "World",
      loading: true,
      user: {},
    }
  },
  async created(){
    // this.st = setTimeout(()=> {
    //    this.fetchMe();
    // }, 2000)
    this.fetchMeAlt()
  },
  destroyed(){
    // clearTimeout(this.st);
  },
  methods: {
    // async fetchMe(){
    //   try {
    //     this.loading = true;
    //     const res = await axios.get('https://api.github.com/users/renatodeleao');
    //     this.user = res.data;
    //     console.log(res)
    //   } catch(e){
    //     console.log(e)
    //   } finally{
    //     this.loading = false
    //     console.log("fetched");
    //   }
    // },
    async fetchMeAlt(){
      try {
        this.loading = true;
        const res = await request({
          url: "/users/renatodeleao",
          method: "get"
        });
        this.user = res.data;
        console.log(res)
      } catch(e){
        console.log(e)
      } finally{
        this.loading = false
        console.log("fetched");
      }
    }
  }
}
</script>

<style lang="scss">
$color: #140038;

main {
  display: block;
  font-family: system-ui, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  background-color: $color;
  color: white;
  padding: 32px;
}
</style>
