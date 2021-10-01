import * as types from '../constants/ActionTypes'
let initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        image: "",
        description: "Made in China",
        price: 100,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: "Iphone 8 Plus",
        image: "",
        description: "Made in China",
        price: "150",
        inventory: 10,
        rating: 4
    },
    {
        id: 3,
        name: "Iphone X Max",
        image: "",
        description: "Made in China",
        price: "150",
        inventory: 10,
        rating: 4
    },
];

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_PRODUCTS:
            return [...state]

        default:
            // console.log(state);
            return [...state];
    }
}
export default reducer