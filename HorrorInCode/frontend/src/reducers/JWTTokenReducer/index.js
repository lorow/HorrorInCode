const JWTTokenReducer = (state = "", action) => {

    switch(action.type){
        case 'SET_TOKEN':
            return action.text
        
        default:
            return state
    }

}

export default JWTTokenReducer