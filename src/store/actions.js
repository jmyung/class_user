import userAPI from '../api/UserAPI';
import Constant from '../constant';

import Vue from 'vue';

// 외부API 및 MUTATIONS 호출 
export default {
    [Constant.FETCH_USERS]: (store) => {
        userAPI.fetchUserList()
            .then((response) => {
                store.commit(Constant.FETCH_USERS, { userlist: response.data });
            })
    },
  
   [Constant.FETCH_ONE]: (store, payload) => {
        console.log(payload.id);
        var id = payload.id;
        var resultList = [];
        userAPI.fetchOneUser(id)
            .then((response) => {
                resultList.push(response.data);
                store.commit(Constant.FETCH_ONE, { resultlist: resultList });
            })
            .catch(
                (e) => {

                    resultList.push({ id: id, name: '', p: '', a: '', v: '' });
                    store.commit(Constant.FETCH_ONE, { resultlist: resultList })
                    console.log(e);
                }
            )
    },

  
    [Constant.REFRESH]: (store) => {
        store.commit(Constant.REFRESH);

    },
    // [Constant.GET_PLANS]: (store) => {
    //     store.commit(Constant.GET_PLANS);

    // },

}
