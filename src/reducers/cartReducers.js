import {
    ADD_TO_CART,
    PASS_ID,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
    
} from '../actions/actions'

import products from '../data/dataCopy.json';

const initState = {
    items: products,
    addedItems: [],
    indicatorItems: 0,
    total: 0.00,
    decribedItem: []
}

const cartReducers = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price,
                indicatorItems: state.indicatorItems + 1
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                indicatorItems: state.indicatorItems + 1
            }
        }
    }

    if (action.type === PASS_ID) {
        let decribedItem = state.items.find(item => item.id === action.id)
        return {
            ...state,
            decribedItem: [decribedItem]
        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)

        if (new_items.length === 0) {
            document.getElementById('shipping-checkbox').checked = false;
            document.getElementById("discount-message").classList.add("hide");
            return {
                ...state,
                addedItems: new_items,
                total: 0,
                indicatorItems: state.indicatorItems - itemToRemove.quantity
            }
        }
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            indicatorItems: state.indicatorItems - itemToRemove.quantity
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal,
            indicatorItems: state.indicatorItems + 1
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price

            if (new_items.length === 0) {
                document.getElementById('shipping-checkbox').checked = false;
                document.getElementById("discount-message").classList.add("hide");

                return {
                    ...state,
                    addedItems: new_items,
                    total: 0,
                    indicatorItems: state.indicatorItems - 1
                }
            }
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                indicatorItems: state.indicatorItems - 1
            }
        }

        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
                indicatorItems: state.indicatorItems - 1
            }
        }
    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 15.00
        }
    }

    if (action.type === SUB_SHIPPING) {
        if (state.addedItems === []) {
            return {
                ...state,
                total: 0.00
            }
        }
        return {
            ...state,
            total: state.total - 15.00
        }
    }

    else {
        return state
    }
}

export default cartReducers