import { createStore } from "vuex";

export default createStore({
  state: {
    stepServiceData: [
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
    ],
  },
  getters: {
    stpes(state) {
      return state.stepServiceData;
    },
  },
  mutations: {
    updateAcivestep: (state, payload) => {
      debugger;
      let stepServiceData = JSON.parse(JSON.stringify(state)).stepServiceData;
      const index = stepServiceData.findIndex(
        (i) => i.id === payload.selectedId
      );
      stepServiceData[index].active = payload.activeStep;
      state.stepServiceData = stepServiceData;
    },
  },
  actions: {
    updateAcivestep: ({ commit }, payload) => {
      commit("updateAcivestep", payload);
    },
  },
  modules: {},
});
