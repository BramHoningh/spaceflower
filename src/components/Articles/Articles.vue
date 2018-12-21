<style src="./Articles.scss" lang="scss" scoped></style>
<script src="./Articles.js"></script>

<template>
  <div class="articles">
    <Intro
      title="What do we make?"
      subTitle="18 years of experience"
      description="SpaceFlower is an <span class='purple'>Dutch</span> full-service creative agency committed
    to <span class='purple'>connecting</span> brands and consumers through innovative multi-channel experiences.
    Below you see some of things that <span class='purple'>makes us proud!</span>"
    />

    <div class="article-items">
      <ArticleItem
          :is-dark="true"
          title="Birdip Social"
          description="Birdip is a powerful online production platform for media management and video production. The platform is used by…"
          image="articles/drone.jpg"
      />

      <Button
        type="secondary"
        title="See more projects"
      />

      <ArticleItem
          :is-dark="false"
          title="Birdip Social"
          description="Birdip is a powerful online production platform for media management and video production. The platform is used by…"
          image="articles/drone.jpg"
      />

      <ArticleItem
          :is-dark="true"
          title="Birdip Social"
          description="Birdip is a powerful online production platform for media management and video production. The platform is used by…"
          image="articles/drone.jpg"
      />

      <ArticleItem
          :is-dark="false"
          title="Birdip Social"
          description="Birdip is a powerful online production platform for media management and video production. The platform is used by…"
          image="articles/drone.jpg"
      />

      <div class="button-wrapper">
        <Button
            title="Get in contact"
        />

        <Button
            type="secondary"
            title="See more projects"
        />
      </div>
    </div>
  </div>
</template>
c                                                                                                                                                                                                  cc
