<template>
  <div id="page">
    <img src="../assets/people_trust_white.svg" alt="logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
  data() {
    return {};
  },
};
</script>

<style scoped>
#page {
  position: absolute;
  background-color: #40196d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}

.logo {
  width: 250px;
  animation: loading 2s infinite;
}

@keyframes loading {
  0% {
    width: 250px;
  }

  50% {
    width: 150px;
  }

  100% {
    width: 250px;
  }
}
</style>
