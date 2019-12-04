const initState = {
    cart: []
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_ORDER':
            console.log('creating order ', action.project);
            break;
        case 'CREATE_ORDER_ERROR':
            console.log('Cannot create order ' + action.err);
            break;
        default:
            console.log('Bad action in cart');
    }
    
    return state;
}

export default cartReducer;