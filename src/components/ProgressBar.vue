<template>
  <div>
    <div class="container">
      <div class="loading-bar">
        <div
          class="percentage"
          :style="{ width: percentage + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 0
    };
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
  created() {
    var intval = setInterval(() => {
      if (this.percentage < 100) this.percentage += 0.1;
      else clearInterval(intval);
    }, 10);
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: right;
  font-size: 8rem;
  color: #555;
}

.loading-bar {
  position: relative;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: 0.4), 0 -1px 1px #fff,
    0 1px 0 #fff;

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: #aca919;
    background-size: 30px 30px;
    background-image: linear-gradient(
      135deg,
      rgba($color: #fff, $alpha: 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba($color: #fff, $alpha: 0.15) 50%,
      rgba($color: #fff, $alpha: 0.15) 75%,
      transparent 75%,
      transparent
    );
    animation: animate-stripes 3s linear infinite;

    &::after {
      content: "COOLDOWN";
      position: absolute;
      font-size: 1rem;
      top: 20%;
      left: -10%;
      width: 120px;
      height: 30px;
      color: black;
      z-index: 20;
    }
  }
}

@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>
