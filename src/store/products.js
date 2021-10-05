let initialState = {
    products: [
        {
            categoryAssociation: 'Electronics',
            name: 'TV',
            description: 'CESKA TELEVIZE',
            price: '797$',
            inventoryCount: 15,
            img: 'https://source.unsplash.com/random?TV'
        },
        {
            categoryAssociation: 'Food',
            name: 'Pizza',
            description: 'Spicy & Cheesy Pizza',
            price: '15$',
            inventoryCount: 120,
            img: 'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800'
        }
    ],
}

const productsReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':

            let product = state.products.filter(product => {
                return product.categoryAssociation === payload ? product.categoryAssociation : null

            })
            console.log(product);
            return { ...state, product: product };
        case 'RESET':
            return initialState;

        default:
            return state;
    }
}
export const  activatedProduct = (name) => {
    return {
        type: 'ACTIVE',
        payload: name,
    };
}
export const  reset = () => {
    return {
        type: 'RESET',

    };
}

export default productsReducer