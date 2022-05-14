<template>
  <div class="wrap">
    <div
      class="one-one-method-config-wrap"
      v-for="(row, index) in OneOneMethodConfigArr"
      :key="index"
    >
      <div class="del-config">
        <span class="del-config-butt" @click="delMethodConfiguration(index)"
          >X</span
        >
      </div>
      <one-one-method-configuration
        @remove="delMethodConfiguration(index)"
        :collections="oneOneMethodConfigCollections"
        id="{{index}}"
        :formData="row"
      >
      </one-one-method-configuration>
    </div>
  </div>
  <div class="wrap-footer">
    <div class="config-date">
      <span class="p-float-label">
        <Calendar v-model="startDate" dateFormat="dd.mm.yy" id="startDate" />
        <label for="startDate">Дата начала</label>
      </span>
    </div>

    <div class="config-date">
      <span class="p-float-label">
        <Calendar v-model="endDate" dateFormat="dd.mm.yy" id="endDate" />
        <label for="endDate">Дата окончания</label>
      </span>
    </div>

    <div class="config-quantity" v-if="sampleSizeNames?.length">
      <span class="p-float-label">
        <Dropdown
          id="sampleSizeName"
          v-model="sampleSizeName"
          :options="sampleSizeNames"
        />
        <label for="sampleSizeName">Выдать данных</label>
      </span>
    </div>

    <div class="config-tool">
      <span class="p-float-label">
        <Dropdown
          id="stock"
          v-model="stock"
          :options="groupsStocks"
          @change="stockSelect($event)"
        />
        <label for="stock">Группа инструментов</label>
      </span>
    </div>

    <div class="config-quantity">
      <Button
        label="+"
        class="p-button-rounded p-button-success"
        :disabled="OneOneMethodConfigArr?.length < 1"
        @click="addMethodConfiguration($event)"
      />
    </div>

    <div class="config-quantity">
      <Button
        label="Рассчитать"
        class="p-button-info"
        @click="InvokeCalculate1m(OneOneMethodConfigArr)"
      />
    </div>
    <!--     <ul>
      <li v-for="m in OneOneMethodConfigArr" :key="m">
        {{m}}
        </li>
    </ul> -->
    <div class="configurations bonds-groupp-wrap" v-if="bonds?.length">
      <div v-for="(value, index) in bonds" :key="index" class="bond-wrap">
        <Checkbox
          :id="'bond' + index"
          :name="'bond'"
          :value="value"
          v-model="commonBonds"
        />
        <label :for="'bond' + index">{{ value }}</label>
      </div>

      <div
        :class="checkedAllBondes ? 'checked-all-bonds' : 'unchecked-all-bonds'"
      >
        <Checkbox
          id="checkAllBonds"
          v-model="checkedAllBondes"
          :binary="true"
          @change="tryCheckAll(checkedAllBondes)"
        />
        <label class="check-all-bonds-label" for="checkAllBonds">{{
          checkedAllBondes ? "Снять все" : "Выбрать все"
        }}</label>
      </div>
    </div>
    <!-- <span>Отмеченное: {{ commonBonds }}</span> -->
  </div>
  <div>
    <h6 v-if="!!commonTableColumns?.length">Результаты расчета обобщенные</h6>
    <span v-if="!!commonTableColumns?.length && !commonTable?.length"
      >Данные отсутствуют</span
    >
    <div v-if="!!commonTable?.length" class="table-wrap">
      <DataTable
        :value="commonTable"
        :scrollable="true"
        scrollHeight="flex"
        :rowClass="rowClass"
      >
        <Column
          v-for="(colDef, ind) in commonTableColumns"
          :key="ind"
          :field="colDef.field"
          :header="colDef.header"
          bodyStyle="text-align:left"
        ></Column>
      </DataTable>
    </div>
  </div>

  <div>
    <h6 v-if="!!signalsTableColumns?.length">Данные сигналов</h6>
    <span v-if="!!signalsTableColumns?.length && !signalsTable?.length"
      >Данные отсутствуют</span
    >
    <div v-if="!!signalsTable?.length" class="table-wrap">
      <DataTable
        :value="signalsTable"
        :scrollable="true"
        scrollHeight="flex"
        :rowClass="rowClass"
      >
        <Column
          v-for="(colDef, ind) in signalsTableColumns"
          :key="ind"
          :field="colDef.field"
          :header="colDef.header"
          bodyStyle="text-align:left"
        ></Column>
      </DataTable>
    </div>
  </div>

  <div>
    <h6 v-if="!!dataTableColumns?.length">Таблица результатов расчета</h6>
    <span v-if="!!dataTableColumns?.length && !dataTable?.length"
      >Данные отсутствуют</span
    >
    <div v-if="!!dataTable?.length" class="table-wrap">
      <DataTable
        :value="dataTable"
        :scrollable="true"
        scrollHeight="flex"
        :rowClass="rowClass"
      >
        <Column
          v-for="(colDef, ind) in dataTableColumns"
          :key="ind"
          :field="colDef.field"
          :header="colDef.header"
          bodyStyle="text-align:left"
        ></Column>
      </DataTable>
    </div>
  </div>
