import {Action } from './actions';

export interface UserState {
    tokens: string,
    names: string,
    tipos: string,
}
export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}