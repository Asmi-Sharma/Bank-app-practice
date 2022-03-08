<template>
  <div class="debit">
      <div class="debit-amount">
          Annyeong
          <button class="debit-close"> Close Popup</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.debit{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgbd(0, 0, 0, 0.2);
    
    display: flex;
    align-items: center;
    justify-content: center;
}

.debit-amount{
    background: #fff;
    padding: 32px;
}
</style>