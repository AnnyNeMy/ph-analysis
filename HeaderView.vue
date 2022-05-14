<template>
<Menubar :model="items"></Menubar>
</template>


<style>
   .p-menubar {
    background-color: #f5f5f5;
}
</style>
<script lang="ts">
/* import { defineComponent } from "vue";*/
import Menubar from 'primevue/menubar';  

import { Vue, Options } from 'vue-class-component'

@Options({
  components: {
    Menubar
  }
})
class HeaderView extends Vue {
        
        
             items = [
                {
                   label:'Общее',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'БД',
                         icon:'pi pi-fw pi-th-large',
                         to: "/DataBase"
                      },
                      {
                         label:'Дивиденды',
                         icon:'pi pi-fw pi-wallet',
                         to: "/Dividends"
                      },
                   ]
                },
                {
                   label:'Аналитика',
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                         label:'1:1', 
                         to: "/OneOneMethod"
                      },
                      {
                         label:'1:m',
                         to: "/OneManyMethod"
                      },

                   ]
                },
                {
                   label:'Поиск сигналов',
                   icon:'pi pi-fw pi-search',
                },
                {
                   label:'Эмуляция торгов',
                   icon:'pi pi-fw pi-chart-bar',
                },
                {
                   label:'Исполнение сделок',
                   icon:'pi pi-fw pi-briefcase'
                }
             ]
} 
export default HeaderView; 

    
</script>