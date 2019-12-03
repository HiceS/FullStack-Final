import cartReducer from './cartreducer';
import projectReducer from './projectreducer';
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
    cart: cartReducer,
    project: projectReducer
})

export default rootreducer;


// changed this because it was over complicating things
/**
 * Basic item layout
 * Each DB has a verison number that is a date that corresponds to the most up to date database
 * Each DB has a categories list
 * Each category can contain
 * ? Category []
 * ? Items
 * - UID for routing
 * But cannot contain both a subcategory and items list
 * Each Items can contain
 * - Item []
 * Each Item can contain
 * - UID for routing
 * - name
 * - Price
 * - Information
 * - Photos []
 *                      DB
 *                      Version s
 *                      Category []
 *          Category []               Item []
 *      Item[]                   Item            Item
 * 
 * Recursively generate Cats components, category and item are similiar and spawn in different sections
 */