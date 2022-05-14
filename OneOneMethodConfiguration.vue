<template>
  <div class="bd-wrap">
    <div class="configurations">
      <div class="config-tool">
        <!--    <h5>Группа инструментов</h5> -->
        <span class="p-float-label">
          <Dropdown
            id="groupsStock"
            v-model="formData.stock"
            :options="collections?.groupsStocks"
            @change="stockSelect($event)"
          />
          <label for="groupsStock">Группа инструментов</label>
        </span>
      </div>
      <div class="config-bond">
        <span class="p-float-label">
          <Dropdown
            id="bond"
            v-model="formData.bond"
            :options="collections?.bonds"
          />
          <label for="bond">Бумага</label>
        </span>
      </div>
      <div class="config-methods">
        <!--  <h5>Методы</h5> -->
        <span class="p-float-label">
          <Dropdown
            id="method"
            v-model="formData.method"
            :options="collections?.methods"
            @change="methodSelect($event)"
          />
          <label for="method">Метод</label>
        </span>
      </div>
      <div class="config-time">
        <span class="p-float-label">
          <Dropdown
            id="timeFrameName"
            v-model="formData.timeFrameName"
            :options="collections?.timeFrameNames"
          />
          <label for="timeFrameName">Временной интервал</label>
        </span>
      </div>
    </div>

    <div class="configurations">
      <div class="config-koeff">
        <span class="p-float-label">
          <InputText
            id="n1"
            type="number"
            v-model="formData.n1Value"
            :disabled="!formData.n1Value && formData.n1Value !== 0"
          />
          <label for="n1">N1</label>
        </span>
      </div>
      <div class="config-koeff">
        <span class="p-float-label">
          <InputText
            id="n2"
            type="number"
            v-model="formData.n2Value"
            :disabled="!formData.n2Value && formData.n2Value !== 0"
          />
          <label for="n1">N2</label>
        </span>
      </div>
      <div class="config-koeff">
        <span class="p-float-label">
          <InputText
            id="n3"
            type="number"
            v-model="formData.n3Value"
            :disabled="!formData.n3Value && formData.n3Value !== 0"
          />
          <label for="n1">N3</label>
        </span>
      </div>
      <div class="config-koeff">
        <span class="p-float-label">
          <InputText
            id="kUp"
            type="number"
            v-model="formData.kUpValue"
            :disabled="!formData.kUpValue && formData.kUpValue !== 0"
          />
          <label for="kUp">Kup</label>
        </span>
      </div>
      <div class="config-koeff">
        <span class="p-float-label">
          <InputText
            id="kDown"
            type="number"
            v-model="formData.kDownValue"
            :disabled="!formData.kDownValue && formData.kDownValue !== 0"
          />
          <label for="kDown">Kdown</label>
        </span>
      </div>
      <div class="additionalVaiable-koeff">
        <span class="p-float-label">
          <InputText
            :disabled="
              !formData.additionalVaiableValue &&
              formData.additionalVaiableValue !== 0
            "
            id="additionalVaiable"
            type="number"
            v-model="formData.additionalVaiableValue"
          />
          <label for="additionalVaiable">Additional vaiable</label>
        </span>
      </div>
    </div>
    <div class="configurations">
      <div class="p-field-radiobutton config-koeff">
        <RadioButton
          id="Long"
          value="Long"
          v-model="formData.transactionType"
        />
        <label for="Long">Long</label>
      </div>
      <div class="p-field-radiobutton config-koeff">
        <RadioButton
          id="Short"
          value="Short"
          v-model="formData.transactionType"
        />
        <label for="Short">Short</label>
      </div>
      <div>
        <span class="p-float-label">
          <Dropdown
            id="filterTypeName"
            v-model="formData.filterTypeName"
            :options="collections?.filterTypeNames"
          />
          <label for="filterTypeName">Фильтр</label>
        </span>
      </div>
      <!-- <div class="del-config"><span class="del-config-butt" @click="remove">X</span></div> -->
    </div>
  </div>
