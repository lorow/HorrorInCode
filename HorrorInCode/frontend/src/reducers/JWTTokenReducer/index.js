const JWTTokenReducer = (state = "", action) => {

    switch(action.type){
        case 'SET_TOKEN':
            return action.text
        
        default:
            return ''
    }

}

export default JWTTokenReducer