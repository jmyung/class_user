import Constant from '../constant';

// STATE 변경
export default {
    [Constant.FETCH_USERS]: (state, payload) => {
        state.userlist = payload.userlist;
    },
    [Constant.FETCH_ONE]: (state, payload) => {
        // state.userlist = payload.userlist;
        state.resultlist = payload.resultlist;
        console.log("mutation : " + payload.resultlist.length);
    },
    [Constant.REFRESH]: (state) => {
        state.resultlist = [];
    }
}