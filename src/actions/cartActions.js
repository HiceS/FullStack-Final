import { getMaxListeners } from "cluster";

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

        const firestore = getFirestore();
        firestore.collection('Purchases').add({
            ...project,
            price: 12,
            email: 'shawnhice@gmail.com',
            GUID: 'asdasd1231w2edsdasdasde33r234234',
            date: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ORDER', project});
        }).catch((err) => {
            console.log('Could not create purchase');
            dispatch({ type: 'CREATE_ORDER_ERROR', err});
        })
    }
};