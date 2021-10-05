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
    ],
    activeCategory:[]
};

 const categoriesReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let selectedCategory = payload;
            let categories = state.categories
            return { selectedCategory, categories};

        case 'RESET':
            return initialState;

        default:
            return state;
    }
};
// actions
export const activatedCategory = (category) => {
    return {
        type: 'ACTIVE',
        payload: category,
    };
}
export const reset = () => {
    return {
        type: 'RESET',
        
    };
}
export default categoriesReducer