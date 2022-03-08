<template>
  <div >
      <div class="row">
        <div class="displayData ml-5 mt-5">
            <h2>Welcome to XYS bank</h2>
            <div class="shadow mt-4 p-5">
                <div>Total balance: {{ info.totalAmount }}</div>
                <div class="button pt-3">
                    <v-btn @click="debit=true; credit=false; info.flag=false">Debit</v-btn>
                    <v-btn @click="credit=true; debit=false; info.flag=true">Credit</v-btn>
                </div>
            </div>
        </div>

        <div class="form mt-5">
            <div v-if="debit">
                <h5>Debit form</h5>
                <v-form >
                    <v-text-field v-model.number="info.date" type="datetime-local"
                    label="Date" 
                    />
                    <v-text-field v-model.number="info.amount" 
                    label="Amount" 
                    />
                    <v-text-field v-model.number="info.remarks" 
                    label="Remarks" 
                    />
                    <v-btn @click="withdrawAmount(info)">Withdraw</v-btn>
                </v-form>
            </div>
            <div v-else-if="credit">
                <h5>Credit form</h5>
                <v-form >
                    <v-text-field v-model.number="info.date" 
                    label="Date" 
                    />
                    <v-text-field v-model.number="info.amount" 
                    label="Amount" 
                    />
                    <v-text-field v-model.number="info.remarks" 
                    label="Remarks" 
                    />
                    <v-btn @click="depositAmount(info)">Deposit</v-btn>
                </v-form>
            </div>
        </div>
      </div>
      <div>
          <!-- {{ $route.params.email }} -->
          <table class="table mt-5">
              <tr>
                  <th>Date</th>
                  <th>Amount withdraw/deposit</th>
                  <th>totalAmount</th>
                  <th>Remarks</th>
              </tr>
              <tr v-for="(profile, i) in history" :key="i" :class="`${profile.flag? 'green' : 'red' }`">
                  
                  <th>
                      <nuxt-link :to="{ name: 'viewData', params: { userInfo: profile }}" style="color:black">
                        {{profile.date}}
                      </nuxt-link>
                  </th>
                  <th>{{profile.amount}}</th>
                  <th>{{profile.totalAmount}}</th>
                  <th>{{profile.remarks}}</th>
              </tr>
              
          </table>
      </div>
      
    </div>
</template>

<script>
import validations from "@/utils/validations";
export default {
    layout: "common_layout",
    data() {
        return{
            debit: false,
            credit: false,
            info: {
                totalAmount: 0,
                amount: 0,
                date: '',
                remarks: '',
                flag: false,
            },
            ...validations,
            history:[]
        }
    },
    methods: {
        withdrawAmount(info){
            this.info.totalAmount -= info.amount
            this.debit = false
            this.info.date = info.date.toString()
            this.storeData(this.info)
        },
        depositAmount(info){
            this.info.totalAmount = this.info.totalAmount + info.amount
            this.credit = false
            this.storeData(this.info)
            
        },
        getData(){
            if(localStorage.info){
                this.history = JSON.parse(localStorage.History)
                this.info.totalAmount = JSON.parse(localStorage.total)
                this.info.amount = 0
                this.info.remarks = ''
                this.info.date = ''
            }
        },
        storeData(info){
            this.history.push(info)
            localStorage.setItem('History',this.history)
            localStorage.setItem('total',info.totalAmount)
            localStorage.History = JSON.stringify(this.history);
            localStorage.total = JSON.stringify(info.totalAmount);
            
            this.getData()
        }
    },
    mounted(){
        this.getData()
    },
}
</script>

<style>
.displayData{
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
}

.form{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
}
.table{ 
    width: 50%; 
    margin-left: 1vw;
}
.green{
    background-color: rgb(50, 231, 50);
}

.red{
    background-color: rgb(235, 52, 52);
}

</style>