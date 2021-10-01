import * as types from '../constants/ActionTypes'
let data = JSON.parse(localStorage.getItem('cart'))
let initialState = data ? data : [];

let reducer = (state = initialState, action) => {
    let { product, quantity } = action
    let index = findIndex(state, product);
    switch (action.type) {
        case types.ADD_TO_CART:
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({ product, quantity })
            }
            localStorage.setItem('cart', state)
            return [...state]
        case types.UPDATE_ITEM:
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            localStorage.setItem('cart', state)
            return [...state]
        case types.DELETE_ITEM:
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', state)
            return [...state]
        default:
            // console.log(state);
            return [...state];
    }
}

let findIndex = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default reducer