</template>

<style>
.bd-wrap {
  margin: 30px 50px 0px 30px;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 30px 20px 10px 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
}

.config-koeff {
  margin-right: 10px;
  margin-bottom: 10px;
}
.methods .p-inputtext {
  width: 14rem;
}

.config-tool .p-inputtext {
  width: 10rem;
}

.config-time .p-inputtext {
  width: 10rem;
}
.config-date .p-inputtext {
  width: 10rem;
}

.config-bond .p-inputtext {
  width: 9rem;
}
.configurations {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.p-float-label {
  font-size: 14px;
}

/* .p-float-label > label {
  color: #04abf7;
  -webkit-text-stroke: 0.1px #f8f9fa;
  font-size: 15px !important;
  font-weight: 800;
} */

.configurations .config-methods,
.config-bond,
.config-tool,
.config-time,
.config-date {
  margin-right: 10px;
  margin-bottom: 12px;
}

.config-koeff span input {
  width: 80px;
}
.additionalVaiable-koeff span input {
  width: 150px;
}
</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop, Inject } from "vue-property-decorator";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import Button from "primevue/button";
import { OneOneMethodConfigCollections } from "@/models/OneOneMethodConfigCollections";
import { Axios } from "axios-observable";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { GetMethodParamsResponse } from "@/models/GetMethodParamsResponse";
import { GetMethodParamsRequest } from "@/models/GetMethodParamsRequest";
import { OneOneMethodConfig } from "@/models/OneOneMethodConfig";
import { InitialDataService } from "@/api/InitialDataService"

@Options({
  components: {
    Dropdown,
    Calendar,
    Button,
    InputText,
    RadioButton,
  }, 
})
class OneOneMethodConfiguration extends Vue {
  @Prop() public formData!: OneOneMethodConfig;
  @Prop() public collections!: OneOneMethodConfigCollections;
  @Inject('InitialDataService') InitialDataService!: InitialDataService;  

  methodCollection: string[] | undefined = this.collections?.methods;
  stockCollection: string[] | undefined = this.collections?.groupsStocks;
  bondCollection: string[] | undefined = this.collections?.bonds;
  timeFrameNameCollection: string[] | undefined = this.collections
    ?.timeFrameNames;
  /*  stock: string | undefined =  this.formData?.stock;
  method: string | undefined = this.formData?.method;
  bond: string | undefined  = this.formData?.bond;
  timeFrameName: string | undefined = this.formData?.timeFrameName; */
  n1Value: number | undefined | null = this.formData?.n1Value;
  n2Value: number | undefined | null = this.formData?.n2Value;
  n3Value: number | undefined | null = this.formData?.n3Value;
  kUpValue: number | undefined | null = this.formData?.kUpValue;
  kDownValue: number | undefined | null = this.formData?.kDownValue;
  additionalVaiableValue: number | undefined | null = this.formData
    ?.additionalVaiableValue;
  transactionType: string = "Long";

  public stockSelect(event: { originalEvent: MouseEvent; value: string }) {
    this.InitialDataService.getStocksInGroup(event?.value).subscribe((x) => {
      this.bondCollection = x;
      this.formData.bond = x && x[0];
    });
  }

  public methodSelect(event: { originalEvent: MouseEvent; value: string }) {
    this.getMethodParams(event?.value).subscribe((x) => {
      this.formData.n1Value = x.n1;
      this.formData.n2Value = x.n2;
      this.formData.n3Value = x.n3;
      this.formData.kUpValue = x.kup;
      this.formData.kDownValue = x.kdown;
      this.formData.additionalVaiableValue = x.krsrv;
    });
  }

  private getMethodParams(
    methodName: string
  ): Observable<GetMethodParamsResponse> {
    let req = new GetMethodParamsRequest(methodName);
    return Axios.post("/GetMethodParams", req).pipe(
      switchMap((x) => of(x.data))
    );
  }

  public remove() {
    this.$emit("remove");
  }
}
export default OneOneMethodConfiguration;
</script>