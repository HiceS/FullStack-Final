export const addCart = (id) => {
    return {
        type: "ADD_CART",
        id: id,
        quantity: quantity
    }
};

export const removeCart = (id) => {
    return {
        type: "DELETE_CART",
        id: id,
        quantity: quantity
    }
};

export const createCartOrder = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async call here with thunk
        dispatch({ type: 'CREATE_PROJECT', project: project});
    }
};