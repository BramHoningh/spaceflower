<style src="./Button.scss" lang="scss" scoped></style>
<script src="./Button.js"></script>

<template>
  <button :class="{'btn-primary': type === 'primary', 'btn-secondary': type === 'secondary'}">
    <span class="btn-title">{{ title }}</span>
    <span class="btn-icon">
      <Icon
          :name="getIcon"
      />
    </span>
  </button>
</template>
