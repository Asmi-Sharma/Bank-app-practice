<template>
  
  <div class="m-5">
      <h2 v-if="$route.params.userInfo.flag">Credit</h2>
      <h2 v-else>Debit</h2>
      <p>Date: {{$route.params.userInfo.date}} </p> 
      <p v-if="$route.params.userInfo.flag">Deposit Amount: {{$route.params.userInfo.amount}}</p> 
      <p v-else>Withdraw Amount: {{$route.params.userInfo.amount}}</p>
      <p>Total Amount: {{$route.params.userInfo.totalAmount}}</p>
      <p>Remarks: {{$route.params.userInfo.remarks}}</p>
  </div>
</template>

<script>
export default {
    layout: 'common_layout'

}
</script>

<style>

</style>