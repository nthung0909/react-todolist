import {createStore} from 'redux'

var initialState={
    status:false,
    searchKey:''
}
var  myReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SEARCH':
            state.searchKey=action.searchKey;
            break;
    }
    return state;
}

const store=createStore(myReducer);
const action={
    type:"SEARCH",
    searchKey:'learn'
}
store.dispatch(action);
console.log('Sort:', store.getState());