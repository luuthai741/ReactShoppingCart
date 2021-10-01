import { combineReducers } from "redux";
import messReducer from './messReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
let rootReducer = combineReducers({
    message: messReducer,
    products: productReducer,
    cart: cartReducer
})

export default rootReducer