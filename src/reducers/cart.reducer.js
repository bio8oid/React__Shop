import {
    ADD_TO_CART,
    PASS_ID,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
  
} from '../actions/actions'

import products from '../data/data.json';

const initState = {
    items: products,
    baseList: [],
    addedItems: [],
    total: 0,
    clickedProduct: [],
}

const Reducers = (state = initState, action) => {

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
        let clickedProduct = state.items.find(item => item.id === action.id)
        return {
            ...state,
            clickedProduct: [clickedProduct]
        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
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
            total: state.total + 3.99
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        if (state.addedItems === []) {
            return{
                ...state,
                total: 0.00
            }
        }
        return {
            ...state,
            total: state.total - 3.99
        }
    }
        return state
}

export default Reducers