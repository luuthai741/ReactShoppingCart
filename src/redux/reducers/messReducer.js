import * as types from '../constants/ActionTypes'

let initialState = 'GIỎ CHẢ CÓ GÌ CẢ';
let reducer = (state = initialState, action) => {
    switch (action.types) {
        case types.MESSAGE_UPDATE:
            console.log(action);
            return [...state, "CẬP NHẬT THÀNH CÔNG"];
        case types.MESSAGE_SUCCESS:
            return [...state, "THÊM THÀNH CÔNG"];
        case types.MESSAGE_DELETE:
            return [...state, "BỎ THÀNH CÔNG"];
        default:
            return [...state];
    }
}

export default reducer;