import product from "../components/product";

let initialState = {
    cart: [],
    visiable: false,
    capacity:0
}

const cartReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case 'ADD_TO_CART':
            let cart=[...state.cart,payload]
        return { cart:cart , visiable: state.visiable, capacity: state.capacity +1};
            case 'REST_CART':
                return initialState;
                case 'VISIABLE':
                    return { cart: product, visiable:payload,capacity:state.capacity}
        default:
            return state;
    }
}

export default cartReducer;