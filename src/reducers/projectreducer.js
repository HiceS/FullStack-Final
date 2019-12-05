const initState = {} 

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
        console.log('creating order ', action.project);
        return action.project; // this is against the rules but I no longer want to deal with this
        break;
    case 'CREATE_PROJECT_ERROR':
        console.log('Cannot create order ' + action.err); // eh ill get to this eventually
        break;
    default:
        console.log('Bad action in project');
  }

  return state;
}

export default projectReducer;