import create from "zustand";
import { persist } from "zustand/middleware";

function process(set, state) {
  for (const key in state) {
    state["set" + key] = function (value) {
      set((state) => {
        state[key] = value;
      });
    };
  }
  return state;
}

function store(state) {
  const getStore = create(
    // persist((set) => {
    //   return process(set, state);
    // })
    (set) => {
      return process(set, state);
    }
  );
  const storeFactory = function (key) {
    return [
      getStore((state) => state[key]),
      getStore((state) => state["set" + key]),
    ];
  };
  storeFactory.getState = getStore.getState;
  storeFactory.setState = getStore.setState;
  return storeFactory;
}

export default store;
