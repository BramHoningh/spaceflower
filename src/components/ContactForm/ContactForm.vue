<style src="./ContactForm.scss" lang="scss" scoped></style>
<script src="./ContactForm.js"></script>

<template>
  <div class="contact-form">
    <h2 class="white">Want to get some feedback?</h2>
    <div class="sub-title white">Just fill in this form</div>

    <div class="form">
      <div class="input-item">
        <div class="label">I am a</div>
        <DropdownInput />
      </div>

      <div class="input-item">
        <div class="label">and I want to get in contact about</div>
        <DropdownInput />
      </div>

      <div class="input-item">
        <div class="label">with the following question:</div>

        <form>
          <textarea rows="10" placeholder="Share your message here with us..."></textarea>
        </form>
      </div>
    </div>
  </div>
</template>
