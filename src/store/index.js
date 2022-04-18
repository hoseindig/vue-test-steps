import { createStore } from "vuex";

export default createStore({
  state: {
    steps: [],
    /*[
      {
        id: 1,
        title: "کارشناس منابع انسانی",
        stages: [
          "منتظر بررسی",
          "کاندید مصاحبه تلفنی",
          "کاندید مصاحبه حضوری",
          "کاندید آزمون عملی",
          "کاندید بررسی منابع انسانی",
          "کاندید بررسی مدیر عامل",
          "کاندید استخدام",
        ],
        active: 5,
      },
      {
        id: 2,
        title: "برنامه نویس مسلط به لاراول",
        stages: [
          "منتظر بررسی",
          "کاندید مصاحبه تلفنی",
          "کاندید مصاحبه حضوری",
          "کاندید استخدام",
        ],
        active: 2,
      },
      {
        id: 3,
        title: "عکاس خودرو",
        stages: [
          "منتظر بررسی",
          "کاندید مصاحبه تلفنی",
          "کاندید مصاحبه حضوری",
          "کاندید آزمون عملی",
          "کاندید استخدام",
        ],
        active: 1,
      },
      {
        id: 4,
        title: "کارشناس تست",
        stages: ["منتظر بررسی", "کاندید مصاحبه تلفنی", "کاندید استخدام"],
        active: 1,
      },
      {
        id: 5,
        title: "برنامه نویس مسلط به جاوا اسکریپت",
        stages: [
          "منتظر بررسی",
          "کاندید مصاحبه تلفنی",
          "کاندید مصاحبه حضوری",
          "کاندید استخدام",
        ],
        active: 3,
      },
    ],*/
  },
  getters: {
    steps(state) {
      return state.steps;
    },
  },
  mutations: {
    updateAcivestep: (state, payload) => {
      let steps = JSON.parse(JSON.stringify(state)).steps;
      const index = steps.findIndex((i) => i.id === payload.selectedId);
      steps[index].active = payload.activeStep;
      state.steps = steps;
    },
    setStepsData: (state, payload) => {
      if (payload.length > 0) state.steps = payload;
      else alert("data error");
    },
  },
  actions: {
    updateAcivestep: ({ commit }, payload) => {
      commit("updateAcivestep", payload);
    },
    setStepsData: ({ commit }, payload) => {
      commit("setStepsData", payload);
    },
  },
  modules: {},
});
