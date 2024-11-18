const initState = {
    themeId: 1,
}

export type Theme = typeof initState

export const themeReducer = (state = initState, action: ThemeReducerActionType): Theme => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return { ...state, themeId: action.id }
        }
        default:
            return state
    }
}

type ThemeReducerActionType = ChangeThemeId

type ChangeThemeId = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
