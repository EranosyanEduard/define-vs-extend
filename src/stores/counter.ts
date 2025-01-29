import { defineStore } from "pinia";

const task = "mykey";
const getItemFromStorage = (key: string): string => {
  console.log('key', key)
  const state = localStorage.getItem(task);
  return state ? JSON.stringify(JSON.parse(state)?.[key]) ?? "" : "";
};

const setItemToStorage = (key: string, value: string): void => {
  console.log('key', key, 'value', value)
  const data = localStorage.getItem(task);
  const state: any = data ? JSON.parse(data ?? "") : {};
  state[key] = JSON.parse(value);
  localStorage.setItem(task, JSON.stringify(state));
};

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    obj: {},
    arr: [],
  }),
  actions: {
    increment() {
      this.counter++;
    },
    assign(o: any) {
      this.obj = { ...this.obj, ...o };
    },
    assignArr(o: any) {
      this.arr = [...this.arr, ...o];
    },
  },
  persist: {
    storage: {
      getItem(key: string): string | null {
        return getItemFromStorage(key);
      },
      setItem(key: string, value: string): void {
        return setItemToStorage(key, value);
      },
    },
    beforeHydrate(context) {
      console.log("beforeHydrate", context);
    },
    afterHydrate(context) {
      console.log("afterHydrate", context);
    },
  },
});