</template>

<style>
h6 {
  color: rgb(1, 55, 138);
  font-weight: 600;
  margin-bottom: 0.1rem !important;
}
.wrap {
  margin: 30px 50px;
  display: flex;
  text-align: left;
  flex-direction: column;
}

.config-time .p-inputtext {
  width: 11rem;
}
.config-date .p-inputtext {
  width: 10rem;
}

.wrap-footer {
  margin: 2px 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}

.wrap-footer .config-date,
.config-quantity {
  margin-right: 10px;
  /*  margin-left: 10px; */
}
.config-quantity {
  margin-bottom: 12px;
}
.one-one-method-config-wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}
.del-config {
  display: flex;
  text-align: right;
  flex-direction: column;
  padding-right: 70px;
  margin-bottom: -70px;
  z-index: 50;
}

.del-config .del-config-butt {
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
}

::v-deep(.buy) {
  background-color: rgba(92, 253, 92, 0.445) !important;
}

.buy {
  background-color: rgba(92, 253, 92, 0.445) !important;
}

::v-deep(.sell) {
  background-color: rgba(86, 180, 243, 0.733) !important;
}

.sell {
  background-color: rgba(86, 180, 243, 0.733) !important;
}
::v-deep(.tableRowClass) {
  height: 22px !important;
}
.tableRowClass {
  /* height: 22px !important; */
}

.p-datatable .p-datatable-tbody > tr > td {
  padding: 0px !important;
}

.p-datatable .p-datatable-tbody > tr > th {
  padding: 0.1rem 0.1rem !important;
}
yh
/* .table-wrap {
      border: 1px double rgb(0 0 0 / 38%);
      margin-bottom: 10px;
} */

.p-datatable-flex-scrollable {
  border: 1px solid rgb(0 0 0 / 38%);
  margin-bottom: 20px;
}

.bonds-groupp-wrap .bond-wrap label {
  margin-bottom: 0px;
  margin-right: 5px;
  margin-left: 3px;
  font-size: 14px;
}

.checked-all-bonds .p-checkbox-box {
  background: #f3384b !important;
}

.unchecked-all-bonds .p-checkbox-box {
  background: #15b4cd !important;
}

.check-all-bonds-label {
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 3px;
  font-size: 15px;
  color: #21115c;
}
</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import OneOneMethodConfiguration from "./OneOneMethodConfiguration.vue";
import { Observable, of, zip } from "rxjs";
import { switchMap } from "rxjs/operators";
import Axios from "axios-observable";
import { OneOneMethodConfigCollections } from "@/models/OneOneMethodConfigCollections";
import { GetMethodParamsRequest } from "@/models/GetMethodParamsRequest";
import { GetMethodParamsResponse } from "@/models/GetMethodParamsResponse";
import { InvokeCalculate11Request } from "@/models/InvokeCalculate11Request";
import { CommonTypeTableResult } from "@/models/CommonTypeTableResult";
import { CoeffConfig } from "@/models/CoeffConfig";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Checkbox from "primevue/checkbox";
import { OneOneMethodConfig } from "@/models/OneOneMethodConfig";
import { InitialDataService } from "@/api/InitialDataService";
import { Inject } from "vue-property-decorator";
import { CalculateParamsBasic } from "@/models/CalculateParamsBasic";
import { SampleSize } from "@/models/SampleSize";
import { GetTableDateHelper } from "@/helpers/GetTableDateHelper";
import { GetMethodsDataHelper } from "@/helpers/GetMethodsDataHelper";
import { CalculateParams } from "@/models/CalculateParams";
export type OneOneMethodType = {
  oneOneMethodConfigColl: OneOneMethodConfigCollections;
  oneOneMethodConfig: OneOneMethodConfig;
};

@Options({
  components: {
    OneOneMethodConfiguration,
    Dropdown,
    Calendar,
    Button,
    DataTable,
    Column,
    Checkbox,
  },
})
class OneManyMethod extends Vue {
  @Inject("InitialDataService") InitialDataService!: InitialDataService;
  OneOneMethodConfigArr: OneOneMethodConfig[] = [];
  oneOneMethodConfigCollections:
    | OneOneMethodConfigCollections
    | undefined
    | null = null;
  oneOneMethodConfig: OneOneMethodConfig | undefined = undefined;
  startDate = new Date();
  endDate = new Date();
  sampleSizeName: string | undefined = undefined;
  sampleSizeNames: string[] = [];
  commonBonds: string[] = [];
  stock: string | undefined = undefined;
  groupsStocks: string[] | undefined;
  bonds: string[] = [];
  checkedAllBondes: boolean = true;

