import {
    LOAD_PRODUCTS,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
    ITEM_DESCRIPTION,
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
    DISCOUNT_HANDLE,
    SET_PAGE

} from '../actions/actions';


const initState = {
    itemsTemplate: [],
    items: [],
    addedItems: [],
    indicatorItems: 0,
    total: 0.00,
    describedProduct: [],
    page: 1
}

const itemsReducers = (state = initState, action) => {

    if (action.type === LOAD_PRODUCTS) {
        const refactored = action.data.map(x => x.price ? { ...x, price: Number(x.price) } : x);
        let serverResponse = refactored.sort((a, b) => (a.id - b.id));

        return {
            ...state,
            items: [...initState.items, ...serverResponse],
            itemsTemplate: [...initState.itemsTemplate, ...serverResponse],
        }
    };

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existedItem = state.addedItems.find(item => action.id === item.id);

        if (existedItem) {
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
    };

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id);
        let newItems = state.addedItems.filter(item => action.id !== item.id);
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);

        if (newItems.length === 0) {
            document.getElementById('shipping-checkbox').checked = false;
            document.getElementById("discount-message").classList.add("hide");

            return {
                ...state,
                addedItems: newItems,
                total: 0,
                indicatorItems: state.indicatorItems - itemToRemove.quantity
            }
        };
        return {
            ...state,
            addedItems: newItems,
            total: newTotal,
            indicatorItems: state.indicatorItems - itemToRemove.quantity
        }
    };

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + addedItem.price;
        return {
            ...state,
            total: newTotal,
            indicatorItems: state.indicatorItems + 1
        }
    };

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id);

        if (addedItem.quantity === 1) {
            let newItems = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - addedItem.price;

            if (newItems.length === 0) {
                document.getElementById('shipping-checkbox').checked = false;
                document.getElementById("discount-message").classList.add("hide");

                return {
                    ...state,
                    addedItems: newItems,
                    total: 0,
                    indicatorItems: state.indicatorItems - 1
                }
            };
            return {
                ...state,
                addedItems: newItems,
                total: newTotal,
                indicatorItems: state.indicatorItems - 1
            }
        }

        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                total: newTotal,
                indicatorItems: state.indicatorItems - 1
            }
        }
    };

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 15.00
        }
    };

    if (action.type === SUB_SHIPPING) {
        if (state.addedItems === []) {
            return {
                ...state,
                total: 0.00
            }
        };
        return {
            ...state,
            total: state.total - 15.00
        }
    };

    if (action.type === ITEM_DESCRIPTION) {
        let describedProduct = state.items.find(item => item.id === action.id);
        return {
            ...state,
            describedProduct: [describedProduct]
        }
    };

    if (action.type === SORT_PRICE_ASC) {
        var sortedByPriceAsc = state.items.sort((a, b) => (a.price - b.price));
        return {
            ...state,
            items: [...sortedByPriceAsc]
        }
    };

    if (action.type === SORT_PRICE_DESC) {
        let sortedByPriceDesc = state.items.sort((a, b) => (b.price - a.price));
        return {
            ...state,
            items: [...sortedByPriceDesc]
        }
    };

    if (action.type === SORT_NAME_ASC) {
        let sortedByNameAsc = state.items.sort((a, b) => a.title.localeCompare(b.title));
        return {
            ...state,
            items: [...sortedByNameAsc]
        }
    };

    if (action.type === SORT_NAME_DESC) {
        let sortedByNameDesc = state.items.sort((a, b) => b.title.localeCompare(a.title));
        return {
            ...state,
            items: [...sortedByNameDesc]
        }
    };

    if (action.type === FILTER_TYPE_RISERS) {
        let filteredRisers = state.itemsTemplate.filter(x => x.tag === 'risers');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredRisers],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredRisers
        }
    };

    if (action.type === RISERS_REMOVED) {
        let risersRemoved = state.items.filter(x => x.tag !== 'risers');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'risers').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: risersRemoved
        }
    };

    if (action.type === FILTER_TYPE_LIMBS) {
        let filteredLimbs = state.itemsTemplate.filter(x => x.tag === 'limbs');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredLimbs],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredLimbs
        }
    };

    if (action.type === LIMBS_REMOVED) {
        let limbsRemoved = state.items.filter(x => x.tag !== 'limbs');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'limbs').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: limbsRemoved
        }
    };

    if (action.type === FILTER_TYPE_TABS) {
        let filteredTabs = state.itemsTemplate.filter(x => x.tag === 'tabs');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredTabs],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredTabs
        }
    };

    if (action.type === TABS_REMOVED) {
        let tabsRemoved = state.items.filter(x => x.tag !== 'tabs');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'tabs').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: tabsRemoved
        }
    };

    if (action.type === FILTER_TYPE_STABILIZERS) {
        let filteredStabilizers = state.itemsTemplate.filter(x => x.tag === 'stabilizers');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredStabilizers],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredStabilizers
        }
    };

    if (action.type === STABILIZERS_REMOVED) {
        let stabilizersRemoved = state.items.filter(x => x.tag !== 'stabilizers');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'stabilizers').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: stabilizersRemoved
        }
    };

    if (action.type === FILTER_TYPE_ARROWS) {
        let filteredArrows = state.itemsTemplate.filter(x => x.tag === 'arrows');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredArrows],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredArrows
        }
    };

    if (action.type === ARROWS_REMOVED) {
        let arrowsRemoved = state.items.filter(x => x.tag !== 'arrows');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'arrows').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: arrowsRemoved
        }
    };

    if (action.type === FILTER_TYPE_SIGHTS) {
        let filteredSights = state.itemsTemplate.filter(x => x.tag === 'sights');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredSights],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredSights
        }
    };

    if (action.type === SIGHTS_REMOVED) {
        let sightsRemoved = state.items.filter(x => x.tag !== 'sights');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'sights').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: sightsRemoved
        }
    };

    if (action.type === FILTER_TYPE_STANDS) {
        let filteredStands = state.itemsTemplate.filter(x => x.tag === 'stands');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredStands],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredStands
        }
    };

    if (action.type === STANDS_REMOVED) {
        let standsRemoved = state.items.filter(x => x.tag !== 'stands');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'stands').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: standsRemoved
        }
    };

    if (action.type === FILTER_TYPE_ARMGUARDS) {
        let filteredArmguards = state.itemsTemplate.filter(x => x.tag === 'armguards');
        let alreadyFiltered = state.items.length !== state.itemsTemplate.length;

        if (alreadyFiltered) {
            return {
                ...state,
                page: 1,
                items: [...state.items, ...filteredArmguards],
            }
        };
        return {
            ...state,
            page: 1,
            items: filteredArmguards
        }
    };

    if (action.type === ARMGUARDS_REMOVED) {
        let armguardsRemoved = state.items.filter(x => x.tag !== 'armguards');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'armguards').length;

        if (Empty) {
            return {
                ...state,
                page: 1,
                items: state.itemsTemplate
            }
        };
        return {
            ...state,
            page: 1,
            items: armguardsRemoved
        }
    };

    if (action.type === RESET_FILTERS) {
        let sortedById = state.itemsTemplate.sort((a, b) => (a.id - b.id));
        return {
            ...state,
            items: sortedById
        }
    };

    if (action.type === DISCOUNT_HANDLE) {
        let discountedValue = (state.total - (state.total * 10 / 100).toFixed(0));
        return {
            ...state,
            total: discountedValue
        }
    };

    if (action.type === SET_PAGE) {
        if (action.id === "right") {
            return {
                ...state,
                page: state.page + 1
            }
        };
        if (action.id === "left") {
            return {
                ...state,
                page: state.page - 1
            }
        };
        if (action.id === "") {
            return {
                ...state,
                page: state.page
            }
        };
        return {
            ...state,
            page: Number(action.id)
        }
    }

    else {
        return state;
    }
};

export default itemsReducers;