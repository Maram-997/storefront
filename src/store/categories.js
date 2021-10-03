let initialState = {
    categories: [
        {
            normalizedName:'Electronics', 
            displayName:'Electronics', 
            description:'A Collection Of Electronics You Might Need.'
        },
        {
            normalizedName:'Food', 
            displayName:'Food', 
            description: 'You Can Find All Food You Are Looking For.'
        }
    ]
};

 const categoriesReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let selectedCategory = payload;
            let categories = state.categories.map(element => {if(element.displayName === payload)
            return {element}})
            return { selectedCategory, categories};

        case 'RESET':
            return initialState;

        default:
            return state;
    }
};
// actions
export const activatedCategory = (displayName) => {
    return {
        type: 'ACTIVE',
        payload: displayName,
    };
}
export const reset = () => {
    return {
        type: 'RESET',
        
    };
}
export default categoriesReducer