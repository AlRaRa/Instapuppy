import { Dispatch } from 'redux';
import {IServices} from '../services'
export interface ILogin{
    email: string
    password: string
}

export default function reducer(state = {}){
    return state 
}


export const glogin = ({email, password}: ILogin) =>
 async(dispatch: Dispatch, getState: ()=> any, { auth}: IServices)=>{
    const result = await auth.signInWithEmailAndPassword(email, password)
    console.log(result)
    
}