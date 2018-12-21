<style src="./DropdownInput.scss" lang="scss" scoped></style>
<script src="./DropdownInput.js"></script>

<template>
  <div class="input-dropdown">
    <div class="dropdown-value" @click="toggleDropdown">individual <span class="dropdown-arrow"></span></div>
    <transition name="fade">
      <div v-show="isOpen" :class="['dropdown', {'is-active': isOpen}]">
        <div class="option">individual</div>
        <div class="option">company</div>
        <div class="option">apache helicopter</div>
      </div>
    </transition>
  </div>
</template>
