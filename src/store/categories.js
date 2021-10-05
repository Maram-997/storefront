
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
    activeCategory:''
};

 const categoriesReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let active=state.categories.filter(item=>{
                return payload===item.normalizedName? item.normalizedName:""
            })            
          let activeCategory = {
            normalizedName:active[0].normalizedName,
            displayName:active[0].displayName,
            description:active[0].description
          };
          
          let categories = state.categories;
    
          return { activeCategory, categories };
        // case 'RESET':
        //     return initialState;

        default:
            return state;
    }
};

export default categoriesReducer