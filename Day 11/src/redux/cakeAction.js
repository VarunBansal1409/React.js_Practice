import { BUY_CAKE, CAKE_SOLD } from "./cakeType"

export let noofcake = () => {
    return{
        type : BUY_CAKE
    }
}

export let cakesold = () => {
    return{
        type : CAKE_SOLD
    }
}
