<template>
  <div class="modal">
    
        <div class="form" style >
            <h3 class="heading">금융 실행 그룹 / 단기교육 <br/>신청 현황 조회</h3>
            <h3 > 사 &nbsp;&nbsp;&nbsp;&nbsp;번  [<input type="text" name="id"  v-model ="searchId" style="width: 120px;  border:none;" @keyup.enter ="searchUser(searchId)">]
            <img src ="./assets/x.png" style ="width:10px; height : 10px;" @click="clearText">                 
            &nbsp;<input type="button" class="btn btn-success" value="조회" @click="searchUser(searchId)" /></h3>
       <user-list></user-list>
       <div class="form-control"></div>

    <div class="row">
             <h3>상세일정</h3>  
        <detail-plan></detail-plan>
    </div>
        </div>
    </div>
</template>

<script>
import UserList from './components/UserList';
import DetailPlan from './components/DetailPlan';
import CONF from './Config.js';
import Constant from './constant';
import { mapState } from 'vuex';

export default {
    name: 'app',
    components : { UserList, DetailPlan },
    data : function() {
        return { 
        searchId : '',

    }
    },

    computed : {
         ...mapState([ 'userlist', 'resultlist']),

    },
    methods : {
        searchUser: function(id) {
            var searchkey = Number(id);
            if(id.trim()==="") {
                alert("사번을 입력해주십시오.")
            }else if(id.length > 7 ||id.length <5 ||Number.isNaN(searchkey)){
                alert("사번이 올바르지 않습니다. 다시 한번 확인해 주십시오.")
                this.searchId = "";
                this.$store.dispatch(Constant.REFRESH);

            }else{
                this.$store.dispatch(Constant.FETCH_ONE, { id : id });
            
            }
        },
        clearText : function (){
            this.searchId = "";
            this.$store.dispatch(Constant.REFRESH);
        }
    }
}
</script>

<style scoped>
@import url("css/todoapp.min.css");

#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/home-bg.jpg');
  background-size: 1920px 1080px
}
</style>
