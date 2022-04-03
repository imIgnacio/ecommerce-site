import { GET_PRODUCTS, LOADING } from "../types/types";
// import { store } from "../index";

const initialState = {
    products: [],
    isLoading: false
}

const counterReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case GET_PRODUCTS:
            return { 
                ...state,
                isLoading: false, 
                products: action.payload }
        default:
            return state;
    }
}

export default counterReducer;