import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface userSlice {
    token: boolean;
}

const initialState: userSlice= {
    token: false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setToken: (state, action: PayloadAction<boolean>) =>{
            state.token = action.payload
        }
    }
})

export const {setToken} = userSlice.actions;
export default userSlice.reducer;
