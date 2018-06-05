import CONF from '../Config.js';
import axios from 'axios';

// axios API 통신 스크립트
export default {
    fetchUserList: function() {
        return axios.get(CONF.FETCH_USERS);
    },
    fetchOneUser: function(id) {
        console.log();
        return axios.get(CONF.FETCH_ONE.replace("${id}", id));
    }
}