  dataTableColumns: CommonTypeTableResult = [];
  dataTable: CommonTypeTableResult = [];
  commonTableColumns: CommonTypeTableResult = [];
  commonTable: CommonTypeTableResult = [];
  signalsTableColumns: CommonTypeTableResult = [];
  signalsTable: CommonTypeTableResult = [];

  created() {
    this.InitialDataService.getEnumsSampleSizeNames().subscribe((x) => {
      this.sampleSizeNames = x;
      this.sampleSizeName = x?.length ? x[0] : undefined;
      this.sampleSizeName = x && x[0];
    });

    zip(
      this.InitialDataService.getGroupsStocks(),
      this.InitialDataService.getMethodsName(),
      this.InitialDataService.getEnumsTimeFrameNames(),
      this.InitialDataService.getFilterTypeNames()
    )
      .pipe(
        switchMap((x: [string[], string[], string[], string[]]) => {
          console.log(x[3]);
          return zip(
            of(new OneOneMethodConfigCollections(x[1], x[0], x[2], x[3])),
            this.getMethodParams(x[1][0]),
            this.InitialDataService.getStocksInGroup(x[0][0])
          );
        })
      )
      .subscribe((x) => {
        let conf = x[0];
        conf.bonds = x[2];
        conf.сoeffConfig = new CoeffConfig(
          x[1].n1,
          x[1].n2,
          x[1].n3,
          x[1].kup,
          x[1].kdown,
          x[1].krsrv
        );

        this.oneOneMethodConfigCollections = conf;
        console.log(this.oneOneMethodConfigCollections);
        this.oneOneMethodConfig = GetMethodsDataHelper.getOneOneMethodConfig(conf);

        this.bonds = conf?.bonds;
        this.groupsStocks = conf.groupsStocks;
        this.checkedAllBondes && (this.commonBonds = conf?.bonds);

        this.stock = conf?.groupsStocks && conf.groupsStocks[0];
        this.OneOneMethodConfigArr.push(Object.assign({}, this.oneOneMethodConfig));
      });
  }

  public addMethodConfiguration() {
    if (!!this.oneOneMethodConfig) {
      this.OneOneMethodConfigArr.push(
        Object.assign({}, this.oneOneMethodConfig)
      );
    }
  }

  public delMethodConfiguration(index: number) {
    this.OneOneMethodConfigArr.splice(index, 1);
  }

  private getMethodParams(
    methodName: string
  ): Observable<GetMethodParamsResponse> {
    let req = new GetMethodParamsRequest(methodName);
    return Axios.post("/GetMethodParams", req).pipe(
      switchMap((x) => of(x.data))
    );
  }

  public InvokeCalculate1m(oneOneMethodConfigArr: OneOneMethodConfig[]) {
    let req = new InvokeCalculate11Request();
    req.basic = new CalculateParamsBasic(
      this.sampleSizeName,
      SampleSize[this.sampleSizeName as keyof typeof SampleSize],
      this.startDate,
      this.endDate,
      this.commonBonds
    );
    let paramsArr = oneOneMethodConfigArr.map(
      (item, index) => new CalculateParams(index, item, true, true)
    );
    req.prms = paramsArr;
    return Axios.post("/InvokeCalculate1m", req)
      .pipe(switchMap((x) => of(x.data)))
      .subscribe((t) => {
        this.dataTableColumns =
          t?.headers?.length &&
          GetTableDateHelper.getTableColumns(t?.headers);
console.log(this.dataTableColumns);
        this.dataTable =
          t?.results?.length && GetTableDateHelper.getTableData(t?.results);
  console.log(this.dataTable);

        this.commonTableColumns =
          t?.headers?.length &&
          GetTableDateHelper.getTableColumns(t?.headers);
        this.commonTable =
          t?.result && GetTableDateHelper.getTableData(t?.result);
      });
  }

  public rowClass(table1Data: any) {
    return table1Data?.codeClassName === 1
      ? { buy: "buy", tableRowClass: "tableRowClass" }
      : table1Data?.codeClassName === 2
      ? "sell"
      : "tableRowClass";
  }

  public tryCheckAll(isCheckAll: boolean) {
    this.commonBonds = isCheckAll ? [...this.bonds] : [];
  }

  public stockSelect(event: { originalEvent: MouseEvent; value: string }) {
    this.InitialDataService.getStocksInGroup(event?.value).subscribe((x) => {
      this.bonds = x;
    });
  }
}

export default OneManyMethod;
</script>