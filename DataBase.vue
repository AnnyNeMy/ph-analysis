<template>
  <div class="bd-wrap">
    <div class="methods">
      <span class="p-float-label">
        <Dropdown  id="method"
          v-model="method"
          :options="methods"
        />
        <label for="method">Метод</label>
       </span>
    </div>
    <div class="configurations">
      <div class="config-tool">
       <span class="p-float-label">
        <Dropdown
        id="groupsStock"
          v-model="stock"
          :options="groupsStocks"
        />
      <label for="groupsStock">Группа инструментов</label>
       </span>
      </div>

      <div class="config-time">
        <span class="p-float-label">
        <Dropdown id="timeFrameName"
          v-model="timeFrameName"
          :options="timeFrameNames"
        />
         <label for="timeFrameName">Временной интервал</label>
         </span>
      </div>
      <div class="config-date">
     <!--    <h5>Дата начала</h5> -->
         <span class="p-float-label">
        <Calendar v-model="startDate" dateFormat="dd.mm.yy" id="startDate" />
         <label for="startDate">Дата начала</label>
          </span>
      </div>

      <div class="config-date">
        <!-- <h5>Дата окончания</h5> -->
         <span class="p-float-label">
        <Calendar v-model="endDate" dateFormat="dd.mm.yy" id="endDate" />
        <label for="endDate">Дата окончания</label>
         </span>
      </div>
    </div>
    <div>
      <Button
        label="Выполнить расчет"
        class="p-button-info"
        @click="dBUpdateInvoke($event)"
      />
    </div>
  </div>
</template>

<style>
.bd-wrap {
  margin: 30px 50px;
  display: flex;
  text-align: left;
  flex-direction: column;
}

.methods .p-inputtext {
  width: 14rem;
}

.methods {
  margin-bottom: 15px;
}

.config-tool .p-inputtext {
  width: 11rem;
}

.config-time .p-inputtext {
  width: 11rem;
}
.config-date .p-inputtext {
  width: 10rem;
}

.configurations {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.configurations .methods,
.config-tool,
.config-time,
.config-date {
  margin-right: 10px;
}
</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import Axios from  'axios-observable';
import { DBUpdateRequest } from "@/models/DBUpdateRequest";
import { DbMethod } from "@/models/DbMethod";
import { GroupStock } from "@/models/GroupStock";
import { TimeFrame } from "@/models/TimeFrame";
import { Inject } from "vue-property-decorator";
import { InitialDataService } from "@/api/InitialDataService";

@Options({
  components: {
    Dropdown,
    Calendar,
    Button,
  },
})
class DataBase extends Vue {

  @Inject('InitialDataService') initialDataService!: InitialDataService; 
  methods: string[] = [];
  groupsStocks: string[] = [];
  stock: string = '';
  method: string = '';
  timeFrameName: string = '';
  timeFrameNames: string[] = [];
  startDate = new Date();
  endDate = new Date();

  created() {
    this.startDate.setDate(this.endDate.getDate() - 30);
    
    this.initialDataService.getGroupsStocks().subscribe(x => {
      this.stock = x[0];
      this.groupsStocks = x;
      });
    this.initialDataService.getDBMethod().subscribe(x => {
       this.method = x[0];
       this.methods = x;
      });
    this.initialDataService.getEnumsTimeFrameNames().subscribe(x => {
      this.timeFrameName = x[0];
      this.timeFrameNames = x;
      });
  }

  public dBUpdateInvoke() {
    let req = new DBUpdateRequest(DbMethod[this.method as keyof typeof DbMethod], GroupStock[this.stock as keyof typeof GroupStock],
     TimeFrame[this.timeFrameName as keyof typeof TimeFrame], this.startDate, this.endDate);
    Axios.post('/DBUpdateInvoke', req ).subscribe();
  }
}

export default DataBase;
</script>