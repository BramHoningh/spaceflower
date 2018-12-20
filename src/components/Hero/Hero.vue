<style src="./Hero.scss" lang="scss" scoped></style>
<script src="./Hero.js"></script>

<template>
  <div class="hero">
    <div class="hero-images">
      <div class="image" v-for="(face, index) in faces" :key="index" :style="{'background-image': `url(${require('@/assets/images/hero/' + face)})`}" />
    </div>

    <div class="hero-title">
      <h1><span class="padded white">We are a <span class="purple">powerfull</span> creative digital <span class="purple">online</span> agency
          for web products and marketing</span></h1>

      <div class="overlay">
        <h1><span>We are a <span class="purple">powerfull</span> creative digital <span class="purple">online</span> agency
          for web products and marketing</span></h1>
      </div>
    </div>
  </div>
</template>
