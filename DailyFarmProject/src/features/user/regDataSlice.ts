import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {companyDate, countryDate, loginDate, personalDate, regDataType} from "../../types";


const initialState:regDataType={
    firstName: '',
    lastName: '',
    birthdate: '',
    company: '',
    email: '',
    password: '',
    phone: '',
    coordinates: {
        latitude: "32.7895613",
        longitude: "32.5383356",
    }

}

const regDataSlice = createSlice({
    name:"regsSlice",
    initialState,
    reducers:{
        addPersonalDate:(state,action:PayloadAction<personalDate>)=>{
          state.firstName=action.payload.firstName;
          state.lastName=action.payload.lastName;
          state.birthdate=action.payload.birthdate;
        },
        addCompanyDate:(state,action:PayloadAction<companyDate>)=>{
            state.company=action.payload.company;
        },
        addloginDate:(state,action:PayloadAction<loginDate>)=>{
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.phone=action.payload.phone;
        },
        addCountry:(state,action:PayloadAction<countryDate>)=>{
            state.coordinates!.latitude=action.payload.coordinates.latitude;
            state.coordinates!.longitude=action.payload.coordinates.longitude;
        }

    }

})

export const {addPersonalDate,addCompanyDate,addloginDate,addCountry} = regDataSlice.actions;
export default regDataSlice.reducer;