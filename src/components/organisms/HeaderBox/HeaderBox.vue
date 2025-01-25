<template>
  <div class="header-box">
    <div class="exchange-rate">
      <span class="title">Курс:</span>
      <MonitorInput :value="`₽ ${exchangeRate}`" monitoring />
    </div>
    <div class="update-rate">
      <span class="title">Обновление через:</span>
      <span class="update-rate__timer">{{ formattedTime }}</span>
      <CustomButton :icon="updateIcon" @click="resetTimer" />
    </div>
  </div>
</template>

<script>
import updateIcon from "@/assets/svg/update-icon.svg";
import { MonitorInput, CustomButton } from "@/components";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderBox",
  components: {
    MonitorInput,
    CustomButton,
  },
  data() {
    return {
      timer: null,
      timeLeft: 15.0,
      updateIcon,
    };
  },
  computed: {
    ...mapGetters("product", ["exchangeRate"]),
    formattedTime() {
      const seconds = `${Math.floor(this.timeLeft)}`.padStart(2, 0);
      const milliseconds = this.timeLeft.toFixed(3).split(".")[1];
      return `${seconds}.${milliseconds}`;
    },
  },
  methods: {
    ...mapActions("product", ["updateExchangeRate"]),
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft -= 0.01;
        } else {
          this.updateExchangeRate();
          this.timeLeft = 15.0;
        }
      }, 10);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.timeLeft = 15.0;
      this.updateExchangeRate();
      this.startTimer();
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped src="./style.css"></style>
