export const addCart = (id) => {
    return {
        type: "ADD_CART",
        id: id,
        quantity: quantity
    }
}

export const removeCart = (id) => {
    return {
        type: "DELETE_CART",
        id: id,
        quantity: quantity
    }
}