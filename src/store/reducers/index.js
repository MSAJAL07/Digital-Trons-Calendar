import {BOOK_SLOT} from "../actionType"
import {initialState} from "./state"


export const bookingReducer =(state= initialState,action)=>{
    switch(action.type){
        case BOOK_SLOT : {
            let newSlots = [...state.slots]
            newSlots[action.paylode.slot.id-1] = action.paylode.slot
            let newUsers = [...state.bookings].filter(e=> e.id !== action.paylode.userData.id )
            newUsers.push(action.paylode.userData)
            return {
                slots : newSlots,
                bookings : newUsers
            }
        }
        default : {
            return {
                ...state
            }
        }
    }

}


