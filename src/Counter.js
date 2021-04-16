import { createStore } from 'redux';

const initialState = {
    value: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                value: state.value + 1
            }
        case "decrement":
            return {
                value: state.value - 1
            }

        default:
            return state

    }
}

export const store = createStore(reducer);

const increment = {
    type: "increment"
}

export const Increment = () => {
    return increment

}
const decrement = {
    type: "decrement"
}

export const Decrement = () => {
    return decrement

}



