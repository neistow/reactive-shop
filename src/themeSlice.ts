import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
}

const initialState: ThemeState = {
    theme: 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },
    },
})

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
