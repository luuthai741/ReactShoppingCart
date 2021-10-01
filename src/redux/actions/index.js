import * as types from '../constants/ActionTypes'



// MESSAGE
export const successMess = () => {
    return {
        type: types.MESSAGE_SUCCESS
    }
}
export const deleteMess = () => {
    return {
        type: types.MESSAGE_DELETE
    }
}
export const updateMess = () => {
    return {
        type: types.MESSAGE_UPDATE
    }
}


//PRODUCT

export const listProducts = () => {
    return {
        type: types.LIST_PRODUCTS
    }
}

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const updateItem = (product, quantity) => {
    return {
        type: types.UPDATE_ITEM,
        product,
        quantity
    }
}

export const deleteItem = (product) => {
    return {
        type: types.DELETE_ITEM,
        product,
    }
}

