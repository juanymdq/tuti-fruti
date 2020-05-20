import { INCREMENT } from '../actions/index'

export const reducer = (state = 0, action) => {
    if(action.type === INCREMENT){
        return state + 1
    }
    return state
}