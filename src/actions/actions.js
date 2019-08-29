export const ADD_TO_CART = 'ADD_TO_CART';
export const PASS_ID = 'PASS_ID';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const SORT_PRICE_ASC = 'SORT_PRICE_ASC';
export const SORT_PRICE_DESC = 'SORT_PRICE_DESC';
export const SORT_NAME_ASC = 'SORT_NAME_ASC';
export const SORT_NAME_DESC = 'SORT_NAME_DESC';


export const addToCart = id =>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const passID = id =>{
    return{
        type: PASS_ID,
        id
    }
}

export const removeItem = id =>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity = id =>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = id =>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const sortedByPriceAsc = () =>{
    return{
        type: SORT_PRICE_ASC,
    }
}

export const sortedByPriceDesc = () =>{
    return{
        type: SORT_PRICE_DESC,
    }
}

export const sortedByNameAsc = () =>{
    return{
        type: SORT_NAME_ASC,
    }
}

export const sortedByNameDesc = () =>{
    return{
        type: SORT_NAME_DESC,
    }
}
