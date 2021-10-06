
import axios from "axios";

const api = 'https://api-js401.herokuapp.com/api/v1/todo';

export const getData = () => async(dispatch, state)=>{
    let response = 
    await axios.get(api);
    const result = response.data;
    dispatch(getAll(result))
}

export const getAll = (data) =>{
    return {
        type:'GET',
        payload:data
    }
}


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


export const showDetails = (item)=> (dispatch, state)=>{
    axios.get(`${api}/${item._id}`).send({
        name : item.name,
        category : item.category,
        url : item.url,
        price : item.price,
        availableQuantity : item.availableQuantity
    })
    .then(
        response=>{
            dispatch(getAction(response.body))
        }
    )
}

export const updateRemoteData = (item) => (dispatch, state)=>{
    axios.put(`${api}/${item._id}`).send({
        availableQuantity : item.availableQuantity -1,
        inCart : item.inCart++,
    })
    .then(
        response=> {
            dispatch(add(response.body));
        }
    )
};