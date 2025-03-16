import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface userSlice {
    isAuthentication: boolean;
}

const initialState: userSlice= {
    isAuthentication: false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuthentication: (state, action: PayloadAction<boolean>) =>{
            state.isAuthentication = action.payload
        }
    }
})

export const {setAuthentication} = userSlice.actions;
export default userSlice.reducer;
