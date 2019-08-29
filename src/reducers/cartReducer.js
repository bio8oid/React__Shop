import { ADD_TO_CART,PASS_ID,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SORT_PRICE_ASC, SORT_PRICE_DESC, SORT_NAME_ASC, SORT_NAME_DESC } from '../actions/actions'
import products from '../Data/Data.json';


const initState = {
    items: products,
    activeItemsList: products,
    addedItems: [],
    total: 0,
    clickedProduct: []
}


const cartReducer = (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === PASS_ID){
        let clickedProduct = state.items.find(item=> item.id === action.id)   
        console.log(clickedProduct)
          return{
              ...state,
              clickedProduct: [ clickedProduct ]
            }
        }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        let newTotal = state.total - ( itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    
    if(action.type === SORT_PRICE_ASC){
        let sortedList = state.items.sort((a, b) => (a.price - b.price))
          return{
              ...state,
              items: sortedList
          }
    }

    if(action.type === SORT_PRICE_DESC){
        let sortedList = state.items.sort((a, b) => (b.price - a.price))
          return{
              ...state,
              items: sortedList
          }
    }

    if(action.type === SORT_NAME_ASC){
        let sortedList = state.items.sort((a, b) => a.title.localeCompare(b.title))
        console.log(sortedList)
          return{
              ...state,
              items: sortedList
          }
    }

    if(action.type === SORT_NAME_DESC){
        let sortedList = state.items.sort((a, b) => b.title.localeCompare(a.title))
        console.log(sortedList)
          return{
              ...state,
              items: sortedList
          }
    }
    
    if(action.type === SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }

        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }

    if(action.type === ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 3.99
          }
    }

    if(action.type === 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 3.99
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
