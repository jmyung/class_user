
<template>
    <div class="container"   >      
               
    <div class="col-lg-8 col-md-10 mx-auto" >      
         <div class="form-control" style = "border : none;">
        <div class="row">
  
        <table class="table" >
            <thead>
            <tr>
                <th>수강월</th>
                <th>PaaS</th>
                <th>Rest API</th>
                <th>Vue.js</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="plans in detailPlan.plans" style="font-size : 15px;">
                <th>{{plans.month}}월</th>
                <td>{{plans.p}}</td>
                <td>{{plans.a}}</td>
                <td>{{plans.v}}</td>

            </tr>
            </tbody>
        </table>         
    </div> 
 </div>
       </div>

 
    </div>

</template>

<script>
import Constant from '../constant';

export default {
    name : 'detailPlan',
    data : function() {
        return { 
        detailPlan: {
        plans: [{ month: '6', p: '20일 ~ 21일', a: '27일 ~ 28일', v: '14일 ~ 15일' },
            { month: '7', p: '18일 ~ 19일', a: '25일 ~ 26일', v: '12일 ~ 13일' },
            { month: '8', p: '8일 ~ 9일', a: '22일 ~ 23일', v: '16일 ~ 17일' },
            { month: '9', p: '5일 ~ 6일', a: '19일 ~ 20일', v: '12일 ~ 13일' },
            { month: '10', p: '10일 ~ 11일', a: '17일 ~ 18일', v: '24일 ~ 25일' }
        ]
    }
    }
    },
}
</script>

<style>

.close {
    position: relative; right: 0; top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}

.checked {
    background: #BBB;  color: #fff;  text-decoration:line-through;
}

.post-title .complete {
    color: black; text-decoration: none!important;
}
</style>



