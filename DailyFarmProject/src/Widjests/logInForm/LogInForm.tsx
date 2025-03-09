import {useAppDispatch} from "../../app/hooks.ts";
import {setToken} from "../../features/user/userSlice.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {loginDataType} from "../../types";
import {useLogInApiMutation} from "../../api/accountApi.ts";

const LogInForm = () => {
    const dispatch = useAppDispatch();
    const [loginData,setLoginData] = useState<Partial<loginDataType>>({})
    const [trigger,{data,isError,isSuccess,isLoading}]=useLogInApiMutation();

    useEffect(() => {
        if(isLoading){
            console.log("loading")
        }
        if(isError){
            console.log("error")
        }
        if(isSuccess){
            console.log(data)
        }

    },[data,isError,isSuccess]);


    const handleChange=(e:ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleClick=()=>{
        const finaleData={
            email: loginData.login,
            password: loginData.password,
        }
        console.log(finaleData)

        trigger(finaleData)

       setTimeout(()=>dispatch(setToken(true)),150)
    }


    return (
        <div className={"inputForm"}>

            <label> Log In:
                <input className={"inputFormItem"} type={"text"} name={"login"} onChange={handleChange}/>
            </label >
            <label> Password:
                <input className={"inputFormItem"} name={"password"} onChange={handleChange} type={"text"}/>
            </label>
            <button className={"loginButton"}  onClick={handleClick}> Log In</button>
        </div>
    );
};

export default LogInForm;