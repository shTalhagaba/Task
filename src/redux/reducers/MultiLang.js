import { INCREMENT, DECREMENT, GETCONF } from '../actions/DeclarationTypes/MultiLang';

const initialState = {
    counter: 0
}

const MultiLang = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case INCREMENT:
            newState.counter = newState.counter + 1
            break;
        case DECREMENT:
            newState.counter = newState.counter - 1
            break;
        default:
            break;
    }
    return newState;
};

export default MultiLang;