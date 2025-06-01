<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="d-flex align-center justify-center fill-height">
      <v-img
        :src="yesImage"
        alt="YES"
        max-width="90vw"
        max-height="90vh"
        contain
      />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import yesImage from '@/assets/images/yes-word-made-shiny-lbgt-260nw-1097705531.jpg';
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

.v-responsive {
  width: 100%;
  height: 100%;
}
</style>
