<template>
  <div class="page">
    <img
      :src="yesImage"
      alt="YES"
      class="yes-image"
    />
  </div>
</template>

<script lang="ts" setup>
import yesImage from '@/assets/images/yes-word-made-shiny-lbgt-260nw-1097705531.jpg';
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.yes-image {
  width: 100vw;
  height: 100vh;
  object-fit: contain;
}
</style>
