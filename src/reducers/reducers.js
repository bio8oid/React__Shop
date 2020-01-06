import {
    ADD_TO_CART,
    PASS_ID,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
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
    RESET_FILTERS,
    TOGGLE_MENU,
    SET_PAGE,
    DISCOUNT_HANDLE,
    INPUT_HANDLE

} from '../actions/actions'

import products from '../data/dataCopy.json';

const initState = {
    items: products,
    addedItems: [],
    indicatorItems: 0,
    total: 0.00,
    clickedProduct: [],
    isOpen: false,
    page: 1,
    text: ""
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

    if (action.type === SORT_PRICE_ASC) {
        var sortedByPriceAsc = state.items.sort((a, b) => (a.price - b.price))
        return {
            ...state,
            items: [...sortedByPriceAsc]
        }
    }

    if (action.type === SORT_PRICE_DESC) {
        let sortedByPriceDesc = state.items.sort((a, b) => (b.price - a.price))
        return {
            ...state,
            items: [...sortedByPriceDesc]
        }
    }

    if (action.type === SORT_NAME_ASC) {
        let sortedByNameAsc = state.items.sort((a, b) => a.title.localeCompare(b.title))
        return {
            ...state,
            items: [...sortedByNameAsc]
        }
    }

    if (action.type === SORT_NAME_DESC) {
        let sortedByNameDesc = state.items.sort((a, b) => b.title.localeCompare(a.title))
        return {
            ...state,
            items: [...sortedByNameDesc]
        }
    }

    if (action.type === FILTER_TYPE_RISERS) {
        let filteredRisers = initState.items.filter(x => x.tag === 'risers');
        let notEmpty = state.items.length !== products.length
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredRisers],
            }
        }
        return {
            ...state,
            page: 1,
            items: [...filteredRisers]
        }
    }

    if (action.type === RISERS_REMOVED) {
        let risersRemoved = state.items.filter(x => x.tag !== 'risers');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'risers').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: risersRemoved
        }
    }

    if (action.type === FILTER_TYPE_LIMBS) {
        let filteredLimbs = initState.items.filter(x => x.tag === 'limbs');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredLimbs],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredLimbs
        }
    }

    if (action.type === LIMBS_REMOVED) {
        let limbsRemoved = state.items.filter(x => x.tag !== 'limbs');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'limbs').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: limbsRemoved
        }
    }

    if (action.type === FILTER_TYPE_TABS) {
        let filteredTabs = initState.items.filter(x => x.tag === 'tabs');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredTabs],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredTabs
        }
    }

    if (action.type === TABS_REMOVED) {
        let tabsRemoved = state.items.filter(x => x.tag !== 'tabs');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'tabs').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: tabsRemoved
        }
    }

    if (action.type === FILTER_TYPE_STABILIZERS) {
        let filteredStabilizers = initState.items.filter(x => x.tag === 'stabilizers');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredStabilizers],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredStabilizers
        }
    }

    if (action.type === STABILIZERS_REMOVED) {
        let stabilizersRemoved = state.items.filter(x => x.tag !== 'stabilizers');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'stabilizers').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: stabilizersRemoved
        }
    }

    if (action.type === FILTER_TYPE_ARROWS) {
        let filteredArrows = initState.items.filter(x => x.tag === 'arrows');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredArrows],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredArrows
        }
    }

    if (action.type === ARROWS_REMOVED) {
        let arrowsRemoved = state.items.filter(x => x.tag !== 'arrows');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'arrows').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: arrowsRemoved
        }
    }

    if (action.type === FILTER_TYPE_SIGHTS) {
        let filteredSights = initState.items.filter(x => x.tag === 'sights');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredSights],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredSights
        }
    }

    if (action.type === SIGHTS_REMOVED) {
        let sightsRemoved = state.items.filter(x => x.tag !== 'sights');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'sights').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: sightsRemoved
        }
    }

    if (action.type === FILTER_TYPE_STANDS) {
        let filteredStands = initState.items.filter(x => x.tag === 'stands');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredStands],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredStands
        }
    }

    if (action.type === STANDS_REMOVED) {
        let standsRemoved = state.items.filter(x => x.tag !== 'stands');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'stands').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: standsRemoved
        }
    }

    if (action.type === FILTER_TYPE_ARMGUARDS) {
        let filteredArmguards = initState.items.filter(x => x.tag === 'armguards');
        let notEmpty = state.items.length !== products.length;
        if (notEmpty) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredArmguards],
            }
        }
        return {
            ...state,
            page: 1,
            items: filteredArmguards
        }
    }

    if (action.type === ARMGUARDS_REMOVED) {
        let armguardsRemoved = state.items.filter(x => x.tag !== 'armguards');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'armguards').length;
        if (Empty) {
            return {
                ...state,
                items: initState.items
            }
        }
        return {
            ...state,
            items: armguardsRemoved
        }
    }

    if (action.type === TOGGLE_MENU) {
        let open = state.isOpen === false
        if (open) {
            return {
                ...state,
                isOpen: !initState.isOpen
            }
        }
        return {
            ...state,
            isOpen: initState.isOpen
        }
    }

    if (action.type === SET_PAGE) {
        if (action.id === "right") {
            return {
                ...state,
                page: state.page + 1
            }
        }
        if (action.id === "left") {
            return {
                ...state,
                page: state.page - 1
            }
        }
        if (action.id === "") {
            return {
                ...state,
                page: state.page
            }
        }
        return {
            ...state,
            page: Number(action.id)
        }
    }

    if (action.type === RESET_FILTERS) {
        let sortedById = initState.items.sort((a, b) => (a.id - b.id))
        return {
            ...state,
            items: sortedById
        }
    }

    if (action.type === DISCOUNT_HANDLE) {
        let discountedValue = (state.total - (state.total * 10 / 100).toFixed(0))
        return {
            ...state,
            total: discountedValue
        }
    }

    if (action.type === INPUT_HANDLE) {
        let code = action.event
        return {
            ...state,
            text: code
        }
    }

    else {
        return state
    }
}

export default Reducers