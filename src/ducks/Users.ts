import { Dispatch } from 'redux';
import {IServices} from '../services'
interface ILogin{
    email: string
    password: string
}

export default function reducer(state = {}){
    return state 
}


export default login = (payload: ILogin) =>
(dispatch: Dispatch, getState: ()=> any, { auth}: IServices)=>{
    
}