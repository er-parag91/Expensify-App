import { createStore } from 'redux';


const incrementCount = ({ value = 80 } = {}) => ({
    type: 'INCREMENT',
    value
})

const decrementCount = ({ value = 80 } = {}) => ({
    type: 'DECREMENT',
    value
})

const setCount = ({ value = 1000 } = {}) => ({
    type: 'SET',
    value
})

const resetCount = ({ value = 0 } = {}) => ({
    type: 'RESET',
    value
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.value
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.value
            }

        case 'RESET':
            return {
                ...state,
                count: action.value
            }

        case 'SET':
            return {
                ...state,
                count: action.value
            }

        default:
            return state
    }
}
const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({ value: 10 }))

store.dispatch(decrementCount({ value: 20 }))

store.dispatch(setCount({ value: 100 }))
store.dispatch(setCount())
store.dispatch(resetCount({ value: 0 }))