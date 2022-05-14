<template>
  <div class="bd-wrap">
<h3>Дивиденды</h3>
    <div>
      <Button
        label="Выполнить расчет"
        class="p-button-info"
        @click="getDividends"
      />
    </div>
  </div>
  {{fotmData}}
</template>

<style>
.bd-wrap {
  margin: 30px 50px;
  display: flex;
  text-align: left;
  flex-direction: column;
}

</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Button from "primevue/button";
import { Observable, of  } from "rxjs";
import { switchMap } from "rxjs/operators";
import Axios from  'axios-observable';

@Options({
  components: {
    Button,
  },
})
class Dividends extends Vue {
  fotmData: string[] = [];

  created() {
 this.getDivs().subscribe(x => {
      this.fotmData = x
      });
  }

  private getDivs(): Observable<string[]> {
    return Axios.get('/GetDivs').pipe(switchMap(x => of(x.data)));       
  }

  public getDividends() {
    this.getDivs().subscribe(x => {
      this.fotmData = x
      });
  }
}

export default Dividends;
</script>