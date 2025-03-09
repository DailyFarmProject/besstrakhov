import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {loginDataType, regDataType} from "../types";


export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://daily-farm-latest.onrender.com",
        // responseHandler:response => response.text()
    }),
    endpoints: (build) => ({
        signInApi: build.mutation<string, Partial<regDataType>>({
            query: (data) => ({
                url: "/farmer/register",
                method: "POST",
                body: JSON.stringify(data),
                responseHandler:async (response)=>{
                   response.text()

                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',

                },
            }),
            // transformErrorResponse: async (error) => {
            //     if ("data" in error && typeof error.data === "string") {
            //         return {status: error.status, message: error.data}; // Use `error.data` directly
            //     }
            //     return {status: error.status, message: "unknown error"}
            //
            // }

        }),
        logInApi:build.mutation<{ "accessToken": "string", "refreshToken": "string"},Partial<loginDataType>>({
            query: (data) => ({
                url: "/farmer/login",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    responseHandler: "json",
                },
            }),
        })

    })

})

export const {useSignInApiMutation,useLogInApiMutation} = accountApi;