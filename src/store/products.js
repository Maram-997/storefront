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
    activatedProduct :[]
}

const productsReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            state.activatedProduct=state.products.filter(item=>{
                return (payload===item.categoryAssociation ? item.categoryAssociation:null)
              })
               return state;
              
        // case 'RESET':
        //     return initialState;
        case 'ADD_ITEM':
            state.activatedProduct = state.activatedProduct.map((product) => {
                if (product.name === payload.name) {
                  if (product.inventoryCount > 0) {
                    product.inventoryCount = product.inventoryCount - 1;
                  }
                  return product;
                }
                return product;
              });
              return {...state};
        default:
            return state;
    }
}


export default productsReducer