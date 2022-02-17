import { PlayerActionTypes, PlayerState } from "../../types/player"

const initialState: PlayerState = {

}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case PlayerActionTypes.PAUSE:
            return {...state, pause: true}
        case PlayerActionTypes.PLAY:
            return {...state, play: true}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypes.SET_ACTIVE: 
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        default:
            return state
    }
} 

export default playerReducer;
