<style src="./Home.scss" lang="scss" scoped></style>
<script src="./Home.js"></script>

<template>
  <div class="home page">
    <Hero />
    <Articles />
    <Intro
      title="Where do we work?"
      subTitle="Get inspired every day"
      description="SpaceFlower is an <span class='purple'>Dutch</span> full-service creative agency committed to <span class='purple'>connecting</span> brands and consumers through innovative multi-channel experiences. Below you see some of things that <span class='purple'>makes us proud!</span>"
    />
    <div class="locations">
      <Location
          image="articles/drone.jpg"
          city="Berlin"
          tel="0045 85 56 21"
      />

      <Location
          image="articles/drone.jpg"
          city="Paris"
          tel="0097 27 56 21"
      />

      <Location
          image="articles/drone.jpg"
          city="Amsterdam"
          tel="0031 27 56 21"
      />
    </div>
    <ContactForm />
  </div>
</template>
