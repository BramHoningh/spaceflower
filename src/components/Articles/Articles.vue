<style src="./Articles.scss" lang="scss" scoped></style>
<script src="./Articles.js"></script>

<template>
  <div class="articles">
    <div class="articles-intro">
      <h2>What do we make?</h2>
      <div class="sub-title">18 years of experience</div>
      <div class="description">
        <div class="arrow">
          <Icon
            name="arrow-01"
          />
        </div>
        <p>SpaceFlower is an <span class="purple">Dutch</span> full-service creative agency committed
          to <span class="purple">connecting</span> brands and consumers through innovative multi-channel experiences.
          Below you see some of things that <span class="purple">makes us proud!</span></p>
      </div>
    </div>

    <div class="article-items">
      <ArticleItem
          :is-dark="true"
          title="Birdip Social"
          description="Birdip is a powerful online production platform for media management and video production. The platform is used by…"
          image="articles/drone.jpg"
      />
    </div>
  </div>
</template>
