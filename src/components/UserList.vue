
<template>
    <div class="container"   >      
             
    <div class="col-lg-8 col-md-10 mx-auto" v-for="users in resultlist" :key = "users" v-if="resultlist.length ===1">      
        
         <div class="form-control" style = "border : none;" v-if="users.p!=''||users.a!=''||users.v!=''">
                <label>[{{users.id}} / {{users.name}}] 님의 신청 현황은 다음과 같습니다. </label>
      
 
        <div class="row">
                <table class="table">
                <thead>
                    <tr>
                        <th>교육명</th><th>신청월</th>
                    </tr>
                </thead>
                <tr   >                    
                    <th> PaaS </th>
                    <td>  <span v-if="users.p != ''">{{users.p}}월</span><span v-else>없음</span></td>    
                </tr>  
                <tr   >                    
                    <th> Rest API </th>
                    <td> <span v-if="users.a != ''">{{users.a}}월</span> <span v-else>없음</span></td>    
                </tr>  
                 <tr  >                    
                    <th> Vue.js </th>
                    <td> <span v-if="users.v != ''">{{users.v}}월</span><span v-else>없음</span> </td>    
                </tr>  

                </table>
                 
        </div>  
        </div>
        <div class="form-control"  style = "border : none;" v-else>
                <label>[{{users.id}}] 님의 신청 현황이 없습니다. </label>
        </div>          
    </div> 

 
    </div>

</template>

<script>
import Constant from '../constant';
import { mapState } from 'vuex';


export default {
    name : 'userlist',
    computed : {
         ...mapState([ 'userlist', 'resultlist' ])
    }
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



