import {GET_USERS, GET_PROFILE} from '../types'

const UserReducer = (state, action) =>{
	//pauload: son los datos que me pasan en una función. Es como decir "data"
	const {payload, type} = action;

	switch(type){
		case GET_USERS:
			return{
				...state,
				users: payload
			}
		case GET_PROFILE:
			return{
				...state,
				selectedUser: payload
			}
		default:
			return state;
	}
}
 export default UserReducer;