<style src="./ArticleItem.scss" lang="scss" scoped></style>
<script src="./ArticleItem.js"></script>

<template>
  <article class="article-item">
    <div class="article-image" :style="{'background-image': `url(${require('@/assets/images/' + image)})`}" />
    <div :class="['article-footer', {'dark': isDark}]">
      <div class="article-content">
        <h2 class="white">{{ title }}</h2>
        <p class="sub-text">{{ description }}</p>
      </div>
      <div class="article-button">
        <Icon name="small-arrow" />
      </div>
    </div>
  </article>
</template>
