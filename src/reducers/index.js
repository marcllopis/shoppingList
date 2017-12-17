
const initialState = {
    items: [],
    itemsOnShopingList: [],
};



const reducer = (state = initialState, action) => {
    console.log('on reducers');
    
    switch (action.type) {
        case 'ADD_ITEM':
        console.log('inside add item');
        
            if (action.moveItTo === "storage") {
                return {
                    ...state,
                    items: [...state.items, action.item]
                };
            }
            return {
                ...state,
                itemsOnShopingList: [...state.itemsOnShopingList, action.item]
            };


        case 'DELETE_ITEM':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}


export default reducer;