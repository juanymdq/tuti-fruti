import {createStore} from 'redux'

const reducer = () => {

}

const initialState = 0
const store = createStore(reducer, initialState)

store.subscribe(() => {
    console.log("State has changed" + store.getState())
})

const incrementCount = (count) => {
    return {
        type: "INCREMENT",
        payload: count
    }
}

store.dispatch(incrementCount(1))