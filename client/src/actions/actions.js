import { GET_PRODUCTS, LOADING } from "../types/types"

export function getProducts(payload) {
    return { type: GET_PRODUCTS, payload }
}

export function loading() {
    return { type: LOADING }
}