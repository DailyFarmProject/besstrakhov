import {configureStore} from "@reduxjs/toolkit";
import cards from "../features/cardsSlice/CardsSlice.tsx";
import user from "../features/user/userSlice.ts";

export const store = configureStore({
    reducer: {
        user,cards
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch