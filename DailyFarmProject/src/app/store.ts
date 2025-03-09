import {configureStore} from "@reduxjs/toolkit";
import cards from "../features/cardsSlice/CardsSlice.tsx";
import user from "../features/user/userSlice.ts";
import regData from "../features/user/regDataSlice.ts";
import {accountApi} from "../api/accountApi.ts";


export const store = configureStore({
    reducer: {
        user,cards,regData,
        [accountApi.reducerPath]: accountApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(accountApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch