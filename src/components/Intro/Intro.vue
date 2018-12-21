<style src="./Intro.scss" lang="scss" scoped></style>
<script src="./Intro.js"></script>

<template>
  <div class="intro">
    <h2>{{ title }}</h2>
    <div class="sub-title">{{ subTitle }}</div>
    <div class="description">
      <div class="arrow">
        <Icon
            name="arrow-01"
        />
      </div>
      <p v-html="description"></p>
    </div>
  </div>
</template>
