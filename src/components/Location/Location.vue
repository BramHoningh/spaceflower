<style src="./Location.scss" lang="scss" scoped></style>
<script src="./Location.js"></script>

<template>
  <div class="location">
    <div class="location-image" :style="{'background-image': `url(${require('@/assets/images/' + image)})`}" />
    <h2 class="white">{{ city }}</h2>
    <div class="tel white">T: {{ tel }}</div>
  </div>
</template>
