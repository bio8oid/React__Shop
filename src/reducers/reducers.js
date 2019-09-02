import {
    ADD_TO_CART,
    PASS_ID,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SORT_PRICE_ASC,
    SORT_PRICE_DESC,
    SORT_NAME_ASC,
    SORT_NAME_DESC,
    FILTER_TYPE_RISERS,
    RISERS_REMOVED,
    FILTER_TYPE_LIMBS,
    LIMBS_REMOVED,
    FILTER_TYPE_TABS,
    TABS_REMOVED,
    FILTER_TYPE_STABILIZERS,
    STABILIZERS_REMOVED,
    FILTER_TYPE_ARROWS,
    ARROWS_REMOVED,
    FILTER_TYPE_SIGHTS,
    SIGHTS_REMOVED,
    FILTER_TYPE_STANDS,
    STANDS_REMOVED,
    FILTER_TYPE_ARMGUARDS,
    ARMGUARDS_REMOVED,
    CHECKBOX_UP,
    CHECKBOX_DOWN,
    RESET_FILTERS
    
} from '../actions/actions'

import products from '../Data/Data.json';


const initState = {
    items: products,
    activeItemsList: products,
    addedItems: [],
    total: 0,
    clickedProduct: [],
    checkbox: 0,
    //filtered: []
}

console.log(initState.checkbox)
/*
const componentDidMount = () => {
  fetch('mongodb+srv://8bollod8:8bollod8@clustershopapp-j4vjy.mongodb.net/test?retryWrites=true&w=majority')
  .then(res => res.json())
  .then((data) => {
    this.setState({ items: data })
    console.log(data)
  })
  .catch(console.log)
}
*/


const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    if (action.type === PASS_ID) {
        let clickedProduct = state.items.find(item => item.id === action.id)
        console.log(clickedProduct)
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
            total: newTotal
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }

        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
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
        return {
            ...state,
            total: state.total - 3.99
        }
    }

    if (action.type === SORT_PRICE_ASC) {
        let sortedByPriceAsc = state.items.sort((a, b) => (a.price - b.price))
        return {
            ...state,
            items: sortedByPriceAsc
        }
    }

    if (action.type === SORT_PRICE_DESC) {
        let sortedByPriceDesc = state.items.sort((a, b) => (b.price - a.price))
        return {
            ...state,
            items: sortedByPriceDesc
        }
    }

    if (action.type === SORT_NAME_ASC) {
        let sortedByNameAsc = state.items.sort((a, b) => a.title.localeCompare(b.title))
        console.log(sortedByNameAsc)
        return {
            ...state,
            items: sortedByNameAsc
        }
    }

    if (action.type === SORT_NAME_DESC) {
        let sortedByNameDesc = state.items.sort((a, b) => b.title.localeCompare(a.title))
        console.log(sortedByNameDesc)
        return {
            ...state,
            items: sortedByNameDesc
        }
    }

    if (action.type === FILTER_TYPE_RISERS) {
        let filteredRisers = state.activeItemsList.filter(x => x.tag === 'risers')
        console.log(filteredRisers)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredRisers],
            }
        }
        return {
            ...state,
            items: filteredRisers
        }
    }

    if (action.type === RISERS_REMOVED) {
        let risersRemoved = state.items.filter(x => x.tag !== 'risers')
        console.log(risersRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: risersRemoved,
        }
    }

    if (action.type === FILTER_TYPE_LIMBS) {
        let filteredLimbs = state.activeItemsList.filter(x => x.tag === 'limbs')
        console.log(filteredLimbs)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredLimbs],
            }
        }
        return {
            ...state,
            items: filteredLimbs
        }
    }

    if (action.type === LIMBS_REMOVED) {
        let limbsRemoved = state.items.filter(x => x.tag !== 'limbs')
        console.log(limbsRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: limbsRemoved,
        }
    }

    if (action.type === FILTER_TYPE_TABS) {
        let filteredTabs = state.activeItemsList.filter(x => x.tag === 'tabs')
        console.log(filteredTabs)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredTabs],
            }
        }
        return {
            ...state,
            items: filteredTabs
        }
    }

    if (action.type === TABS_REMOVED) {
        let tabsRemoved = state.items.filter(x => x.tag !== 'tabs')
        console.log(tabsRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: tabsRemoved,
        }
    }

    if (action.type === FILTER_TYPE_STABILIZERS) {
        let filteredStabilizers = state.activeItemsList.filter(x => x.tag === 'stabilizers')
        console.log(filteredStabilizers)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredStabilizers],
            }
        }
        return {
            ...state,
            items: filteredStabilizers
        }
    }

    if (action.type === STABILIZERS_REMOVED) {
        let stabilizersRemoved = state.items.filter(x => x.tag !== 'stabilizers')
        console.log(stabilizersRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: stabilizersRemoved,
        }
    }

    if (action.type === FILTER_TYPE_ARROWS) {
        let filteredArrows = state.activeItemsList.filter(x => x.tag === 'arrows')
        console.log(filteredArrows)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredArrows],
            }
        }
        return {
            ...state,
            items: filteredArrows
        }
    }

    if (action.type === ARROWS_REMOVED) {
        let arrowsRemoved = state.items.filter(x => x.tag !== 'arrows')
        console.log(arrowsRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: arrowsRemoved,
        }
    }

    if (action.type === FILTER_TYPE_SIGHTS) {
        let filteredSights = state.activeItemsList.filter(x => x.tag === 'sights')
        console.log(filteredSights)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredSights],
            }
        }
        return {
            ...state,
            items: filteredSights
        }
    }

    if (action.type === SIGHTS_REMOVED) {
        let sightsRemoved = state.items.filter(x => x.tag !== 'sights')
        console.log(sightsRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: sightsRemoved,
        }
    }

    if (action.type === FILTER_TYPE_STANDS) {
        let filteredStands = state.activeItemsList.filter(x => x.tag === 'stands')
        console.log(filteredStands)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredStands],
            }
        }
        return {
            ...state,
            items: filteredStands
        }
    }

    if (action.type === STANDS_REMOVED) {
        let standsRemoved = state.items.filter(x => x.tag !== 'stands')
        console.log(standsRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: standsRemoved,
        }
    }

    if (action.type === FILTER_TYPE_ARMGUARDS) {
        let filteredArmguards = state.activeItemsList.filter(x => x.tag === 'armguards')
        console.log(filteredArmguards)
        let notEmpty = state.items !== products;
        console.log(notEmpty)
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredArmguards],
            }
        }
        return {
            ...state,
            items: filteredArmguards
        }
    }

    if (action.type === ARMGUARDS_REMOVED) {
        let armguardsRemoved = state.items.filter(x => x.tag !== 'armguards')
        console.log(armguardsRemoved)
        let Empty = state.items === []
        console.log(Empty)
        if (Empty) {
            return {
                ...state,
            items: initState.items
            }
        }
        return {
            ...state,
                items: armguardsRemoved,
        }
    }

    if (action.type === CHECKBOX_UP) {
        console.log(state.checkbox)
        return {
            ...state,
            checkbox: state.checkbox + 1
        }
    }

    if (action.type === CHECKBOX_DOWN) {
        console.log(state.checkbox)
        return {
            ...state,
            checkbox: state.checkbox - 1
        }
    }else if(initState.checkbox !== 0) {
        return {
            ...state,
                items: products
        }
    }

    if (action.type === RESET_FILTERS) {
        return {
            ...state,
            items: products
        }
    }

    else {
        return state
    }

}

export default cartReducer
