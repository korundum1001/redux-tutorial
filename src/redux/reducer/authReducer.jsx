const authState = {
    isAuth: false,
    list : [
        {
            id: 1,
            name: 'sigra'
        },
        {
            id: 2,
            name: 'ayla'
        }
    ]
}

export const authReducer = (state=authState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuth: true
            }
        
        default:
            return state
    }

}