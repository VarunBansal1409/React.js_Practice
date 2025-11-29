import { cakesold } from "./cakeAction"
import { BUY_CAKE, CAKE_SOLD } from "./cakeType"

let initialValue = {
    noofcake : 11,
    cakesold : 108
}

let cakeReducer = (state = initialValue , action) => {
    switch(action.type)
    {
        case BUY_CAKE:
            return{
                ...state,
                noofcake : state.noofcake - 1
            }
        
        case CAKE_SOLD:
            return{
                ...state,
                cakesold : state.cakesold + 1
            }

            default :
                return state
    }
}

export default cakeReducer