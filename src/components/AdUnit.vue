<template>
  <div class="ad-wrapper">
    <ins
      :id="`ad-${adSlot}`"
      class="adsbygoogle ad-slot"
      :data-ad-slot="adSlot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from 'vue';

interface Props {
  adSlot: string;
}

const props = defineProps<Props>();

onMounted(async () => {
  await nextTick();
  
  if (typeof window === 'undefined') return;

  const adId = `ad-${props.adSlot}`;
  const adElement = document.getElementById(adId);
  
  if (!adElement) return;

  if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
    try {
      window.adsbygoogle.push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }
});
</script>

<style scoped>
.ad-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90px;
  width: 100%;
}

.ad-slot {
  display: block;
  width: 100%;
  max-width: 728px;
  min-height: 90px;
}

@media (min-width: 320px) {
  .ad-slot {
    min-width: 320px;
  }
}

@media (min-width: 728px) {
  .ad-slot {
    min-width: 728px;
    min-height: 90px;
  }
}
</style>
