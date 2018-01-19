import axios from 'axios';

const initialState = {
    user: {},
    isLoading: false,
    didError: false
}

const CREATE_USER = 'CREATE_USER';

export function createUser(email, password) {
    return {
        type: CREATE_USER,
        payload: axios
            .post('/user/create', { email, password })
            // THIS IS A POST REQUEST SO WE USE REQ.BODY
    }
}

// export function createUser(email, password) {
//     return {
//         type: CREATE_USER,
//         payload: axios
//             .get(`/user/create/${email}/${password}`)
//             // THIS IS A GET REQUEST SO WE USE REQ.PARAMS
//     }
// }

function reducer( state = initialState, action = {} ) {
    switch(action.type){

        case `${CREATE_USER}_PENDING`: 
          return Object.assign({}, state, {
             isLoading: true
            
      });
        case `${CREATE_USER}_FULFILLED`:
          return Object.assign({}, state, {
             isLoading: false,
             user: action.payload
             
      })

       case `${CREATE_USER}_REJECTED`:
          return Object.assign({}, state, {
             isLoading: false,
             didError: true
      })

        default: return state;
    }
}

export default reducer;

