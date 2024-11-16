const initState = {
    isLoading: false,
}

export type LoadingReducerStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingReducerACType): LoadingReducerStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return { ...state, isLoading: action.isLoading }
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type LoadingReducerACType = LoadinACType

type LoadinACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
