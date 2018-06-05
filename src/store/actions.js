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
        // userAPI.fetchOneUser(payload.id)
        //     .then((response) => {
        //         store.commit(Constant.FETCH_ONE, { userlist: response.data });
        //     })
        //     .catch(
        //         (e) => {
        //             console.log(e);
        //         }
        //     )


        var searchKey = payload.id.trim();
        var list = store.state.userlist.users;
        // console.log(list);
        var resultList = [];
        list.filter(function(item, index) {
            if (item.id === Number(searchKey)) {
                console.log(item);
                resultList.push(item);
            }
        })
        if (resultList.length < 1) {
            resultList.push({ id: searchKey, name: '', p: '', a: '', v: '' });
            console.log(resultList);
        }
        store.commit(Constant.FETCH_ONE, { resultlist: resultList })


    },
    [Constant.REFRESH]: (store) => {
        store.commit(Constant.REFRESH);

    },
    // [Constant.GET_PLANS]: (store) => {
    //     store.commit(Constant.GET_PLANS);

    // },

}