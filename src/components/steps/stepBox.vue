<template>
  <div class="box" :class="isActive ? 'active' : ''">
    <div class="parent-box">
      <div class="box-inner"></div>
    </div>
    <div
      class="line"
      :class="
        stepNumber + 1 === totalStep
          ? 'fisrt-step'
          : stepNumber === 0
          ? 'last-step'
          : ''
      "
    ></div>
    <div class="dot-box">
      <div class="dot-out">
        <div class="dot-inner"></div>
      </div>
    </div>
    <div class="text-box">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      require: true,
    },
    stepNumber: {
      type: Number,
      require: true,
    },
    totalStep: {
      type: Number,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$deactive_color: rgb(166, 166, 166);
$active_color: rgb(0, 202, 88);

$step_size: 125px;
$innter_step_size: $step_size - 9;
$dot_size: 20px;
$boader_size: 5px;

.active {
  .parent-box {
    border: $boader_size solid $active_color;
    .box-inner {
      background-color: $active_color;
    }
    &:after {
      border-top: 20px solid $active_color;
    }
  }
  .dot-box {
    .dot-out {
      border: $boader_size solid $active_color;
    }
  }
}

.fisrt-step {
  width: 47% !important;
}
.last-step {
  width: 50% !important;
  float: left;
}

.box {
  width: $step_size + 35;
  height: $step_size + 135;
  &:hover {
    cursor: pointer;
  }
}
.parent-box {
  width: $step_size;
  height: $step_size;
  border: $boader_size solid $deactive_color;
  border-radius: 50%;
  //   padding: $boader_size;
  .box-inner {
    width: $innter_step_size;
    height: $innter_step_size;
    border: $boader_size solid #ffffff;
    background-color: $deactive_color;
    border-radius: 50%;
  }
  &:after {
    content: "";
    position: relative;
    top: 21px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid $deactive_color;
    clear: both;
  }
}
.dot-box {
  width: $step_size;
  height: $step_size - 30;
  display: flex;
  justify-content: center;

  .dot-out {
    width: $dot_size;
    height: $dot_size;
    border: $boader_size solid $deactive_color;
    background-color: white;
    position: relative;
    top: 50px;
    border-radius: 50%;
  }
}
.text-box {
  width: $step_size;
  //   height: $step_size;
}
.line-box {
  width: $step_size;
  height: $step_size;
}

.line {
  width: 100%;
  height: 3px;
  background-color: $deactive_color;
  position: relative;
  top: 68px;
}
</style>
