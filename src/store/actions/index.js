import {BOOK_SLOT,GET_BOOKING} from "../actionType"


export const bookSlot = (body,dispatch) =>{
    dispatch({
        type : BOOK_SLOT,
        paylode : body
    })
}

export const getBooking = (body,dispatch) =>{
    dispatch({
        type : GET_BOOKING,
        paylode : body
    })
}