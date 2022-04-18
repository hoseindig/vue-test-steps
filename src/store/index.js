import { createStore } from "vuex";

export default createStore({
  state: {
    stepData: [
      { id: 1, label: "step 1", isActive: false },
      { id: 2, label: "step 2", isActive: false },
      { id: 3, label: "step 3", isActive: false },
      { id: 4, label: "step 4", isActive: false },
      { id: 5, label: "step 5", isActive: false },
      { id: 6, label: "step 6", isActive: false },
    ],
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
      state.stepServiceData[payload.selected].active = payload.activeStep;
    },
  },
  actions: {
    updateAcivestep: ({ commit }, payload) => {
      commit("updateAcivestep", payload);
    },
  },
  modules: {},
});
