
export const resetCart = () => {
    return ({
        type: 'REST_CART'
    }
   )
}


export const showCart = (status) => {
    return {
      type: "VISIABLE",
      payload: status
    };
  };

  export const addProduct = (product) => {
    return {
      type: "ADD_TO_CART",
      payload: product,
    };
  };
// category actions
export const activatedCategory = (category) => {
    return {
        type: 'ACTIVE',
        payload: category,
    };
}


// product actions
export const activatedProduct = (name) => {
    return {
        type: 'ACTIVE',
        payload: name,
    };
}

export const addItem = (item) => {
    return (
        {
            type: 'ADD_ITEM',
            payload: item
        }
    )
}
