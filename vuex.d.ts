import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
/*   interface State {
    count: number
  } */

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export const initialState = {
    dbInitial: {
      methods: [] as string[],
      groupsStocks: [] as string[], 
      timeFrameNames: [] as string[],
      сoeffConfig: undefined
    },
  }
    
export type State = typeof initialState.dbInitial;