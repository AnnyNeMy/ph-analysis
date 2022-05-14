
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <nav-menu></nav-menu> -->
  <header-view></header-view>
  <router-view />
</template>

<script lang="ts">
/* import HelloWorld from './components/HelloWorld.vue'; */

//  import { Vue } from 'vue-class-component'
/* import { defineComponent } from "vue"; */
/*   import NavMenu from './components/NavMenu.vue'; */
import HeaderView from "./components/HeaderView.vue";
import { InitialDataService } from "@/api/InitialDataService";
import { Vue, Options,  } from "vue-class-component";
import { Provide } from 'vue-property-decorator';

@Options({
  components: {
    HeaderView,
  },
})


class App extends Vue {
     @Provide('InitialDataService') service: InitialDataService = new InitialDataService(); // or whatever this is
}
export default App;

/* export default defineComponent({
  components: {
    HeaderView,
  },
  provide: {
    InitialDataService,
  },
});
 */
/*export default defineComponent({
      name: 'App',
      components: {
        HelloWorld
      }
    });*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
